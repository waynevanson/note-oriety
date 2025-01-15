import { PitchClassKind } from "../lib"
import "./piano.css"

export interface PianoProps {
  onClick?(kind: PitchClassKind): void
}

// todo: componentise without the css module
export function Piano(props: PianoProps) {
  return (
    <ul class="piano">
      {[
        "white c",
        "black cs",
        "white d",
        "black ds",
        "white e",
        "white f",
        "black fs",
        "white g",
        "black gs",
        "white a",
        "black as",
        "white b",
      ].map((className, index) => (
        <Key class={className} kind={index as never} />
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
      class={`key ${props.class}`}
      onClick={() => props.onClick?.(props.kind)}
    />
  )
}
