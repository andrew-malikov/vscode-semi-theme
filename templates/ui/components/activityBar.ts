import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";

export default class ActivityBar extends Component {
  public background = builder
    .setName("activityBar.background")
    .addTypes(component.ACTIVITY_BAR, base.BACKGROUND)
    .build();

  public dropBackground = builder
    .setName("activityBar.dropBackground")
    .addTypes(component.ACTIVITY_BAR, extra.DROP, base.BACKGROUND)
    .build();

  public foreground = builder
    .setName("activityBar.foreground")
    .addTypes(component.ACTIVITY_BAR, base.FOREGROUND)
    .build();

  public border = builder
    .setName("activityBar.border")
    .addTypes(component.ACTIVITY_BAR, base.BORDER)
    .build();

  public badgeBackground = builder
    .setName("activityBarBadge.background")
    .addTypes(component.ACTIVITY_BAR, component.BADGE, base.BACKGROUND)
    .build();

  public badgeForeground = builder
    .setName("activityBarBadge.foreground")
    .addTypes(component.ACTIVITY_BAR, component.BADGE, base.FOREGROUND)
    .build();
}
