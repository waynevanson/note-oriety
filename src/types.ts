export type AccidentalNote =
  | "Ab"
  | "A#"
  | "Bb"
  | "Cb"
  | "C#"
  | "Db"
  | "D#"
  | "Eb"
  | "F#"
  | "Gb"

export type NaturalNote = "A" | "B" | "C" | "D" | "E" | "F" | "G"

export type Note = NaturalNote | AccidentalNote

export type KeySignature = Exclude<Note, "A#" | "D#" | "G#">
