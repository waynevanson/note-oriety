import { NormalKey, FlatKey, SharpKey, Key } from "./key"
import { PitchClassKind, PitchClassMap } from "./pitch-class"

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

export type KeySignatureSharps = "G" | "D" | "A" | "E" | "B" | "F#" | "C#"
export type KeySignatureFlats = "F" | "Bb" | "Ab" | "Eb" | "Db" | "Gb" | "Cb"

export const KEY_SIGNATURE_FLATS_PITCH_CLASS_KIND: Record<
  KeySignatureFlats,
  PitchClassMap<Key>
> = {
  F: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "B", "Bn"],
  Bb: ["C", "Db", "D", "E", "En", "F", "Gb", "G", "Ab", "A", "B", "Bn"],
  Eb: ["C", "Db", "D", "E", "En", "F", "Gb", "G", "A", "An", "B", "Bn"],
  Ab: ["C", "D", "Dn", "E", "En", "F", "Gb", "G", "A", "An", "B", "Bn"],
  Db: ["C", "D", "Dn", "E", "En", "F", "G", "Gn", "A", "An", "B", "Bn"],
  Gb: ["Cn", "D", "Dn", "E", "En", "F", "G", "Gn", "A", "An", "B", "C"],
  Cb: ["Cn", "D", "Dn", "E", "F", "Fn", "G", "Gn", "A", "An", "B", "C"],
}

export const KEY_SIGNATURE_SHARPS_PITCH_CLASS_KIND: Record<
  KeySignatureSharps,
  PitchClassMap<Key>
> = {
  G: ["C", "C#", "D", "D#", "E", "Fn", "F", "G", "G#", "A", "A#", "B"],
  D: ["Cn", "C", "D", "D#", "E", "Fn", "F", "G", "G#", "A", "A#", "B"],
  A: ["Cn", "C", "D", "D#", "E", "Fn", "F", "Gn", "G", "A", "A#", "B"],
  E: ["Cn", "C", "Dn", "D", "E", "Fn", "F", "Gn", "G", "A", "A#", "B"],
  B: ["Cn", "C", "Dn", "D", "E", "Fn", "F", "Gn", "G", "An", "A", "B"],
  "F#": ["Cn", "C", "Dn", "D", "En", "E", "F", "Gn", "G", "An", "A", "B"],
  "C#": ["Cn", "C", "Dn", "D", "En", "E", "F", "Gn", "G", "An", "A", "Bn"],
}

export const KEY_SIGNATURE_C_PITCH_CLASS_KIND: PitchClassMap<Key> = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
]

// on the <KEY_SIGNATURE> scale,
// to represent the actual note <NOTE>,
// I would have to write it as <KEY>
export const KEY_SIGNATURE_DISTINCT_PITCH_CLASS_KEY: Record<
  KeySignatureDistinctKeyed,
  PitchClassMap<Key>
> = {
  C: KEY_SIGNATURE_C_PITCH_CLASS_KIND,
  ...KEY_SIGNATURE_SHARPS_PITCH_CLASS_KIND,
  ...KEY_SIGNATURE_FLATS_PITCH_CLASS_KIND,
}

export const ACCIDENTALS: Record<KeySignatureDistinctKeyed, number> = {
  C: 0,
  G: 1,
  D: 2,
  A: 3,
  E: 4,
  B: 5,
  "F#": 6,
  "C#": 7,
  F: 1,
  Bb: 2,
  Eb: 3,
  Ab: 4,
  Db: 5,
  Gb: 6,
  Cb: 7,
}

type Array7<T> = readonly [T, T, T, T, T, T, T]

export const KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND: Record<
  KeySignatureDistinctKeyed,
  Array7<PitchClassKind>
> = {
  C: [0, 2, 4, 5, 7, 9, 11],

  // sharps
  G: [7, 9, 11, 0, 2, 4, 6],
  D: [2, 4, 6, 7, 9, 11, 1],
  A: [9, 11, 1, 2, 4, 6, 8],
  E: [4, 6, 8, 9, 11, 1, 3],
  B: [11, 1, 3, 4, 6, 8, 10],
  "F#": [6, 7, 9, 10, 0, 2, 4],
  "C#": [1, 3, 5, 6, 8, 10, 0],

  // flats
  F: [5, 7, 9, 10, 0, 2, 4],
  Bb: [10, 0, 2, 3, 5, 7, 9],
  Eb: [3, 5, 7, 8, 10, 0, 2],
  Ab: [8, 10, 0, 1, 3, 5, 7],
  Db: [1, 3, 5, 6, 8, 10, 0],
  Gb: [6, 8, 10, 11, 1, 3, 5],
  Cb: [11, 1, 3, 4, 6, 8, 10],
}
