import { splitProps } from "solid-js"
import { KeySignatureDistinctKeyed } from "../lib"
import { Controls } from "./controls"
import { ScoreBoard } from "./score-board"
import styles from "./panel.module.css"
import { Clef } from "./vex-frame"

export interface PanelProps {
  keySignature: KeySignatureDistinctKeyed
  onChangeKeySignature?(keySignature: KeySignatureDistinctKeyed): void
  chromatics: boolean
  onChangeChromatics?(chromatic: boolean): void
  clef: Clef
  onChangeClef?(clef: Clef): void
  streak: number
  outcome: Record<"correct" | "incorrect", number>
}

export function Panel(props: PanelProps) {
  const [scoreboard, controls] = splitProps(props, ["streak", "outcome"])
  return (
    <aside class={styles.panel}>
      <ScoreBoard {...scoreboard} />
      <Controls {...controls} />
    </aside>
  )
}
