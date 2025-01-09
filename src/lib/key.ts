export type AccidentalFlatKey = "Ab" | "Bb" | "Db" | "Eb" | "Gb"

export type AccidentalSharpKey = "A#" | "C#" | "D#" | "F#" | "G#"

export type AccidentalKey = AccidentalFlatKey | AccidentalSharpKey

export type NaturalKey = "A" | "B" | "C" | "D" | "E" | "F" | "G"

export type Key = NaturalKey | AccidentalKey
