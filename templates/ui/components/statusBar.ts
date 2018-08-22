import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";

export default class StatusBar extends Component {
  public background = builder
    .setName("statusBar.background")
    .addTypes(component.STATUS_BAR, base.BACKGROUND)
    .build();

  public foreground = builder
    .setName("statusBar.foreground")
    .addTypes(component.STATUS_BAR, base.FOREGROUND)
    .build();

  public debuggingBackground = builder
    .setName("statusBar.debuggingBackground")
    .addTypes(component.STATUS_BAR, extra.DEBUG, base.BACKGROUND)
    .build();

  public debuggingForeground = builder
    .setName("statusBar.debuggingForeground")
    .addTypes(component.STATUS_BAR, extra.DEBUG, base.FOREGROUND)
    .build();

  public noFolderBackground = builder
    .setName("statusBar.noFolderBackground")
    .addTypes(component.STATUS_BAR, extra.EMPTY, extra.FOLDER, base.BACKGROUND)
    .build();

  public noFolderForeground = builder
    .setName("statusBar.noFolderForeground")
    .addTypes(component.STATUS_BAR, extra.EMPTY, extra.FOLDER, base.FOREGROUND)
    .build();

  public border = builder
    .setName("statusBar.border")
    .addTypes(component.STATUS_BAR, base.BORDER)
    .build();
}
