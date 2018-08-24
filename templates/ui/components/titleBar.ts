import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";
import { WidgetType as widget } from "../types/widgetType";

export default class TitleBar extends Component {
  public activeBackground = builder
    .setName("titleBar.activeBackground")
    .addTypes(component.TITLE_BAR, state.ACTIVE, base.BACKGROUND)
    .build();

  public activeForeground = builder
    .setName("titleBar.activeForeground")
    .addTypes(component.TITLE_BAR, state.ACTIVE, base.FOREGROUND)
    .build();

  public inactiveBackground = builder
    .setName("titleBar.inactiveBackground")
    .addTypes(component.TITLE_BAR, state.INACTIVE, base.BACKGROUND)
    .build();

  public inactiveForeground = builder
    .setName("titleBar.inactiveForeground")
    .addTypes(component.TITLE_BAR, state.INACTIVE, base.FOREGROUND)
    .build();
}
