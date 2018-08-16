import Color from "../color";
import ColorUtils from "./colorUtils";

export default class UtilsManager {
  private _utils: ColorUtils[];
  get utils() {
    return this._utils;
  }

  constructor(...utils: ColorUtils[]) {
    this._utils = utils;
  }

  public add(...utils: ColorUtils[]) {
    this._utils.push(...utils);
  }

  public run(...colors: Color[]) {
    this._utils.forEach(plugin => {
      plugin.update(...colors);
    });
  }
}
