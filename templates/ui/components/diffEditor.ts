import Component from "../component";
import { builder } from "../uiPropertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";

export default class DiffEditor extends Component {
  public insertedTextBackground = builder
    .setName("diffEditor.insertedTextBackground")
    .addTypes(component.DIFF_EDITOR, state.INSERTED, base.BACKGROUND)
    .build();

  public insertedTextBorder = builder
    .setName("diffEditor.insertedTextBorder")
    .addTypes(component.DIFF_EDITOR, state.INSERTED, base.BORDER)
    .build();

  public removedTextBackground = builder
    .setName("diffEditor.removedTextBackground")
    .addTypes(component.DIFF_EDITOR, state.REMOVED, base.BACKGROUND)
    .build();

  public removedTextBorder = builder
    .setName("diffEditor.removedTextBorder")
    .addTypes(component.DIFF_EDITOR, state.REMOVED, base.BORDER)
    .build();
}
