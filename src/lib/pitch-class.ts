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

export type PitchClassMap<A> = readonly [A, A, A, A, A, A, A, A, A, A, A, A]

export type PitchClassKind = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
