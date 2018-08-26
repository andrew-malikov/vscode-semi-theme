import { Instance as ColorValue } from "tinycolor2";
import ColorValueBuilder from "./colorValueBuilder";

export default class Color {
  public name: string;

  private _values: Map<string, ColorValue>;
  get values(): Map<string, ColorValue> {
    return this.values;
  }

  get base(): ColorValue {
    return this.values["base"];
  }

  constructor(value: string | ColorValue) {
    if (typeof value === "string") value = ColorValueBuilder(value);
    this._values = new Map<string, ColorValue>();
    this.values["base"] = value;
  }

  public add(key: string, value: string | ColorValue) {
    if (typeof value === "string") value = ColorValueBuilder(value);
    if (!this.isBaseKey(key)) this._values[key] = value;
  }

  public remove(key: string) {
    if (!this.isBaseKey(key)) this._values.delete(key);
  }

  public isBaseKey(key: string): boolean {
    return key === "base";
  }
}
