import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";

export default class Badge extends Component {
  public foreground = builder
    .setName("badge.foreground")
    .addTypes(component.BADGE, base.FOREGROUND)
    .build();

  public background = builder
    .setName("badge.background")
    .addTypes(component.BADGE, base.BACKGROUND)
    .build();
}
