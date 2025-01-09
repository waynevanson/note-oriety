import { createMemo, createSignal } from "solid-js"
import "./App.css"
import styles from "./App.module.css"
import { ButtonGrid } from "./components/button-grid"
import { VexFrame } from "./components/vex-frame"
import "./reset.css"
import { createStore } from "solid-js/store"
import {
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
  KeySignatureDistinctKeyed,
  PITCH_CLASS_KINDS_PITCH_CLASS,
  PitchClassKind,
} from "./lib"

// todo: option to show chromatics
export function App() {
  const [signature, signatureSet] = createSignal<KeySignatureDistinctKeyed>("C")

  const [showChromatics, showChromaticsSet] = createSignal(false)

  function createAnswer(): PitchClassKind {
    return Math.floor(
      Math.random() * PITCH_CLASS_KINDS_PITCH_CLASS.length
    ) as PitchClassKind
  }

  const [answer, answerSet] = createSignal<PitchClassKind>(createAnswer())

  const [outcome, outcomeSet] = createStore({ incorrect: 0, correct: 0 })
  const total = createMemo(() => outcome.correct + outcome.incorrect)

  const accuracy = createMemo(() =>
    total() <= 0 ? 0 : Math.trunc(100 * (outcome.correct / total()))
  )

  const [streak, streakSet] = createSignal(0)

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
      <VexFrame pitchClassKind={answer} signature={signature} />
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
            {Object.keys(KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY).map((sig) => (
              <option value={sig} selected={signature() == sig}>
                {sig}
              </option>
            ))}
          </select>
        </label>
        {false && (
          <label for="input.chromatics">
            <span> Chromatics: </span>
            <input
              type="checkbox"
              checked={showChromatics()}
              onChange={(event) =>
                showChromaticsSet(event.currentTarget.checked)
              }
            />
          </label>
        )}
        <span> Streak: {streak()} </span>
        <span>
          Accuracy: {accuracy()}% ({outcome.correct} of {total()})
        </span>
      </section>
      <ButtonGrid answer={answer} onClick={handleGuess} />
    </main>
  )
}
