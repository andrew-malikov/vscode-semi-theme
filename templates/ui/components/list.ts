import Component from "../component";
import { builder } from "../propertyBuilder";

export default class List extends Component {
  public activeSelectionBackground = builder
    .setName("list.activeSelectionBackground")
    .addTypes("list", "active", "select", "background")
    .build();

  public activeSelectionForeground = builder
    .setName("list.activeSelectionForeground")
    .addTypes("list", "active", "select", "foreground")
    .build();

  public dropBackground = builder
    .setName("list.dropBackground")
    .addTypes("list", "drop", "background")
    .build();

  public focusBackground = builder
    .setName("list.focusBackground")
    .addTypes("list", "focus", "background")
    .build();

  public highlightForeground = builder
    .setName("list.highlightForeground")
    .addTypes("list", "highlight", "foreground")
    .build();

  public hoverBackground = builder
    .setName("list.hoverBackground")
    .addTypes("list", "hover", "background")
    .build();

  public inactiveSelectionBackground = builder
    .setName("list.inactiveSelectionBackground")
    .addTypes("list", "inactive", "select", "background")
    .build();

  public inactiveSelectionForeground = builder
    .setName("list.inactiveSelectionForeground")
    .addTypes("list", "inactive", "select", "foreground")
    .build();

  public hoverForeground = builder
    .setName("list.hoverForeground")
    .addTypes("list", "hover", "foreground")
    .build();

  public focusForeground = builder
    .setName("list.focusForeground")
    .addTypes("list", "focus", "foreground")
    .build();
}
