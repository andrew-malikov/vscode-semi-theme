import Color from "./color";

export default interface ColorPalette {
  toMap(): Map<string, Color>;
  hasColor(key: string): boolean;
}
