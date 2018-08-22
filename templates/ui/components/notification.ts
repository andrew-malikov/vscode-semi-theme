import Component from "../component";
import { builder } from "../propertyBuilder";

export default class Notification extends Component {
  public background = builder
    .setName("notification.background")
    .addTypes("notification", "background")
    .build();

  public foreground = builder
    .setName("notification.foreground")
    .addTypes("notification", "foreground")
    .build();

  public buttonBackground = builder
    .setName("notification.buttonBackground")
    .addTypes("notification", "button", "background")
    .build();

  public buttonForeground = builder
    .setName("notification.buttonForeground")
    .addTypes("notification", "button", "foreground")
    .build();

  public buttonHoverBackground = builder
    .setName("notification.buttonHoverBackground")
    .addTypes("notification", "button", "hover", "background")
    .build();

  public errorBackground = builder
    .setName("notification.errorBackground")
    .addTypes("notification", "error", "background")
    .build();

  public errorForeground = builder
    .setName("notification.errorForeground")
    .addTypes("notification", "error", "foreground")
    .build();

  public infoBackground = builder
    .setName("notification.infoBackground")
    .addTypes("notification", "info", "background")
    .build();

  public infoForeground = builder
    .setName("notification.infoForeground")
    .addTypes("notification", "info", "foreground")
    .build();

  public warningBackground = builder
    .setName("notification.warningBackground")
    .addTypes("notification", "warning", "background")
    .build();

  public warningForeground = builder
    .setName("notification.warningForeground")
    .addTypes("notification", "warning", "foreground")
    .build();
}
