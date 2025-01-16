import styles from "./score-board.module.css"

export interface ScoreBoardProps {
  streak: number
  outcome: Record<"correct" | "incorrect", number>
}

export function ScoreBoard(props: ScoreBoardProps) {
  const total = () => props.outcome.correct + props.outcome.incorrect

  const accuracy = () =>
    total() <= 0 ? 0 : Math.trunc(100 * (props.outcome.correct / total()))

  return (
    <dl class={styles.list}>
      <div class={styles.streak}>
        <dt>Streak</dt>
        <dd> {props.streak}</dd>
      </div>

      <div class={styles.accuracy}>
        <dt>Accuracy</dt>
        <dd>{accuracy()}%</dd>
      </div>
    </dl>
  )
}
