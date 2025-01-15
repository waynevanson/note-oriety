export interface ScoreBoardProps {
  streak: number
  outcome: Record<"correct" | "incorrect", number>
}

export function ScoreBoard(props: ScoreBoardProps) {
  const total = () => props.outcome.correct + props.outcome.incorrect

  const accuracy = () =>
    total() <= 0 ? 0 : Math.trunc(100 * (props.outcome.correct / total()))

  return (
    <dl>
      <dt>Streak</dt>
      <dd>{props.streak}</dd>
      <dt>Accuracy</dt>
      <dd>{accuracy()}</dd>
      <dd>
        ({props.outcome.correct} of {total()})
      </dd>
    </dl>
  )
}
