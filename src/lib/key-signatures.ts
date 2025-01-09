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
  C: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
  G: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "Fn", "F", "G", "G#"],
  D: ["A", "A#", "B", "Cn", "C", "D", "D#", "E", "Fn", "F", "G", "G#"],
  A: ["A", "A#", "B", "Cn", "C", "D", "D#", "E", "Fn", "F", "Gn", "G"],
  E: ["A", "A#", "B", "Cn", "C", "Dn", "D", "E", "Fn", "F", "Gn", "G"],
  B: ["An", "A", "B", "Cn", "C", "Dn", "D", "E", "Fn", "F", "Gn", "G"],
  "F#": ["An", "A", "B", "Cn", "C", "Dn", "D", "En", "E", "F", "Gn", "G"],
  "C#": ["An", "A", "Bn", "Cn", "C", "Dn", "D", "En", "E", "F", "Gn", "G"],

  // flats
  F: ["A", "B", "Bn", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"],
  Bb: ["A", "B", "Bn", "C", "Db", "D", "E", "En", "F", "Gb", "G", "Ab"],
  Eb: ["An", "B", "Bn", "C", "Db", "D", "E", "En", "F", "Gb", "G", "A"],
  Ab: ["An", "B", "Bn", "C", "D", "Dn", "E", "En", "F", "Gb", "G", "A"],
  Db: ["An", "B", "Bn", "C", "D", "Dn", "E", "En", "F", "G", "Gn", "A"],
  Gb: ["An", "B", "C", "Cn", "D", "Dn", "E", "En", "F", "G", "Gn", "A"],
  Cb: ["An", "B", "C", "Cn", "D", "Dn", "E", "F", "Fn", "G", "Gn", "A"],
}

export function countAccidentals(keys: PitchClassMap<Key>): number {
  const accidentals = ["b", "#", "n", "x"]

  return keys.filter((key) => accidentals.some((acc) => key.includes(acc)))
    .length
}
