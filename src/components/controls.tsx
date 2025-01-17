import {
  KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY,
  KEY_SIGNATURE_FLATS_PITCH_CLASS_KIND,
  KEY_SIGNATURE_SHARPS_PITCH_CLASS_KIND,
  KeySignatureDistinctKeyed,
} from "../lib"
import styles from "./controls.module.css"

export interface ControlProps {
  keySignature: KeySignatureDistinctKeyed
  onChangeKeySignature?(keySignature: KeySignatureDistinctKeyed): void
  chromatics: boolean
  onChangeChromatics?(chromatic: boolean): void
  clef: "bass" | "treble" | "alto"
  onChangeClef?(clef: "bass" | "treble" | "alto"): void
}

export function Controls(props: ControlProps) {
  return (
    <div class={styles.panel}>
      <KeySignatures
        value={props.keySignature}
        onChange={props.onChangeKeySignature}
      />
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

export interface KeySignaturesProps {
  value: KeySignatureDistinctKeyed
  onChange?(keySignature: KeySignatureDistinctKeyed): void
}

export function KeySignatures(props: KeySignaturesProps) {
  return (
    <label for="input.key">
      <span>Key Signature </span>

      <select
        name="input.key"
        id="input.key"
        onChange={(e) => {
          props?.onChange?.(e.target.value as never)
        }}
      >
        <optgroup label="Natural">
          <option value="C">C</option>
        </optgroup>

        <optgroup label="Flats">
          {Object.keys(KEY_SIGNATURE_FLATS_PITCH_CLASS_KIND).map(
            (keySignature) => (
              <option
                value={keySignature}
                selected={props.value == keySignature}
              >
                {keySignature}
              </option>
            )
          )}
        </optgroup>

        <optgroup label="Sharps">
          {Object.keys(KEY_SIGNATURE_SHARPS_PITCH_CLASS_KIND).map(
            (keySignature) => (
              <option
                value={keySignature}
                selected={props.value == keySignature}
              >
                {keySignature}
              </option>
            )
          )}
        </optgroup>
      </select>
    </label>
  )
}
