import { Accessor, createEffect } from "solid-js"
import { Factory, RendererBackends } from "vexflow"
import styles from "./vex-frame.module.css"

interface VexFlowProps {
  note: Accessor<string>
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

    // width and height should be aspect ratio
    const width = 100 + NUMBER_OF_ACCIDENTALS_PER_KEY["C"] * 40

    // todo: make relative to height and width of keys range
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
    const notes = score.notes(`${props.note()}4/w`)

    factory
      .System()
      .addStave({ voices: [score.voice(notes)] })
      .addClef("treble")

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

// look up tables for converting putting the sharp in it.

const NUMBER_OF_ACCIDENTALS_PER_KEY = {
  C: 0,
  G: 1,
  D: 2,
  A: 3,
  E: 4,
  B: 5,
  Cb: 7,
  "F#": 6,
  Gb: 6,
  Db: 5,
  "C#": 7,
  Ab: 4,
  Eb: 3,
  Bb: 2,
  F: 1,
}
