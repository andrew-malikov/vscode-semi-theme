import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";

export default class Dropdown extends Component {
  public background = builder
    .setName("dropdown.background")
    .addTypes(component.DROPDOWN, base.BACKGROUND)
    .build();

  public border = builder
    .setName("dropdown.border")
    .addTypes(component.DROPDOWN, base.BORDER)
    .build();

  public foreground = builder
    .setName("dropdown.foreground")
    .addTypes(component.DROPDOWN, base.FOREGROUND)
    .build();
}
