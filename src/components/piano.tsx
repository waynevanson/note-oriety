import { styled } from "solid-styled-components"
import { PitchClassKind } from "../lib"
import styles from "./piano.module.css"

const Key_ = styled.li``

const White = styled(Key_)`
  background-color: #eee;
`

const Black = styled(Key_)`
  background-color: #333;
`

export interface PianoProps {
  onClick?(kind: PitchClassKind): void
}

// todo: componentise without the css module
export function Piano(props: PianoProps) {
  return (
    <ul class={styles.piano}>
      {[
        `${styles.white} ${styles.c}`,
        `${styles.black} ${styles.cs}`,
        `${styles.white} ${styles.d}`,
        `${styles.black} ${styles.ds}`,
        `${styles.white} ${styles.e}`,
        `${styles.white} ${styles.f}`,
        `${styles.black} ${styles.fs}`,
        `${styles.white} ${styles.g}`,
        `${styles.black} ${styles.gs}`,
        `${styles.white} ${styles.a}`,
        `${styles.black} ${styles.s}`,
        `${styles.white} ${styles.b}`,
      ].map((className, index) => (
        <Key class={className} kind={index as never} onClick={props.onClick} />
      ))}
    </ul>
  )
}

export interface KeyProps {
  class: string
  kind: PitchClassKind
  onClick?(kind: PitchClassKind): void
}

export function Key(props: KeyProps) {
  return (
    <li
      tabindex="0"
      role="button"
      class={`${styles.key} ${props.class}`}
      onClick={() => props.onClick?.(props.kind)}
    />
  )
}
