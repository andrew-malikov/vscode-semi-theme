import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class Button extends Component {
  public background = builder
    .setName("button.background")
    .addTypes(component.BUTTON, base.BACKGROUND)
    .build();

  public foreground = builder
    .setName("button.foreground")
    .addTypes(component.BUTTON, base.FOREGROUND)
    .build();

  public hoverBackground = builder
    .setName("button.hoverBackground")
    .addTypes(component.BUTTON, state.HOVER)
    .build();
}
