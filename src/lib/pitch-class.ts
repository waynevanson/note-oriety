import { KeySignature } from "./key-signatures"

export const PITCH_CLASS_KINDS_PITCH_CLASS = [
  ["A", "An"],
  ["A#", "Bb"],
  ["B", "Bn", "Cb"],
  ["C", "Cn", "B#"],
  ["C#", "Db"],
  ["D", "Dn"],
  ["D#", "Eb"],
  ["E", "En", "Fb"],
  ["F", "Fn", "E#"],
  ["F#", "Gb"],
  ["G", "Gn"],
  ["G#", "Ab"],
] as const

export type PitchClassKind = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export const PITCH_CLASS_PITCH_CLASS_KIND = Object.fromEntries(
  PITCH_CLASS_KINDS_PITCH_CLASS.flatMap((pitchClasses, kind) =>
    pitchClasses.map((pitchClass) => [pitchClass, kind])
  )
) as Record<KeySignature, PitchClassKind>
