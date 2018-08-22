import Component from "../component";
import { builder } from "../propertyBuilder";

export default class TitleBar extends Component {
  public activeBackground = builder
    .setName("titleBar.activeBackground")
    .addTypes("titleBar", "active", "background")
    .build();

  public activeForeground = builder
    .setName("titleBar.activeForeground")
    .addTypes("titleBar", "active", "foreground")
    .build();

  public inactiveBackground = builder
    .setName("titleBar.inactiveBackground")
    .addTypes("titleBar", "inactive", "background")
    .build();

  public inactiveForeground = builder
    .setName("titleBar.inactiveForeground")
    .addTypes("titleBar", "inactive", "foreground")
    .build();
}
