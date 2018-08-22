import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";

export default class ProgressBar extends Component {
  public background = builder
    .setName("progressBar.background")
    .addTypes(component.PROGESS_BAR, base.BACKGROUND)
    .build();
}
