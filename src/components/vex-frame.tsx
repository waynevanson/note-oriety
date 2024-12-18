import { Accessor, createEffect } from "solid-js"
import {
  Accidental,
  Formatter,
  Renderer,
  Stave,
  StaveNote,
  Voice,
} from "vexflow"
import styles from "./vex-frame.module.css"
import { createElementSize } from "@solid-primitives/resize-observer"

interface VexFlowProps {
  note: Accessor<string>
}

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

  const size = createElementSize(() => ref)

  createEffect((rerender: boolean) => {
    if (!ref) return false

    if (rerender) {
      ref.innerHTML = ""
    }

    // width and height should be aspect ratio
    const width = 100
    const height = 100

    const renderer = new Renderer(ref, Renderer.Backends.SVG)

    const context = renderer.getContext()

    context.resize(width, height)

    const stave = new Stave(0, 0, width).addClef("treble")

    stave.setContext(context).draw()

    const key = props.note().slice(0, 1)
    const accidental = props.note().slice(1, 2)

    const note = new StaveNote({
      duration: "w",
      keys: [key + "/4"],
      clef: "treble",
    }).addClass(styles.note)

    if (accidental) {
      note.addModifier(new Accidental(accidental))
    }

    const voice = new Voice({ beatValue: 1, numBeats: 1 }).addTickable(note)

    new Formatter().joinVoices([voice]).formatToStave([voice], stave)

    voice.draw(context, stave)

    const svg = ref.firstChild! as SVGElement
    svg.removeAttribute("width")
    svg.removeAttribute("height")

    return true
  }, false)

  return <div ref={ref} />
}
