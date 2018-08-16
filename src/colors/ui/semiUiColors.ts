import Color from "../color";
import ShadeGenerator from "../utils/shadeGenerator";
import UtilsManager from "../utils/utilsManager";
import UiColors from "./uiColors";

export class SemiUiColorBuilder {
  private colors: UiColors;

  constructor() {
    this.reset();
  }

  public setupColors(): this {
    this.colors.background = new Color("#1C282D");
    this.colors.foreground = new Color("#D6D8D9");
    this.colors.accent = new Color("#C62D42");
    this.colors.border = new Color("#1A2226");

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

const builder = new SemiUiColorBuilder();

export const semiUi = builder
  .setupColors()
  .updateColors()
  .build();
