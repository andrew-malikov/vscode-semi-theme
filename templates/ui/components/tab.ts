import Component from "../component";
import { builder } from "../propertyBuilder";

export default class Tab extends Component {
  public activeBackground = builder
    .setName("tab.activeBackground")
    .addTypes("tab", "active", "background")
    .build();

  public activeForeground = builder
    .setName("tab.activeForeground")
    .addTypes("tab", "active", "foreground")
    .build();

  public border = builder
    .setName("tab.border")
    .addTypes("tab", "border")
    .build();

  public activeBorder = builder
    .setName("tab.activeBorder")
    .addTypes("tab", "active", "border")
    .build();

  public unfocusedActiveBorder = builder
    .setName("tab.unfocusedActiveBorder")
    .addTypes("tab", "unfocused", "active", "border")
    .build();

  public inactiveBackground = builder
    .setName("tab.inactiveBackground")
    .addTypes("tab", "inactive", "background")
    .build();

  public inactiveForeground = builder
    .setName("tab.inactiveForeground")
    .addTypes("tab", "inactive", "foreground")
    .build();

  public unfocusedActiveForeground = builder
    .setName("tab.unfocusedActiveForeground")
    .addTypes("tab", "unfocused", "active", "foreground")
    .build();

  public unfocusedInactiveForeground = builder
    .setName("tab.unfocusedInactiveForeground")
    .addTypes("tab", "unfocused", "inactive", "foreground")
    .build();
}
