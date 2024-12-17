import "normalize.css"
import "./App.css"
import styles from "./App.module.css"
import {
  Accessor,
  createEffect,
  createMemo,
  createSignal,
  Index,
} from "solid-js"
import { Factory } from "vexflow"

// notes: [0-11]
// clefs: {treble,bass}
// keys: [A-G][#d]?

export interface VexFlowProps {
  id: string
  note: Accessor<number>
}

const NOTES = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]

function VexFlow(props: VexFlowProps) {
  let ref: HTMLDivElement | undefined
  let vf: Factory | undefined

  createEffect(() => {
    const note = NOTES[props.note()]
    if (!ref) return

    if (ref.children.length > 0) {
      ref.innerHTML = ""
    }

    const rect = ref.getBoundingClientRect()

    vf = new Factory({
      renderer: {
        elementId: props.id,
        width: rect.width,
        height: rect.height,
        background: "#eee",
      },
    })

    const score = vf.EasyScore()
    const system = vf.System()

    // Create a 4/4 treble stave and add two parallel voices.
    system
      .addStave({
        voices: [
          // Top voice has 4 quarter notes with stems up.
          score.voice(score.notes(`${note}4/w`)),
        ],
      })
      .addClef("treble")

    vf.draw()
  })

  return <div style={{ width: "100%" }} ref={ref} id={props.id} />
}

function createAnswer() {
  return Math.floor(Math.random() * NOTES.length)
}

export function App() {
  const [corrects, correctsSet] = createSignal<Array<boolean>>([])
  const [answer, answerSet] = createSignal<number>(createAnswer())
  const [guess, guessSet] = createSignal<number | undefined>()

  const correct = createMemo(() => answer() === guess())
  const accuracy = createMemo(() => {
    const total = corrects().length
    if (total <= 0) return 0
    const sum = corrects()
      .map((boolean) => Number(boolean))
      .reduce((left, right) => left + right, 0)

    return Math.trunc(100 * (sum / total))
  })

  return (
    <main class={styles.main}>
      <VexFlow id="vexflow" note={answer} />
      <section>
        <p>Guess: {guess() !== undefined ? NOTES[guess()!] : "None"}</p>
        <p>Correct: {correct() ? "Yes" : "No"}</p>
        <p>Corrects: {corrects().filter(Boolean).length}</p>
        <p>Accuracy: {accuracy()}%</p>
      </section>
      <section>
        {correct() ? (
          <button onClick={() => answerSet(createAnswer())}>Next</button>
        ) : (
          <Index each={NOTES}>
            {(label, index) => (
              <button
                onClick={() => {
                  correctsSet((corrects) => corrects.concat(index === answer()))
                  guessSet(index)
                }}
              >
                {label()}
              </button>
            )}
          </Index>
        )}
      </section>
    </main>
  )
}
