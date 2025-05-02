import { makePersisted } from "@solid-primitives/storage"
import { createMemo } from "solid-js"
import { createStore } from "solid-js/store"
import "./App.css"
import styles from "./App.module.css"
import { Controls } from "./components/controls"
import { Panel } from "./components/panel"
import { Piano } from "./components/piano"
import { Clef, VexFrame } from "./components/vex-frame"
import {
  KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND,
  KeySignatureDistinctKeyed,
  PitchClassKind,
  random,
} from "./lib"
import "./reset.css"

export type Octave = 2 | 3 | 4 | 5 | 6

export type AltoOctave = 3 | 4

export type Offset = -1 | 0 | 1

const ALTO_CLEF_OFFSET_MAP: Record<Clef, Offset> = {
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
  showSettings: boolean
}

const initialAppStore: AppStore = {
  pitchClassKind: random.pitchClassKindChromatic(),
  signature: "C",
  altoOctave: 4,
  outcome: { correct: 0, incorrect: 0 },
  showChromatics: true,
  streak: 0,
  clef: "treble",
  showSettings: false,
}

export function App() {
  const [store, storeSet] = makePersisted(
    createStore<AppStore>(structuredClone(initialAppStore))
  )

  const octave = createMemo(
    () => (store.altoOctave + ALTO_CLEF_OFFSET_MAP[store.clef]) as Octave
  )

  function increment() {
    // ensure answer isn't the same as before
    let pitchClassKind
    while (true) {
      pitchClassKind = store.showChromatics
        ? random.pitchClassKindChromatic()
        : random.pitchClassKindKeyed(store.signature)
      if (pitchClassKind === store.pitchClassKind) continue
      storeSet("pitchClassKind", pitchClassKind)
      break
    }

    storeSet("altoOctave", random.altoOctave())
  }

  function handleOnChangeChromatics(show: boolean) {
    storeSet("showChromatics", show)

    const kinds = KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND[store.signature]
    if (kinds.includes(store.pitchClassKind)) return

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

  function handleOnChangeKeySignature(keySignature: KeySignatureDistinctKeyed) {
    storeSet("signature", keySignature)
  }

  function handleOnClickReset() {
    storeSet(structuredClone(initialAppStore))
  }

  return (
    <main class={styles.main}>
      <header class={styles.header}>
        <nav class={styles.nav}>
          <button
            class={styles["nav-settings-button"]}
            onClick={() => {
              storeSet("showSettings", (show) => !show)
            }}
          >
            Settings
          </button>
        </nav>
      </header>
      <VexFrame
        pitchClassKind={() => store.pitchClassKind}
        signature={() => store.signature}
        octave={octave}
        clef={store.clef}
      />

      <div class={styles.inputs}>
        <Panel outcome={store.outcome} streak={store.streak} />
        <Piano onClick={(kind) => handleGuess(kind)} />
      </div>

      <dialog open={store.showSettings} class={styles["nav-settings"]}>
        <Controls
          chromatics={store.showChromatics}
          clef={store.clef}
          keySignature={store.signature}
          onChangeChromatics={handleOnChangeChromatics}
          onChangeClef={handleOnChangeClef}
          onChangeKeySignature={handleOnChangeKeySignature}
          onClickReset={handleOnClickReset}
        />
      </dialog>
    </main>
  )
}
