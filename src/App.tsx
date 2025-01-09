import { createMemo } from "solid-js"
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

export interface AppStore {
  signature: KeySignatureDistinctKeyed
  showChromatics: boolean
  answer: PitchClassKind
  outcome: Record<"correct" | "incorrect", number>
  streak: number
  octave: 4 | 5
}

function createAnswer(): PitchClassKind {
  return Math.floor(
    Math.random() * PITCH_CLASS_KINDS_PITCH_CLASS.length
  ) as PitchClassKind
}

function createOctave(): 4 | 5 {
  return (Math.round(Math.random()) + 4) as never
}

// todo: generate more than 1 octave in ranges.
// todo: create control panel
// todo: add bass and that middle clef
// todo: option to show chromatics
export function App() {
  const [store, storeSet] = createStore<AppStore>({
    answer: createAnswer(),
    outcome: { correct: 0, incorrect: 0 },
    showChromatics: false,
    signature: "C",
    streak: 0,
    octave: createOctave(),
  })

  const total = createMemo(
    () => store.outcome.correct + store.outcome.incorrect
  )

  const accuracy = createMemo(() =>
    total() <= 0 ? 0 : Math.trunc(100 * (store.outcome.correct / total()))
  )

  function handleGuess(index: number) {
    // wrong guess
    if (index !== store.answer) {
      storeSet("streak", 0)
      storeSet("outcome", "incorrect", (a) => a + 1)
      return
    }

    // correct guess
    storeSet("streak", (number) => number + 1)
    storeSet("outcome", "correct", (a) => a + 1)

    // ensure answer isn't the same as before
    while (true) {
      const next = createAnswer()
      if (next === store.answer) continue
      storeSet("answer", next)
      break
    }

    storeSet("octave", createOctave())
  }

  return (
    <main class={styles.main}>
      <VexFrame
        pitchClassKind={() => store.answer}
        signature={() => store.signature}
        octave={() => store.octave}
      />
      <section>
        <label for="input.key">
          <span>Key Signature </span>
          <select
            name="input.key"
            id="input.key"
            onChange={(e) => {
              storeSet("signature", e.currentTarget.value as never)
            }}
          >
            {Object.keys(KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY).map((sig) => (
              <option value={sig} selected={store.signature == sig}>
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
              checked={store.showChromatics}
              onChange={(event) =>
                storeSet("showChromatics", event.currentTarget.checked)
              }
            />
          </label>
        )}
        <span> Streak: {store.streak} </span>
        <span>
          Accuracy: {accuracy()}% ({store.outcome.correct} of {total()})
        </span>
      </section>
      <ButtonGrid answer={() => store.answer} onClick={handleGuess} />
    </main>
  )
}
