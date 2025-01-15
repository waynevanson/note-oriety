import {
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
  KeySignatureDistinctKeyed,
} from "../lib"
import styles from "./control-panel.module.css"

export interface ControlPanelProps {
  keySignature: KeySignatureDistinctKeyed
  onChangeKeySignature?(keySignature: KeySignatureDistinctKeyed): void
  chromatics: boolean
  onChangeChromatics?(chromatic: boolean): void
  clef: "bass" | "treble" | "alto"
  onChangeClef?(clef: "bass" | "treble" | "alto"): void
}

export function ControlPanel(props: ControlPanelProps) {
  return (
    <div class={styles.panel}>
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
        <span> Chromatics </span>
        <input
          type="checkbox"
          checked={props.chromatics}
          onChange={(event) =>
            props.onChangeChromatics?.(event.currentTarget.checked)
          }
        />
      </label>
    </div>
  )
}
