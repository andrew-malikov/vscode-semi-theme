import { Instance as ColorValue } from "tinycolor2";
import Property from "./property";

export default class PropertyBuilder {
  private property: Property;

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
    this.property.type.push(...type);
    return this.next();
  }

  public reset() {
    this.property = new Property();
  }

  public build(): Property {
    const property = this.property;
    this.reset();
    return property;
  }

  private next(): this {
    return this;
  }
}

export const builder = new PropertyBuilder();
