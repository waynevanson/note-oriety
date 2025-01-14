import { Accessor, createEffect, createMemo } from "solid-js"
import { Factory, RendererBackends } from "vexflow"
import styles from "./vex-frame.module.css"
import {
  PitchClassKind,
  KeySignatureDistinctKeyed,
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
  ACCIDENTALS,
} from "../lib"
import { Octave } from "../App"

export type Clef = "bass" | "alto" | "treble"

interface VexFlowProps {
  pitchClassKind: Accessor<PitchClassKind>
  signature: Accessor<KeySignatureDistinctKeyed>
  octave: Accessor<Octave>
  clef: Clef
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

    const width = 100 + ACCIDENTALS[props.signature()] * 10

    // todo: make relative to height relative to the clefs we display.
    const height = 120
    const y = 10
    const viewport = `0 ${y} ${width} ${height - y}`

    const factory = new Factory({
      renderer: {
        elementId: ID,
        width,
        height,
        backend: RendererBackends.SVG,
      },
    })

    const score = factory.EasyScore()

    const notes = score.notes(`${note()}${props.octave()}/w`, {
      clef: props.clef,
    })

    factory
      .System()
      .addStave({ voices: [score.voice(notes)] })
      .addClef(props.clef)
      .addKeySignature(props.signature())

    factory.draw()

    const svg = ref.firstChild! as SVGElement

    // ensure we can size svg dynamically
    svg.removeAttribute("width")
    svg.removeAttribute("height")
    svg.setAttribute("viewBox", viewport)

    // add custom classes
    svg.classList.add(styles.svg)
    ref.classList.add(styles.ref)

    return true
  }, false)

  return <div id={ID} ref={ref} />
}
