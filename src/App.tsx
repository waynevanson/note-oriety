import "./App.css"
import styles from "./App.module.css"
import { ButtonGrid } from "./components/button-grid"
import { Clef, VexFrame } from "./components/vex-frame"
import "./reset.css"
import { createStore } from "solid-js/store"
import {
  KeySignatureDistinctKeyed,
  PITCH_CLASS_KINDS_PITCH_CLASS,
  PitchClassKind,
} from "./lib"
import { ControlPanel } from "./components/control-panel"

export type Octave = 2 | 3 | 4 | 5 | 6

const CLEF_MAP: Record<Clef, Record<Clef, number>> = {
  treble: { treble: 0, alto: -1, bass: -2 },
  alto: { treble: 1, alto: 0, bass: -1 },
  bass: { bass: 0, alto: 1, treble: 2 },
}

export interface Note {
  signature: KeySignatureDistinctKeyed
  pitchClassKind: PitchClassKind
  octave: Octave
}

export interface AppStore {
  note: Note
  clef: Clef
  showChromatics: boolean
  outcome: Record<"correct" | "incorrect", number>
  streak: number
}

function createPitchClassKind(): PitchClassKind {
  return Math.floor(
    Math.random() * PITCH_CLASS_KINDS_PITCH_CLASS.length
  ) as PitchClassKind
}

// trebl

function createOctave(): Octave {
  return (Math.round(Math.random() * 3) + 3) as never
}

// todo: add bass and that middle clef
// todo: option to show chromatics

// todo: when clef changes, regenerate octave with octave map
// todo: our pitchClassIndex range (octave) isn't the same as our clef range.
// offset it.
export function App() {
  const [store, storeSet] = createStore<AppStore>({
    note: {
      pitchClassKind: createPitchClassKind(),
      octave: 5,
      signature: "C",
    },
    outcome: { correct: 0, incorrect: 0 },
    showChromatics: false,
    streak: 0,
    clef: "treble",
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

  function handleOnChangeClef(clef: Clef) {
    const offset = CLEF_MAP[store.clef][clef]
    storeSet("note", "octave", (octave) => (octave + offset) as never)
    storeSet("clef", clef)
  }

  return (
    <main class={styles.main}>
      <VexFrame
        pitchClassKind={() => store.note.pitchClassKind}
        signature={() => store.note.signature}
        octave={() => store.note.octave}
        clef={store.clef}
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
        onChangeClef={handleOnChangeClef}
        clef={store.clef}
      />
      <ButtonGrid
        answer={() => store.note.pitchClassKind}
        onClick={handleGuess}
      />
    </main>
  )
}
