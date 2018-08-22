import Color from "../color";
import ColorUtils from "./colorUtils";
import ShadeOptions from "./shadeOptions";

export default class ShadeGenerator implements ColorUtils {
  private options: Map<string, ShadeOptions>;

  get hasGlobalScope(): boolean {
    return this.options.has("all");
  }

  constructor(amount?: number, options?: Map<string, ShadeOptions>) {
    if (!options) options = this.getDefaultOptions(amount);

    this.options = options;
  }

  public update(...colors: Color[]): Color[] {
    if (this.hasGlobalScope) this.useGlobalScope(...colors);
    else this.useLocalScope(...colors);
    return colors;
  }

  private useGlobalScope(...colors: Color[]) {
    colors.forEach(color => {
      this.addShades(color, this.options.get("all"));
    });
  }

  private useLocalScope(...colors: Color[]) {
    colors.forEach(color => {
      if (this.options.has(color.name))
        this.addShades(color, this.options.get(color.name));
    });
  }

  private addShades(color: Color, options: ShadeOptions) {
    if (options.hasLight)
      color.add("light", color.base.clone().brighten(options.amount));
    if (options.hasDark)
      color.add("dark", color.base.clone().darken(options.amount));
  }

  private getDefaultOptions(amount?: number) {
    const options = new Map<string, ShadeOptions>();
    options.set("all", new ShadeOptions(amount));
    return options;
  }
}
