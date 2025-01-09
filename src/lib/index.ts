import { Key as KeySignature } from "./key"
import { PitchClassKind } from "./pitch-class"

export * from "./key-signatures"
export * from "./key"
export * from "./pitch-class"

export interface StaveNote {
  pitchClassKind: PitchClassKind
  keySignature: KeySignature
  octave: 3 | 4 | 5
}

export type PitchClassMap<A> = readonly [A, A, A, A, A, A, A, A, A, A, A, A]
