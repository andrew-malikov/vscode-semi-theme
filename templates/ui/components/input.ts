import Component from "../component";
import { builder } from "../propertyBuilder";

export default class Input extends Component {
  public background = builder
    .setName("input.background")
    .addTypes("input", "background")
    .build();

  public border = builder
    .setName("input.border")
    .addTypes("input", "border")
    .build();

  public foreground = builder
    .setName("input.foreground")
    .addTypes("input", "foreground")
    .build();

  public placeholderForeground = builder
    .setName("input.placeholderForeground")
    .addTypes("input", "placeholder", "foreground")
    .build();

  public activeBorder = builder
    .setName("inputOption.activeBorder")
    .addTypes("input", "active", "border")
    .build();

  public infoBackground = builder
    .setName("inputValidation.infoBackground")
    .addTypes("input", "validation", "info", "background")
    .build();

  public infoBorder = builder
    .setName("inputValidation.infoBorder")
    .addTypes("input", "validation", "info", "border")
    .build();

  public warningBackground = builder
    .setName("inputValidation.warningBackground")
    .addTypes("input", "validation", "warning", "background")
    .build();

  public warningBorder = builder
    .setName("inputValidation.warningBorder")
    .addTypes("input", "validation", "warning", "border")
    .build();

  public errorBackground = builder
    .setName("inputValidation.errorBackground")
    .addTypes("input", "validation", "error", "background")
    .build();

  public errorBorder = builder
    .setName("inputValidation.errorBorder")
    .addTypes("input", "validation", "error", "border")
    .build();
}
