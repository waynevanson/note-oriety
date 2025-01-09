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
import { ControlPanel } from "./components/control-panel"

export interface Note {
  signature: KeySignatureDistinctKeyed
  pitchClassKind: PitchClassKind
  octave: 4 | 5
}

export interface AppStore {
  note: Note
  showChromatics: boolean
  outcome: Record<"correct" | "incorrect", number>
  streak: number
}

function createPitchClassKind(): PitchClassKind {
  return Math.floor(
    Math.random() * PITCH_CLASS_KINDS_PITCH_CLASS.length
  ) as PitchClassKind
}

function createOctave(): 4 | 5 {
  return (Math.round(Math.random()) + 4) as never
}

// todo: create control panel
// todo: add bass and that middle clef
// todo: option to show chromatics
export function App() {
  const [store, storeSet] = createStore<AppStore>({
    note: {
      pitchClassKind: createPitchClassKind(),
      octave: createOctave(),
      signature: "C",
    },
    outcome: { correct: 0, incorrect: 0 },
    showChromatics: false,
    streak: 0,
  })

  function handleGuess(pitchClassKind: number) {
    // wrong guess
    if (pitchClassKind !== store.note.pitchClassKind) {
      storeSet("streak", 0)
      storeSet("outcome", "incorrect", (a) => a + 1)
      return
    }

    // correct guess
    storeSet("streak", (number) => number + 1)
    storeSet("outcome", "correct", (a) => a + 1)

    // ensure answer isn't the same as before
    while (true) {
      const next = createPitchClassKind()
      if (next === store.note.pitchClassKind) continue
      storeSet("note", "pitchClassKind", next)
      break
    }

    storeSet("note", "octave", createOctave())
  }

  return (
    <main class={styles.main}>
      <VexFrame
        pitchClassKind={() => store.note.pitchClassKind}
        signature={() => store.note.signature}
        octave={() => store.note.octave}
      />
      <ControlPanel
        chromatics={store.showChromatics}
        keySignature={store.note.signature}
        outcome={store.outcome}
        streak={store.streak}
        onChangeChromatics={(chromatics) =>
          storeSet("showChromatics", chromatics)
        }
        onChangeKeySignature={(keySignature) =>
          storeSet("note", "signature", keySignature)
        }
      />
      <ButtonGrid
        answer={() => store.note.pitchClassKind}
        onClick={handleGuess}
      />
    </main>
  )
}
