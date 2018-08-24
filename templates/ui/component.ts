import UiProperty from "./uiProperty";

export default class Component {
  public toList(): UiProperty[] {
    const props = new Array<UiProperty>();
    const object = this as any;

    for (const key in object)
      if (typeof object[key] === typeof object) props.push(object[key]);

    return props;
  }
}
