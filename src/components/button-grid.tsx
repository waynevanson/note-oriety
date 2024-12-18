import styles from "./button-grid.module.css"
import { NOTES_LABELS } from "../constants"

export interface ButtonGridProps {
  onClick?: (index: number) => void
}

// todo: use form element
export function ButtonGrid(props: ButtonGridProps) {
  const { onClick } = props

  return (
    <ol class={styles.list}>
      {NOTES_LABELS.map((label, index) => (
        <li class={styles.item}>
          <button class={styles.button} onClick={() => onClick?.(index)}>
            {label}
          </button>
        </li>
      ))}
    </ol>
  )
}
