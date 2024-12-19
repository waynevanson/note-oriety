export type AccidentalFlatNote = "Ab" | "Bb" | "Db" | "Eb" | "Gb"

export type AccidentalSharpNote = "A#" | "C#" | "D#" | "F#" | "G#"

export type AccidentalNote = AccidentalFlatNote | AccidentalSharpNote

export type NaturalNote = "A" | "B" | "C" | "D" | "E" | "F" | "G"

export type Note = NaturalNote | AccidentalNote

export type KeySignature = Exclude<Note, "A#" | "D#" | "G#"> | "Cb"
