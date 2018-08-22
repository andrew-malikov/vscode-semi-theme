import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class ScrollBar extends Component {
  public shadow = builder
    .setName("scrollbar.shadow")
    .addTypes(component.SCROLL_BAR, base.SHADOW)
    .build();

  public activeBackground = builder
    .setName("scrollbarSlider.activeBackground")
    .addTypes(component.SCROLL_BAR, base.SLIDER, state.ACTIVE, base.BACKGROUND)
    .build();

  public background = builder
    .setName("scrollbarSlider.background")
    .addTypes(component.SCROLL_BAR, base.SLIDER, base.BACKGROUND)
    .build();

  public hoverBackground = builder
    .setName("scrollbarSlider.hoverBackground")
    .addTypes(component.SCROLL_BAR, base.SLIDER, state.HOVER, base.BACKGROUND)
    .build();
}
