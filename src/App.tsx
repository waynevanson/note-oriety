import "./App.css"
import styles from "./App.module.css"
import { ButtonGrid } from "./components/button-grid"
import { Clef, VexFrame } from "./components/vex-frame"
import "./reset.css"
import { createStore } from "solid-js/store"
import {
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
  KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND,
  KeySignatureDistinctKeyed,
  PITCH_CLASS_KINDS_PITCH_CLASS,
  PitchClassKind,
} from "./lib"
import { ControlPanel } from "./components/control-panel"
import { createMemo } from "solid-js"
import { Piano } from "./components/piano"

export type Octave = 2 | 3 | 4 | 5 | 6

export type AltoOctave = 3 | 4

const ALTO_CLEF_OFFSET_MAP: Record<Clef, number> = {
  treble: 1,
  alto: 0,
  bass: -1,
}

export interface AppStore {
  signature: KeySignatureDistinctKeyed
  pitchClassKind: PitchClassKind
  clef: Clef
  altoOctave: AltoOctave
  showChromatics: boolean
  outcome: Record<"correct" | "incorrect", number>
  streak: number
}

function createPitchClassKind(): PitchClassKind {
  return Math.floor(
    Math.random() * PITCH_CLASS_KINDS_PITCH_CLASS.length
  ) as PitchClassKind
}

function createPitchClassKindKey(
  keySignature: KeySignatureDistinctKeyed
): PitchClassKind {
  const notes = KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND[keySignature]

  const notesIndex = Math.round(Math.random() * 6) as 0 | 1 | 2 | 3 | 4 | 5 | 6

  return notes[notesIndex]
}

// change
function createAltoOctave(): AltoOctave {
  const number = Math.round(Math.random()) + 3
  return number as never
}

// todo: option to show chromatics
export function App() {
  const [store, storeSet] = createStore<AppStore>({
    pitchClassKind: createPitchClassKind(),
    signature: "C",
    altoOctave: 4,
    outcome: { correct: 0, incorrect: 0 },
    showChromatics: true,
    streak: 0,
    clef: "treble",
  })

  const octave = createMemo(
    () => (store.altoOctave + ALTO_CLEF_OFFSET_MAP[store.clef]) as Octave
  )

  function increment() {
    // ensure answer isn't the same as before
    let pitchClassKind
    while (true) {
      pitchClassKind = store.showChromatics
        ? createPitchClassKind()
        : createPitchClassKindKey(store.signature)
      if (pitchClassKind === store.pitchClassKind) continue
      storeSet("pitchClassKind", pitchClassKind)
      break
    }

    storeSet("altoOctave", createAltoOctave())
  }

  function handleOnChangeChromatics(show: boolean) {
    storeSet("showChromatics", show)

    // todo: don't increment if we're the note is in the same key
    increment()
  }

  function handleGuess(pitchClassKind: number) {
    // wrong guess
    if (pitchClassKind !== store.pitchClassKind) {
      storeSet("streak", 0)
      storeSet("outcome", "incorrect", (a) => a + 1)
      return
    }

    // correct guess
    storeSet("streak", (number) => number + 1)
    storeSet("outcome", "correct", (correct) => correct + 1)

    increment()
  }

  function handleOnChangeClef(clef: Clef) {
    storeSet("clef", clef)
  }

  return (
    <main class={styles.main}>
      <VexFrame
        pitchClassKind={() => store.pitchClassKind}
        signature={() => store.signature}
        octave={octave}
        clef={store.clef}
      />
      <ControlPanel
        chromatics={store.showChromatics}
        keySignature={store.signature}
        outcome={store.outcome}
        streak={store.streak}
        onChangeChromatics={handleOnChangeChromatics}
        onChangeKeySignature={(keySignature) =>
          storeSet("signature", keySignature)
        }
        onChangeClef={handleOnChangeClef}
        clef={store.clef}
      />
      <Piano onClick={(kind) => handleGuess(kind)} />
    </main>
  )
}
