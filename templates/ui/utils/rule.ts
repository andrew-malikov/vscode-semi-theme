import { Instance as ColorValue } from "tinycolor2";

export default class Rule {
  constructor(public types: string[], public color: ColorValue) {}
}
