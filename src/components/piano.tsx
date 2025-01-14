import { PitchClassKind } from "../lib"
import "./piano.css"

export interface PianoProps {
  onClick?(kind: PitchClassKind): void
}

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
        <li
          class={`key ${className}`}
          onClick={() => props.onClick?.(index as never)}
        />
      ))}
    </ul>
  )
}
