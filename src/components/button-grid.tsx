import { Note, NOTES_KEYS } from "../lib"
import styles from "./button-grid.module.css"
import { Accessor } from "solid-js"

export interface ButtonGridProps {
  answer: Accessor<Note>
  onClick?: (index: number) => void
}

// todo: use form element
export function ButtonGrid(props: ButtonGridProps) {
  const { onClick } = props

  return (
    <ol class={styles.list}>
      {NOTES_KEYS.map((label, index) => (
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
