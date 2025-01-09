import { Accessor, createEffect, createMemo } from "solid-js"
import { Factory, RendererBackends } from "vexflow"
import styles from "./vex-frame.module.css"
import {
  NormalKey,
  Key,
  PitchClassKind,
  PITCH_CLASS_KINDS_PITCH_CLASS,
  KeySignatureDistinctKeyed,
  countAccidentals,
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
} from "../lib"

interface VexFlowProps {
  pitchClassKind: Accessor<PitchClassKind>
  signature: Accessor<KeySignatureDistinctKeyed>
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

  const note = createMemo(
    () =>
      KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY[props.signature()][
        props.pitchClassKind()
      ]
  )

  createEffect((rerender: boolean) => {
    if (!ref) return false

    if (rerender) {
      ref.innerHTML = ""
    }

    const accidentalsCount = countAccidentals(
      KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY[props.signature()]
    )
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
