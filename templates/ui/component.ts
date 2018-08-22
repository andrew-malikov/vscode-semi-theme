import Property from "./property";

export default class Component {
  public toList(): Property[] {
    const props = new Array<Property>();
    const object = this as any;

    for (const key in object)
      if (typeof object[key] === typeof object) props.push(object[key]);

    return props;
  }
}
