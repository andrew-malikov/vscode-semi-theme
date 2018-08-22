import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";

export default class EditorGroup extends Component {
  public background = builder
    .setName("editorGroup.background")
    .addTypes(component.EDITOR_GROUP, base.BACKGROUND)
    .build();

  public border = builder
    .setName("editorGroup.border")
    .addTypes(component.EDITOR_GROUP, base.BORDER)
    .build();

  public dropBackground = builder
    .setName("editorGroup.dropBackground")
    .addTypes(component.EDITOR_GROUP, extra.DROP, base.BACKGROUND)
    .build();

  public headerNoTabsBackground = builder
    .setName("editorGroupHeader.noTabsBackground")
    .addTypes(
      component.EDITOR_GROUP,
      base.HEADER,
      extra.EMPTY,
      base.TABS,
      base.BACKGROUND
    )
    .build();

  public headerTabsBackground = builder
    .setName("editorGroupHeader.tabsBackground")
    .addTypes(component.EDITOR_GROUP, base.HEADER, base.TABS, base.BACKGROUND)
    .build();

  public headerTabsBorder = builder
    .setName("editorGroupHeader.tabsBorder")
    .addTypes(component.EDITOR_GROUP, base.HEADER, base.TABS, base.BORDER)
    .build();
}
