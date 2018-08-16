import Color from "../color";
import ColorPalette from "../colorPalette";

export default class UiColors implements ColorPalette {
  public background: Color;
  public foreground: Color;
  public accent: Color;
  public border: Color;

  public toMap(): Map<string, Color> {
    const colors = new Map<string, Color>();
    const self = this as any;

    for (const key in self)
      if (typeof self[key] === typeof self) colors.set(key, self[key]);

    return colors;
  }

  public hasColor(key: string): boolean {
    return (this as object).hasOwnProperty(key);
  }
}
