import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";

export default class Input extends Component {
  public background = builder
    .setName("input.background")
    .addTypes(component.INPUT, base.BACKGROUND)
    .build();

  public border = builder
    .setName("input.border")
    .addTypes(component.INPUT, base.BORDER)
    .build();

  public foreground = builder
    .setName("input.foreground")
    .addTypes(component.INPUT, base.FOREGROUND)
    .build();

  public placeholderForeground = builder
    .setName("input.placeholderForeground")
    .addTypes(component.INPUT, extra.PLACEHOLDER, base.FOREGROUND)
    .build();

  public activeBorder = builder
    .setName("inputOption.activeBorder")
    .addTypes(component.INPUT, state.ACTIVE, base.BORDER)
    .build();

  public infoBackground = builder
    .setName("inputValidation.infoBackground")
    .addTypes(component.INPUT, extra.VALIDATION, color.INFO, base.BACKGROUND)
    .build();

  public infoBorder = builder
    .setName("inputValidation.infoBorder")
    .addTypes(component.INPUT, extra.VALIDATION, color.INFO, base.BORDER)
    .build();

  public warningBackground = builder
    .setName("inputValidation.warningBackground")
    .addTypes(component.INPUT, extra.VALIDATION, color.WARNING, base.BACKGROUND)
    .build();

  public warningBorder = builder
    .setName("inputValidation.warningBorder")
    .addTypes(component.INPUT, extra.VALIDATION, color.WARNING, base.BORDER)
    .build();

  public errorBackground = builder
    .setName("inputValidation.errorBackground")
    .addTypes(component.INPUT, extra.VALIDATION, color.ERROR, base.BACKGROUND)
    .build();

  public errorBorder = builder
    .setName("inputValidation.errorBorder")
    .addTypes(component.INPUT, extra.VALIDATION, color.ERROR, base.BORDER)
    .build();
}
