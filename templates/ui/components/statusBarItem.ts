import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";
import { WidgetType as widget } from "../types/widgetType";

export default class StatusBarItem extends Component {
  public activeBackground = builder
    .setName("statusBarItem.activeBackground")
    .addTypes(component.STATUS_BAR_ITEM, state.ACTIVE, base.BACKGROUND)
    .build();

  public hoverBackground = builder
    .setName("statusBarItem.hoverBackground")
    .addTypes(component.STATUS_BAR_ITEM, state.HOVER, base.BACKGROUND)
    .build();

  public prominentBackground = builder
    .setName("statusBarItem.prominentBackground")
    .addTypes(component.STATUS_BAR_ITEM, extra.PROMINENT, base.BACKGROUND)
    .build();

  public prominentHoverBackground = builder
    .setName("statusBarItem.prominentHoverBackground")
    .addTypes(
      component.STATUS_BAR_ITEM,
      extra.PROMINENT,
      state.HOVER,
      base.BACKGROUND
    )
    .build();
}
