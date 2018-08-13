import Color from "../color";
import ShadeGenerator from "../utils/shadeGenerator";
import UtilsManager from "../utils/utilsManager";
import UiColors from "./uiColors";

function getSemiUi() {
  const colors: UiColors = {
    background: new Color("#1C282D"),
    foreground: new Color("#D6D8D9"),
    accent: new Color("#C62D42"),
    border: new Color("#1A2226")
  };

  const manager = getDefautlManager();

  manager.run(
    ...[colors.background, colors.foreground, colors.accent, colors.border]
  );

  return colors;
}

function getDefautlManager() {
  return new UtilsManager(new ShadeGenerator());
}

export const semiUi = getSemiUi();
