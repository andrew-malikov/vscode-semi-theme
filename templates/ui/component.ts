import UiProperty from "./uiProperty";

export default class Component {
  public toList(): UiProperty[] {
    const props = new Array<UiProperty>();

    for (const key in this)
      if (this[key] instanceof UiProperty) props.push(this[key] as any);

    return props;
  }
}
