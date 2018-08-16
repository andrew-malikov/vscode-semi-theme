import Color from "../color";
import ColorPalette from "../colorPalette";

export default class UiColors implements ColorPalette {
  public background: Color;
  public foreground: Color;
  public accent: Color;
  public border: Color;

  public toMap(): Map<string, Color> {
    const colors = new Map<string, Color>();
    const object = this as any;

    for (const key in object)
      if (typeof object[key] === typeof object) colors.set(key, object[key]);

    return colors;
  }
}
