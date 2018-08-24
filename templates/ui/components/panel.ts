import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class Panel extends Component {
  public background = builder
    .setName("panel.background")
    .addTypes(component.PANEL, base.BACKGROUND)
    .build();

  public border = builder
    .setName("panel.border")
    .addTypes(component.PANEL, base.BORDER)
    .build();

  public titleActiveBorder = builder
    .setName("panelTitle.activeBorder")
    .addTypes(component.PANEL, base.TITLE, state.ACTIVE, base.BORDER)
    .build();

  public titleActiveForeground = builder
    .setName("panelTitle.activeForeground")
    .addTypes(component.PANEL, base.TITLE, state.ACTIVE, base.FOREGROUND)
    .build();

  public titleInactiveForeground = builder
    .setName("panelTitle.inactiveForeground")
    .addTypes(component.PANEL, base.TITLE, state.INACTIVE, base.FOREGROUND)
    .build();
}
