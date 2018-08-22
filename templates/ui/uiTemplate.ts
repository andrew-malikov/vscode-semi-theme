import Serializeable from "../serializeable";
import Component from "./component";
import Property from "./property";

export default class UiTemplate implements Serializeable {
  private _comps: Map<string, Component>;
  get components() {
    return this._comps;
  }

  constructor(components: Map<string, Component>) {
    this._comps = components;
  }

  public toList(): Property[] {
    const props = new Array<Property>();

    this.components.forEach(value => {
      props.push(...value.toList());
    });

    return props;
  }

  public toJson(): string {
    const props = new Map();

    this.toList().forEach(value => {
      props.set(value.name, value.color.toString());
    });

    return JSON.stringify(props);
  }
}
