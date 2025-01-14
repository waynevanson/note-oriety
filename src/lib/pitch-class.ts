export const PITCH_CLASS_KINDS_PITCH_CLASS = [
  ["C"],
  ["C#", "Db"],
  ["D"],
  ["D#", "Eb"],
  ["E"],
  ["F"],
  ["F#", "Gb"],
  ["G"],
  ["G#", "Ab"],
  ["A"],
  ["A#", "Bb"],
  ["B"],
] as const

export type PitchClassMap<A> = readonly [A, A, A, A, A, A, A, A, A, A, A, A]

export type PitchClassKind = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export const PITCH_CLASS_KINDS: PitchClassMap<PitchClassKind> = Array.from(
  { length: 12 },
  (_, index) => index
) as never
