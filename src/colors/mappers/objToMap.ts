import Color from "../color";

export default function objToMap(value: object): Map<string, Color> {
  const colors = new Map<string, Color>();
  for (const key in value) colors.set(key, value[key]);
  return colors;
}
