import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class Tab extends Component {
  public activeBackground = builder
    .setName("tab.activeBackground")
    .addTypes(component.TAB, state.ACTIVE, base.BACKGROUND)
    .build();

  public activeForeground = builder
    .setName("tab.activeForeground")
    .addTypes(component.TAB, state.ACTIVE, base.FOREGROUND)
    .build();

  public border = builder
    .setName("tab.border")
    .addTypes(component.TAB, base.BORDER)
    .build();

  public activeBorder = builder
    .setName("tab.activeBorder")
    .addTypes(component.TAB, state.ACTIVE, base.BORDER)
    .build();

  public unfocusedActiveBorder = builder
    .setName("tab.unfocusedActiveBorder")
    .addTypes(component.TAB, state.UNFOCUSED, state.ACTIVE, base.BORDER)
    .build();

  public inactiveBackground = builder
    .setName("tab.inactiveBackground")
    .addTypes(component.TAB, state.INACTIVE, base.BACKGROUND)
    .build();

  public inactiveForeground = builder
    .setName("tab.inactiveForeground")
    .addTypes(component.TAB, state.INACTIVE, base.FOREGROUND)
    .build();

  public unfocusedActiveForeground = builder
    .setName("tab.unfocusedActiveForeground")
    .addTypes(component.TAB, state.UNFOCUSED, state.ACTIVE, base.FOREGROUND)
    .build();

  public unfocusedInactiveForeground = builder
    .setName("tab.unfocusedInactiveForeground")
    .addTypes(component.TAB, state.UNFOCUSED, state.INACTIVE, base.FOREGROUND)
    .build();
}
