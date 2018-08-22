import Color from "../color";

export default interface ColorUtils {
  update(...colors: Color[]): Color[];
}
