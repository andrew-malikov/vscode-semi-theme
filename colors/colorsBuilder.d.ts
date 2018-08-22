import Color from "./color";

export default interface ColorsBuilder<T> {
  setupColors(source: Map<string, Color>): this;
  updateColors(): this;
  reset(): this;
}
