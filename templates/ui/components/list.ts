import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";

export default class List extends Component {
  public activeSelectionBackground = builder
    .setName("list.activeSelectionBackground")
    .addTypes(component.LIST, state.ACTIVE, "select", base.BACKGROUND)
    .build();

  public activeSelectionForeground = builder
    .setName("list.activeSelectionForeground")
    .addTypes(component.LIST, state.ACTIVE, base.SELECTION, base.FOREGROUND)
    .build();

  public dropBackground = builder
    .setName("list.dropBackground")
    .addTypes(component.LIST, extra.DROP, base.BACKGROUND)
    .build();

  public focusBackground = builder
    .setName("list.focusBackground")
    .addTypes(component.LIST, state.FOCUSED, base.BACKGROUND)
    .build();

  public highlightForeground = builder
    .setName("list.highlightForeground")
    .addTypes(component.LIST, color.HIGHLIGHT, base.FOREGROUND)
    .build();

  public hoverBackground = builder
    .setName("list.hoverBackground")
    .addTypes(component.LIST, state.HOVER, base.BACKGROUND)
    .build();

  public inactiveSelectionBackground = builder
    .setName("list.inactiveSelectionBackground")
    .addTypes(component.LIST, state.INACTIVE, base.SELECTION, base.BACKGROUND)
    .build();

  public inactiveSelectionForeground = builder
    .setName("list.inactiveSelectionForeground")
    .addTypes(component.LIST, state.INACTIVE, base.SELECTION, base.FOREGROUND)
    .build();

  public hoverForeground = builder
    .setName("list.hoverForeground")
    .addTypes(component.LIST, state.HOVER, base.FOREGROUND)
    .build();

  public focusForeground = builder
    .setName("list.focusForeground")
    .addTypes(component.LIST, state.FOCUSED, base.FOREGROUND)
    .build();
}
