import { Accessor, createEffect } from "solid-js"
import { Accidental, Factory, RendererBackends } from "vexflow"
import styles from "./vex-frame.module.css"

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
// todo: use easy version of this API
export function VexFrame(props: VexFlowProps) {
  let ref: HTMLDivElement | undefined

  createEffect((rerender: boolean) => {
    if (!ref) return false

    if (rerender) {
      ref.innerHTML = ""
    }

    const accidentalsCount = NUMBER_OF_ACCIDENTALS_PER_KEY[props.signature()]
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
    const vexableNote = transposeAccidentalToVexFlow(
      props.signature(),
      props.note() as any
    )
    const notes = score.notes(`${vexableNote}4/w`)

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
// key signatures
// clefs
// create combinations, even multiple combinations.

const ss = {
  "#": ["F", "C", "G", "D", "A", "E", "B"],
  b: ["B", "E", "A", "D", "G", "C", "F"],
}

export const NUMBER_OF_ACCIDENTALS_PER_KEY = {
  Ab: 4,
  A: 3,
  "A#": 2,
  Bb: 2,
  B: 5,
  Cb: 7,
  C: 0,
  "C#": 7,
  Db: 5,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  F: 1,
  "F#": 6,
  Gb: 6,
  G: 1,
}

export type NOTES =
  | "Ab"
  | "A"
  | "A#"
  | "Bb"
  | "B"
  | "Cb"
  | "C"
  | "C#"
  | "Db"
  | "D"
  | "D#"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "Gb"
  | "G"

export const ACCIDENTALS_PER_KEY: Record<
  NOTES,
  { accidentals: number; flatten: boolean }
> = {
  Ab: { accidentals: 4, flatten: true },
  A: { accidentals: 3, flatten: false },
  "A#": { accidentals: 2, flatten: true },
  Bb: { accidentals: 2, flatten: true },
  B: { accidentals: 5, flatten: false },
  Cb: { accidentals: 7, flatten: true },
  C: { accidentals: 0, flatten: false },
  "C#": { accidentals: 7, flatten: false },
  Db: { accidentals: 5, flatten: true },
  D: { accidentals: 2, flatten: false },
  "D#": { accidentals: 3, flatten: true },
  Eb: { accidentals: 3, flatten: true },
  E: { accidentals: 4, flatten: false },
  F: { accidentals: 1, flatten: true },
  "F#": { accidentals: 6, flatten: false },
  Gb: { accidentals: 6, flatten: true },
  G: { accidentals: 1, flatten: false },
}

export const KEY_SIGNATURES = Object.keys(
  NUMBER_OF_ACCIDENTALS_PER_KEY
) as Array<keyof typeof NUMBER_OF_ACCIDENTALS_PER_KEY>

// I still have to create a bunch of look up tables..
// keysignature -> actual note -> rendered note

// VexFlow will show a sharp in the note even if the key signature implies that note.
// We have to undo that.
function transposeAccidentalToVexFlow(
  keySignature: NOTES,
  note: NOTES
): string {
  const config = ACCIDENTALS_PER_KEY[keySignature]

  // no accidentals
  if (config.accidentals <= 0) {
    return note
  }

  const symbol = config.flatten ? "b" : "#"

  const accidentals = ss[symbol].slice(0, config.accidentals)

  console.log({ accidentals })

  const normal = note.slice(0, 1)

  // note is always displayed as is
  if (!accidentals.includes(normal)) {
    return note
  }

  console.log({ normal, note, symbol })

  // implied F == F#
  if (config.flatten) {
    if (normal === note) {
      return note + "n"
    } else {
      return NEXT[normal as unknown as never]
    }
  } else {
    if (normal === note) {
      return note + "n"
    } else {
      return normal
    }
  }

  // in key of G, where F# implied,
  // flatten F# to F.
  // flatten F to Fn

  // in key of F, where Bb is implied,
  // sharpen Bb to B,
  // sharpen B to Bn
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
