import { splitProps } from "solid-js"
import { KeySignatureDistinctKeyed } from "../lib"
import { Controls } from "./controls"
import { ScoreBoard } from "./score-board"
import styles from "./panel.module.css"

export interface PanelProps {
  keySignature: KeySignatureDistinctKeyed
  onChangeKeySignature?(keySignature: KeySignatureDistinctKeyed): void
  chromatics: boolean
  onChangeChromatics?(chromatic: boolean): void
  clef: "bass" | "treble" | "alto"
  onChangeClef?(clef: "bass" | "treble" | "alto"): void
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
