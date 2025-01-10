import { NormalKey, FlatKey, SharpKey, Key } from "./key"
import { PitchClassMap } from "./pitch-class"

export type KeySignatureAll = NormalKey | FlatKey | SharpKey

export type KeySignatureDistinctKeyed =
  | NormalKey
  | "Bb"
  | "Eb"
  | "Ab"
  | "Db"
  | "Gb"
  | "Cb"
  | "F#"
  | "C#"

// on the <KEY_SIGNATURE> scale,
// to represent the actual note <NOTE>,
// I would have to write it as <KEY>
export const KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY: Record<
  KeySignatureDistinctKeyed,
  PitchClassMap<Key>
> = {
  // sharps
  C: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  G: ["C", "C#", "D", "D#", "E", "Fn", "F", "G", "G#", "A", "A#", "B"],

  D: ["Cn", "C", "D", "D#", "E", "Fn", "F", "G", "G#", "A", "A#", "B"],
  A: ["Cn", "C", "D", "D#", "E", "Fn", "F", "Gn", "G", "A", "A#", "B"],
  E: ["Cn", "C", "Dn", "D", "E", "Fn", "F", "Gn", "G", "A", "A#", "B"],
  B: ["Cn", "C", "Dn", "D", "E", "Fn", "F", "Gn", "G", "An", "A", "B"],
  "F#": ["Cn", "C", "Dn", "D", "En", "E", "F", "Gn", "G", "An", "A", "B"],
  "C#": ["Cn", "C", "Dn", "D", "En", "E", "F", "Gn", "G", "An", "A", "Bn"],

  // flats
  F: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "Bn"],
  Bb: ["C", "Db", "D", "E", "En", "F", "Gb", "G", "Ab", "A", "B", "Bn"],
  Eb: ["C", "Db", "D", "E", "En", "F", "Gb", "G", "A", "An", "B", "Bn"],
  Ab: ["C", "D", "Dn", "E", "En", "F", "Gb", "G", "A", "An", "B", "Bn"],
  Db: ["C", "D", "Dn", "E", "En", "F", "G", "Gn", "A", "An", "B", "Bn"],
  Gb: ["Cn", "D", "Dn", "E", "En", "F", "G", "Gn", "A", "An", "B", "C"],
  Cb: ["Cn", "D", "Dn", "E", "F", "Fn", "G", "Gn", "A", "An", "B", "C"],
}

export function countAccidentals(keys: PitchClassMap<Key>): number {
  const accidentals = ["b", "#", "n", "x"]

  return keys.filter((key) => accidentals.some((acc) => key.includes(acc)))
    .length
}
