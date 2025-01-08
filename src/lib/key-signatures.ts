import { NaturalKey, Key } from "./notes"

export type KeySignature = Exclude<Key, "A#" | "D#" | "G#"> | "Cb"

export const KEY_SIGNATURES_ACCIDENTALS_COUNT: Record<KeySignature, number> = {
  Ab: 4,
  A: 3,
  Bb: 2,
  B: 5,
  Cb: 7,
  C: 0,
  "C#": 7,
  Db: 5,
  D: 2,
  Eb: 3,
  E: 4,
  F: 1,
  "F#": 6,
  Gb: 6,
  G: 1,
}

export const KEY_SIGNATURES_FLAT: Record<KeySignature, boolean | null> = {
  Ab: true,
  A: false,
  Bb: true,
  B: false,
  Cb: true,
  C: null,
  "C#": false,
  Db: true,
  D: false,
  Eb: true,
  E: false,
  F: true,
  "F#": false,
  Gb: true,
  G: false,
}

const FIFTHS_FROM_F: Array<NaturalKey> = ["F", "C", "G", "D", "A", "E", "B"]

export const KEY_SIGNATURES: Array<KeySignature> = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "Ab",
  "Bb",
  "C#",
  "Cb",
  "Db",
  "Eb",
  "F#",
  "Gb",
]

function flats(accidentals: number): Array<NaturalKey> {
  return FIFTHS_FROM_F.slice(-accidentals)
}

function sharps(accidentals: number): Array<NaturalKey> {
  return FIFTHS_FROM_F.slice(accidentals)
}

export const KEY_SIGNATURES_ACCIDENTALS: Record<
  KeySignature,
  Array<NaturalKey>
> = Object.fromEntries(
  KEY_SIGNATURES.map((keySignature) => {
    const flat = KEY_SIGNATURES_FLAT[keySignature]
    const count = KEY_SIGNATURES_ACCIDENTALS_COUNT[keySignature]

    const accidentals = flat ? flats(count) : sharps(count)

    return [keySignature, accidentals] as const
  })
) as never

// KEY_SIGNATURE_NATURALS
// KEY_SIGNATURE_NOTES

// export const KEY_SIGNATURES_NOTES: Record<
//   KeySignature,
//   ReadonlyArray<string>
// > = {
//   A: ["A", "B", "C#", "D", "E", "F#", "G#"],
//   Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"],
//   B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
//   C: ["C", "D", "E", "F", "G", "A", "B"],
//   "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
//   Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
//   D: ["D", "E", "F#", "G", "A", "B", "C#"],
//   Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
//   E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
//   F: ["F", "G", "A", "Bb", "C", "D", "E"],
//   "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
//   Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
//   G: ["G", "A", "B", "C", "D", "E", "F#"],
//   Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
// }

// // only for notes
// export const TRANSFORM = {
//   C: {
//     C: "C",
//     "C#": "C#",
//     Db: "Db",
//     D: "D",
//     "D#": "D#",
//     Eb: "Eb",
//     E: "E",
//     F: "F",
//     G: "G",
//     A: "A",
//     B: "B",
//   },
// }
