import ColorUtils from "./colorUtils";
import Color from "../color";

export default class ShadeGenerator implements ColorUtils {
  private options: Map<string, ShadeOptions>;

  get hasGlobalScope(): boolean {
    return this.options.has("all");
  }

  constructor(amount?: number, options?: Map<string, ShadeOptions>) {
    if (!options) {
      options = this.getDefaultOptions(amount);
    }

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

  private getDefaultOptions(amout?: number) {
    const options = new Map<string, ShadeOptions>();
    options.set("all", new ShadeOptions(amout));
    return options;
  }
}

export class ShadeOptions {
  public amount?: number;
  public hasDark: boolean;
  public hasLight: boolean;

  constructor(amount?: number) {
    this.amount = amount;
    this.hasDark = true;
    this.hasLight = true;
  }

  public withoutDark(): ShadeOptions {
    this.hasDark = false;
    return this;
  }

  public withoutLight(): ShadeOptions {
    this.hasLight = false;
    return this;
  }
}
