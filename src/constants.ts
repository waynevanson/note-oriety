import { KeySignature, NaturalNote, Note } from "./types"

export const NOTES_KEYS = [
  ["A"],
  ["A#", "Bb"],
  ["B"],
  ["C"],
  ["C#", "Db"],
  ["D"],
  ["D#", "Eb"],
  ["E"],
  ["F"],
  ["F#", "Gb"],
  ["G"],
  ["G#", "Ab"],
] as const

// 0 - 11
export type NOTE_INDEX = keyof typeof NOTES_KEYS

export const NOTES: ReadonlyArray<Note> = NOTES_KEYS.flat()

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

const FIFTHS_FROM_F: Array<NaturalNote> = ["F", "C", "G", "D", "A", "E", "B"]

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

function flats(accidentals: number): Array<NaturalNote> {
  return FIFTHS_FROM_F.slice(-accidentals)
}

function sharps(accidentals: number): Array<NaturalNote> {
  return FIFTHS_FROM_F.slice(accidentals)
}

export const KEY_SIGNATURES_ACCIDENTALS: Record<
  KeySignature,
  Array<NaturalNote>
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
