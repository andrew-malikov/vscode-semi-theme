import Component from "../component";
import Property from "../property";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { StateType as state } from "../types/stateType";

export default class ContrastBorder extends Component {
  public border = builder
    .setName("contrastBorder")
    .addTypes(base.BORDER, color.CONTRAST)
    .build();

  public activeBorder = builder
    .setName("contrastActiveBorder")
    .addTypes(base.BORDER, color.CONTRAST, state.ACTIVE)
    .build();
}
