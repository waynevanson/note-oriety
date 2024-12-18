import styles from "./button-grid.module.css"
import { NOTES_LABELS } from "../constants"
import { Accessor } from "solid-js"

export interface ButtonGridProps {
  answer: Accessor<number>
  onClick?: (index: number) => void
}

// todo: use form element
export function ButtonGrid(props: ButtonGridProps) {
  const { onClick } = props

  return (
    <ol class={styles.list}>
      {NOTES_LABELS.map((label, index) => (
        <li class={styles.item}>
          <button
            class={styles.button}
            data-answer={props.answer() == index}
            onClick={() => onClick?.(index)}
          >
            {label}
          </button>
        </li>
      ))}
    </ol>
  )
}
