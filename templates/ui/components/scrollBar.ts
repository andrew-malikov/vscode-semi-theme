import Component from "../component";
import { builder } from "../propertyBuilder";

export default class ScrollBar extends Component {
  public shadow = builder
    .setName("scrollbar.shadow")
    .addTypes("scrollBar", "shadow")
    .build();

  public activeBackground = builder
    .setName("scrollbarSlider.activeBackground")
    .addTypes("scrollBar", "slider", "active", "background")
    .build();

  public background = builder
    .setName("scrollbarSlider.background")
    .addTypes("scrollBar", "slider", "background")
    .build();

  public hoverBackground = builder
    .setName("scrollbarSlider.hoverBackground")
    .addTypes("scrollBar", "slider", "hover", "background")
    .build();
}
