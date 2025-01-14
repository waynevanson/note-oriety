import { AltoOctave } from "../App"
import {
  KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND,
  KeySignatureDistinctKeyed,
} from "./key-signatures"
import { PITCH_CLASS_KINDS, PitchClassKind } from "./pitch-class"

export function lookup<T>(values: ArrayLike<T>): T {
  const index = int({ min: 0, max: values.length - 1 })
  return values[index]
}

export function int(range: Record<"min" | "max", number>) {
  const number = Math.random()
  const scaled = scale(number, { min: 0, max: 1 }, range)
  return Math.round(scaled)
}

export function pitchClassKindChromatic(): PitchClassKind {
  return lookup(PITCH_CLASS_KINDS)
}

export function pitchClassKindKeyed(
  keySignature: KeySignatureDistinctKeyed
): PitchClassKind {
  const kinds = KEY_SIGNATURE_DISTINCT_SCALE_PITCH_CLASS_KIND[keySignature]
  return lookup(kinds)
}

export function altoOctave(): AltoOctave {
  return lookup([3, 4])
}

function scale(
  number: number,
  prev: Record<"min" | "max", number>,
  next: Record<"min" | "max", number>
): number {
  return (
    ((number - prev.min) / (prev.max - prev.min)) * (next.max - next.min) +
    next.min
  )
}
