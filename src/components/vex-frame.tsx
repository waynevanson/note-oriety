import { Accessor, createEffect, createMemo } from "solid-js"
import { Factory, RendererBackends } from "vexflow"
import styles from "./vex-frame.module.css"
import { KeySignature, NaturalNote, Note } from "../types"
import {
  KEY_SIGNATURES,
  KEY_SIGNATURES_ACCIDENTALS_COUNT,
  KEY_SIGNATURES_ACCIDENTALS,
  KEY_SIGNATURES_FLAT,
} from "../constants"

interface VexFlowProps {
  note: Accessor<string>
  signature: Accessor<(typeof KEY_SIGNATURES)[number]>
}

const ID = "note-oriety-vex-flow"

/**
 * @summary
 * The single implementation we need for VexFlow.
 *
 * @param props
 * @returns
 */
export function VexFrame(props: VexFlowProps) {
  let ref: HTMLDivElement | undefined

  const note = createMemo(() =>
    transposeAccidentalToVexFlow(props.signature(), props.note() as never)
  )

  createEffect((rerender: boolean) => {
    if (!ref) return false

    if (rerender) {
      ref.innerHTML = ""
    }

    const accidentalsCount = KEY_SIGNATURES_ACCIDENTALS_COUNT[props.signature()]
    const width = 100 + accidentalsCount * 10

    // todo: make relative to height relative to the clefs we display.
    const height = 140

    const factory = new Factory({
      renderer: {
        elementId: ID,
        width,
        height,
        backend: RendererBackends.SVG,
      },
    })

    const score = factory.EasyScore()
    const notes = score.notes(`${note()}4/w`)

    factory
      .System()
      .addStave({ voices: [score.voice(notes)] })
      .addClef("treble")
      .addKeySignature(props.signature())

    factory.draw()

    const svg = ref.firstChild! as SVGElement

    // ensure we can size svg dynamically
    svg.removeAttribute("width")
    svg.removeAttribute("height")

    // add custom classes
    svg.classList.add(styles.svg)
    ref.classList.add(styles.ref)

    return true
  }, false)

  return <div id={ID} ref={ref} />
}

// sound
// score
// clefs
// create combinations, even multiple combinations.

// VexFlow will show a sharp in the note even if the key signature implies that note.
// We have to undo that.
function transposeAccidentalToVexFlow(
  keySignature: KeySignature,
  note: Note
): string {
  const accidentals = KEY_SIGNATURES_ACCIDENTALS[keySignature]
  const flat = KEY_SIGNATURES_FLAT[keySignature]

  // no accidentals: 'C'
  if (flat === null || accidentals.length <= 0) {
    return note
  }

  const normal = note.slice(0, 1) as NaturalNote

  // note is always displayed as is
  if (!accidentals.includes(normal)) {
    return note
  }

  // display as natural when in key that implies it is sharp of flat
  if (normal === note) {
    return note + "n"
  }

  if (!flat) {
    return normal
  }

  return NEXT[normal as unknown as never]
}

// transpot G -> A, A -> B

const NEXT = {
  G: "A",
  A: "B",
  B: "C",
  C: "D",
  D: "E",
  E: "F",
  F: "G",
}
