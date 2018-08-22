import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class Notification extends Component {
  public background = builder
    .setName("notification.background")
    .addTypes(component.NOTIFICATION, base.BACKGROUND)
    .build();

  public foreground = builder
    .setName("notification.foreground")
    .addTypes(component.NOTIFICATION, base.FOREGROUND)
    .build();

  public buttonBackground = builder
    .setName("notification.buttonBackground")
    .addTypes(component.NOTIFICATION, component.BUTTON, base.BACKGROUND)
    .build();

  public buttonForeground = builder
    .setName("notification.buttonForeground")
    .addTypes(component.NOTIFICATION, component.BUTTON, base.FOREGROUND)
    .build();

  public buttonHoverBackground = builder
    .setName("notification.buttonHoverBackground")
    .addTypes(
      component.NOTIFICATION,
      component.BUTTON,
      state.HOVER,
      base.BACKGROUND
    )
    .build();

  public errorBackground = builder
    .setName("notification.errorBackground")
    .addTypes(component.NOTIFICATION, color.ERROR, base.BACKGROUND)
    .build();

  public errorForeground = builder
    .setName("notification.errorForeground")
    .addTypes(component.NOTIFICATION, color.ERROR, base.FOREGROUND)
    .build();

  public infoBackground = builder
    .setName("notification.infoBackground")
    .addTypes(component.NOTIFICATION, color.INFO, base.BACKGROUND)
    .build();

  public infoForeground = builder
    .setName("notification.infoForeground")
    .addTypes(component.NOTIFICATION, color.INFO, base.FOREGROUND)
    .build();

  public warningBackground = builder
    .setName("notification.warningBackground")
    .addTypes(component.NOTIFICATION, color.WARNING, base.BACKGROUND)
    .build();

  public warningForeground = builder
    .setName("notification.warningForeground")
    .addTypes(component.NOTIFICATION, color.WARNING, base.FOREGROUND)
    .build();
}
