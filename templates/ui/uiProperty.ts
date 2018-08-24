import { Instance as ColorValue } from "tinycolor2";

export default class UiProperty {
  public name: string;
  public types: string[];
  public color: ColorValue;

  public contains(query: string[]): boolean {
    for (const type in query) if (type! in this.types) return false;
    return true;
  }
}
