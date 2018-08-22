import Component from "../component";
import { builder } from "../propertyBuilder";

export default class StatusBarItem extends Component {
  public activeBackground = builder
    .setName("statusBarItem.activeBackground")
    .addTypes("statusBarItem", "active", "background")
    .build();

  public hoverBackground = builder
    .setName("statusBarItem.hoverBackground")
    .addTypes("statusBarItem", "hover", "background")
    .build();

  public prominentBackground = builder
    .setName("statusBarItem.prominentBackground")
    .addTypes("statusBarItem", "prominent", "background")
    .build();

  public prominentHoverBackground = builder
    .setName("statusBarItem.prominentHoverBackground")
    .addTypes("statusBarItem", "prominent", "hover", "background")
    .build();
}
