export type NormalKey = "A" | "B" | "C" | "D" | "E" | "F" | "G"

export type NaturalKeyAppend<T extends string> = NormalKey extends infer K
  ? K extends string
    ? `${K}${T}`
    : never
  : never

export type FlatKey = NaturalKeyAppend<"b">
export type SharpKey = NaturalKeyAppend<"#">
export type DoubleSharpKey = NaturalKeyAppend<"x">
export type NaturalKey = NaturalKeyAppend<"n">

export type Key = NormalKey | DoubleSharpKey | SharpKey | FlatKey | NaturalKey
