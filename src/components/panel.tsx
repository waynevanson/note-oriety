import { ScoreBoard } from "./score-board"
import styles from "./panel.module.css"

export interface PanelProps {
  streak: number
  outcome: Record<"correct" | "incorrect", number>
}

export function Panel(props: PanelProps) {
  return (
    <aside class={styles.panel}>
      <ScoreBoard {...props} />
    </aside>
  )
}
