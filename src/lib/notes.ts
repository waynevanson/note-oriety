import { NOTES_KEYS } from "./key"

export type AccidentalFlatKey = "Ab" | "Bb" | "Db" | "Eb" | "Gb"

export type AccidentalSharpKey = "A#" | "C#" | "D#" | "F#" | "G#"

export type AccidentalNote = AccidentalFlatKey | AccidentalSharpKey

export type NaturalKey = "A" | "B" | "C" | "D" | "E" | "F" | "G"

export type Key = NaturalKey | AccidentalNote

export const NOTES: ReadonlyArray<Key> = NOTES_KEYS.flat()
