import Component from "../component";
import { builder } from "../propertyBuilder";

export default class Panel extends Component {
  public background = builder
    .setName("panel.background")
    .addTypes("panel", "background")
    .build();

  public border = builder
    .setName("panel.border")
    .addTypes("panel", "border")
    .build();

  public titleActiveBorder = builder
    .setName("panelTitle.activeBorder")
    .addTypes("panel", "title", "active", "border")
    .build();

  public titleActiveForeground = builder
    .setName("panelTitle.activeForeground")
    .addTypes("panel", "title", "active", "foreground")
    .build();

  public titleInactiveForeground = builder
    .setName("panelTitle.inactiveForeground")
    .addTypes("panel", "title", "inactive", "foreground")
    .build();
}
