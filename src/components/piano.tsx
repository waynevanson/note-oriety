import "./piano.css"

export interface PianoProps {}

//
export function Piano(props: PianoProps) {
  return (
    <ul>
      <li class="c"></li>
      <li class="cs"></li>
      <li class="d"></li>
      <li class="ds"></li>
      <li class="e"></li>
      <li class="f"></li>
      <li class="fs"></li>
      <li class="g"></li>
      <li class="gs"></li>
      <li class="a"></li>
      <li class="as"></li>
      <li class="b"></li>
    </ul>
  )
}
