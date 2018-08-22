import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";

export default class SideBar extends Component {
  public background = builder
    .setName("sideBar.background")
    .addTypes(component.SIDE_BAR, base.BACKGROUND)
    .build();

  public foreground = builder
    .setName("sideBar.foreground")
    .addTypes(component.SIDE_BAR, base.FOREGROUND)
    .build();

  public border = builder
    .setName("sideBar.border")
    .addTypes(component.SIDE_BAR, base.BORDER)
    .build();

  public titleForeground = builder
    .setName("sideBarTitle.foreground")
    .addTypes(component.SIDE_BAR, base.TITLE, base.FOREGROUND)
    .build();

  public headerBackground = builder
    .setName("sideBarSectionHeader.background")
    .addTypes(component.SIDE_BAR, base.SECTION, base.HEADER, base.BACKGROUND)
    .build();

  public headerForeground = builder
    .setName("sideBarSectionHeader.foreground")
    .addTypes(component.SIDE_BAR, base.SECTION, base.HEADER, base.FOREGROUND)
    .build();
}
