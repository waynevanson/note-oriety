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
import { createMemo } from "solid-js"
import { Piano } from "./components/piano"

export type Octave = 2 | 3 | 4 | 5 | 6

export type AltoOctave = 3 | 4

const ALTO_CLEF_OFFSET_MAP: Record<Clef, number> = {
  treble: 1,
  alto: 0,
  bass: -1,
}

export interface Note {
  signature: KeySignatureDistinctKeyed
  pitchClassKind: PitchClassKind
}

export interface AppStore {
  note: Note
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

// change
function createAltoOctave(): AltoOctave {
  const number = Math.round(Math.random()) + 3
  return number as never
}

// todo: option to show chromatics

// todo: when clef changes, regenerate octave with octave map
// todo: our pitchClassIndex range (octave) isn't the same as our clef range.
// offset it.
export function App() {
  const [store, storeSet] = createStore<AppStore>({
    note: {
      pitchClassKind: createPitchClassKind(),
      signature: "C",
    },
    altoOctave: 4,
    outcome: { correct: 0, incorrect: 0 },
    showChromatics: false,
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
      pitchClassKind = createPitchClassKind()
      if (pitchClassKind === store.note.pitchClassKind) continue
      storeSet("note", "pitchClassKind", pitchClassKind)
      break
    }

    storeSet("altoOctave", createAltoOctave())
  }

  function handleGuess(pitchClassKind: number) {
    // wrong guess
    if (pitchClassKind !== store.note.pitchClassKind) {
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
      <Piano />
      <VexFrame
        pitchClassKind={() => store.note.pitchClassKind}
        signature={() => store.note.signature}
        octave={octave}
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
