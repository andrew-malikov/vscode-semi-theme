import Color from "../color";
import ColorsBuilder from "../colorsBuilder";
import objToMap from "../mappers/objToMap";
import ShadeGenerator from "../utils/shadeGenerator";
import UtilsManager from "../utils/utilsManager";
import UiColors from "./uiColors";

export class SemiUiColorsBuilder implements ColorsBuilder<UiColors> {
  private colors: UiColors;

  constructor() {
    this.reset();
  }

  public setupColors(source: Map<string, Color>): this {
    source.forEach((value, key) => {
      if (this.colors.hasColor(key)) source[key] = value;
    });

    return this.endState();
  }

  public updateColors(): this {
    this.getDefautlManager().run(...this.colors.toMap().values());

    return this.endState();
  }

  public reset(): this {
    this.colors = new UiColors();

    return this.endState();
  }

  public build(): UiColors {
    const colors = this.colors;
    this.reset();

    return colors;
  }

  protected getDefautlManager() {
    return new UtilsManager(new ShadeGenerator());
  }

  protected endState(): this {
    return this;
  }
}

const plainPalette = {
  accent: new Color("#C62D42"),
  background: new Color("#1C282D"),
  border: new Color("#1A2226"),
  foreground: new Color("#D6D8D9")
};

const builder = new SemiUiColorsBuilder();

export const semiUi = builder
  .setupColors(objToMap(plainPalette))
  .updateColors()
  .build();
