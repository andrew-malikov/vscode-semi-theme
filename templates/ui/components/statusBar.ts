import Component from "../component";
import { builder } from "../propertyBuilder";

export default class StatusBar extends Component {
  public background = builder
    .setName("statusBar.background")
    .addTypes("statusBar", "background")
    .build();

  public foreground = builder
    .setName("statusBar.foreground")
    .addTypes("statusBar", "foreground")
    .build();

  public debuggingBackground = builder
    .setName("statusBar.debuggingBackground")
    .addTypes("statusBar", "debug", "background")
    .build();

  public debuggingForeground = builder
    .setName("statusBar.debuggingForeground")
    .addTypes("statusBar", "debug", "foreground")
    .build();

  public noFolderBackground = builder
    .setName("statusBar.noFolderBackground")
    .addTypes("statusBar", "empty", "folder", "background")
    .build();

  public noFolderForeground = builder
    .setName("statusBar.noFolderForeground")
    .addTypes("statusBar", "empty", "folder", "foreground")
    .build();

  public border = builder
    .setName("statusBar.border")
    .addTypes("statusBar", "border")
    .build();
}
