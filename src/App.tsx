import { createEffect, createMemo, createSignal } from "solid-js"
import "./App.css"
import styles from "./App.module.css"
import { ButtonGrid } from "./components/button-grid"
import { VexFrame } from "./components/vex-frame"
import { NOTES_LABELS } from "./constants"
import "./reset.css"

function createAnswer() {
  return Math.floor(Math.random() * NOTES_LABELS.length)
}

export function App() {
  const [answer, answerSet] = createSignal<number>(createAnswer())
  const [guess, guessSet] = createSignal<number | undefined>()

  createEffect(() => {
    if (answer() === guess()) {
      answerSet(createAnswer())
    }
  })

  const note = createMemo(() => NOTES_LABELS[answer()]!)

  return (
    <main class={styles.main}>
      <VexFrame note={note} />

      <ButtonGrid
        onClick={(index) => {
          guessSet(index)
        }}
      />
    </main>
  )
}

function createAccuracy(corrects: Array<boolean>): number {
  const total = corrects.length

  if (total <= 0) return 0

  const sum = corrects
    .map((boolean) => Number(boolean))
    .reduce((left, right) => left + right, 0)

  return Math.trunc(100 * (sum / total))
}
