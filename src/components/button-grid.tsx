import { PitchClassKind, PITCH_CLASS_KINDS_PITCH_CLASS } from "../lib"
import styles from "./button-grid.module.css"
import { Accessor } from "solid-js"

export interface ButtonGridProps {
  answer: Accessor<PitchClassKind>
  onClick?: (index: number) => void
}

// todo: use form element
export function ButtonGrid(props: ButtonGridProps) {
  const { onClick } = props

  return (
    <ol class={styles.list}>
      {PITCH_CLASS_KINDS_PITCH_CLASS.map((label, index) => (
        <li class={styles.item}>
          <button
            class={styles.button}
            data-answer={props.answer() == index}
            onClick={() => onClick?.(index)}
          >
            {label.join(" / ")}
          </button>
        </li>
      ))}
    </ol>
  )
}
