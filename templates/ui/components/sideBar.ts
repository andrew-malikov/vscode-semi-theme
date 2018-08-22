import Component from "../component";
import { builder } from "../propertyBuilder";

export default class SideBar extends Component {
  public background = builder
    .setName("sideBar.background")
    .addTypes("sideBar", "background")
    .build();

  public foreground = builder
    .setName("sideBar.foreground")
    .addTypes("sideBar", "foreground")
    .build();

  public border = builder
    .setName("sideBar.border")
    .addTypes("sideBar", "border")
    .build();

  public titleForeground = builder
    .setName("sideBarTitle.foreground")
    .addTypes("sideBar", "title", "foreground")
    .build();

  public headerBackground = builder
    .setName("sideBarSectionHeader.background")
    .addTypes("sideBar", "section", "header", "background")
    .build();

  public headerForeground = builder
    .setName("sideBarSectionHeader.foreground")
    .addTypes("sideBar", "section", "header", "foreground")
    .build();
}
