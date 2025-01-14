import { createMemo } from "solid-js"
import {
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
  KeySignatureDistinctKeyed,
} from "../lib"

export interface ControlPanelProps {
  keySignature: KeySignatureDistinctKeyed
  onChangeKeySignature?(keySignature: KeySignatureDistinctKeyed): void
  chromatics: boolean
  onChangeChromatics?(chromatic: boolean): void
  outcome: Record<"correct" | "incorrect", number>
  streak: number
  clef: "bass" | "treble" | "alto"
  onChangeClef?(clef: "bass" | "treble" | "alto"): void
}

export function ControlPanel(props: ControlPanelProps) {
  const total = createMemo(
    () => props.outcome.correct + props.outcome.incorrect
  )

  const accuracy = createMemo(() =>
    total() <= 0 ? 0 : Math.trunc(100 * (props.outcome.correct / total()))
  )

  return (
    <div>
      <label for="input.key">
        <span>Key Signature </span>
        <select
          name="input.key"
          id="input.key"
          onChange={(e) => {
            props?.onChangeKeySignature?.(e.target.value as never)
          }}
        >
          {Object.keys(KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY).map((sig) => (
            <option value={sig} selected={props.keySignature == sig}>
              {sig}
            </option>
          ))}
        </select>
      </label>
      <label for="input.clef">
        <span> Clef </span>
        <select
          onChange={(e) => props?.onChangeClef?.(e.target.value as never)}
        >
          {["treble", "alto", "bass"].map((clef) => (
            <option value={clef}>{clef}</option>
          ))}
        </select>
      </label>
      <label for="input.chromatics">
        <span> Chromatics: </span>
        <input
          type="checkbox"
          checked={props.chromatics}
          onChange={(event) =>
            props.onChangeChromatics?.(event.currentTarget.checked)
          }
        />
      </label>
      <span> Streak: {props.streak} </span>
      <span>
        Accuracy: {accuracy()}% ({props.outcome.correct} of {total()})
      </span>
    </div>
  )
}
