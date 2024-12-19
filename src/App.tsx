import { createMemo, createSignal } from "solid-js"
import "./App.css"
import styles from "./App.module.css"
import { ButtonGrid } from "./components/button-grid"
import { VexFrame } from "./components/vex-frame"
import { KEY_SIGNATURES, NOTES_LABELS } from "./constants"
import "./reset.css"
import { createStore } from "solid-js/store"

function createAnswer() {
  return Math.floor(Math.random() * NOTES_LABELS.length)
}

export function App() {
  const [answer, answerSet] = createSignal<number>(createAnswer())
  const [signature, signatureSet] =
    createSignal<(typeof KEY_SIGNATURES)[number]>("C")
  const [streak, streakSet] = createSignal(0)

  const [outcome, outcomeSet] = createStore({ incorrect: 0, correct: 0 })
  const total = createMemo(() => outcome.correct + outcome.incorrect)

  const accuracy = createMemo(() =>
    total() <= 0 ? 0 : Math.trunc(100 * (outcome.correct / total()))
  )

  const note = createMemo(() => NOTES_LABELS[answer()]!)

  function handleGuess(index: number) {
    // wrong guess
    if (index !== answer()) {
      streakSet(0)
      outcomeSet("incorrect", (a) => a + 1)
      return
    }

    // correct guess
    streakSet((number) => number + 1)
    outcomeSet("correct", (a) => a + 1)

    // ensure answer isn't the same as before
    while (true) {
      const next = createAnswer()
      if (next === answer()) continue
      answerSet(next)
      break
    }
  }

  return (
    <main class={styles.main}>
      <VexFrame note={note} signature={signature} />
      <section>
        <label for="input.key">
          <span>Key Signature </span>
          <select
            name="input.key"
            id="input.key"
            onChange={(e) => {
              signatureSet(e.currentTarget.value as never)
            }}
          >
            {KEY_SIGNATURES.map((sig) => (
              <option value={sig} selected={signature() == sig}>
                {sig}
              </option>
            ))}
          </select>
        </label>
        <span> Streak: {streak()} </span>
        <span>
          Accuracy: {accuracy()}% ({outcome.correct} of {total()})
        </span>
      </section>
      <ButtonGrid answer={answer} onClick={handleGuess} />
    </main>
  )
}
