import { Instance as ColorValue } from "tinycolor2";
import UiProperty from "./uiProperty";

export default class UiPropertyBuilder {
  private property: UiProperty;

  constructor() {
    this.reset();
  }

  public setName(name: string): this {
    this.property.name = name;
    return this.next();
  }

  public setColor(color: ColorValue): this {
    this.property.color = color;
    return this.next();
  }

  public addTypes(...type: string[]): this {
    this.property.types.push(...type);
    return this.next();
  }

  public reset() {
    this.property = new UiProperty();
  }

  public build(): UiProperty {
    const property = this.property;
    this.reset();
    return property;
  }

  private next(): this {
    return this;
  }
}

export const builder = new UiPropertyBuilder();
