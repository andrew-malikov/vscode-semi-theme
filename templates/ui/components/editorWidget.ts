import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";

export default class EditorWidget extends Component {
  public background = builder
    .setName("editorWidget.background")
    .addTypes("editorWidget", base.BACKGROUND)
    .build();

  public border = builder
    .setName("editorWidgetBorder")
    .addTypes("editorWidget", base.BORDER)
    .build();

  public suggestBackground = builder
    .setName("editorSuggestWidget.background")
    .addTypes("editorSuggestWidget", base.BACKGROUND)
    .build();

  public suggestBorder = builder
    .setName("editorSuggestWidget.border")
    .addTypes("editorSuggestWidget", base.BORDER)
    .build();

  public suggestForeground = builder
    .setName("editorSuggestWidget.foreground")
    .addTypes("editorSuggestWidget", base.FOREGROUND)
    .build();

  public suggestHighlightForeground = builder
    .setName("editorSuggestWidget.highlightForeground")
    .addTypes("editorSuggestWidget", color.HIGHLIGHT, base.FOREGROUND)
    .build();

  public suggestSelectedBackground = builder
    .setName("editorSuggestWidget.selectedBackground")
    .addTypes("editorSuggestWidget", state.SELECTED, base.BACKGROUND)
    .build();

  public hoverBackground = builder
    .setName("editorHoverWidget.background")
    .addTypes("editorHoverWidget", state.HOVER, base.BACKGROUND)
    .build();

  public hoverBorder = builder
    .setName("editorHoverWidget.border")
    .addTypes("editorHoverWidget", state.HOVER, base.BORDER)
    .build();

  public exceptionBackground = builder
    .setName("debugExceptionWidget.background")
    .addTypes("debugExceptionWidget", base.BACKGROUND)
    .build();

  public exceptionBorder = builder
    .setName("debugExceptionWidget.border")
    .addTypes("debugExceptionWidget", base.BORDER)
    .build();

  public markerNavigationBackground = builder
    .setName("editorMarkerNavigation.background")
    .addTypes("editorMarkerNavigation", base.BACKGROUND)
    .build();

  public markerNavigationErrorBackground = builder
    .setName("editorMarkerNavigationError.background")
    .addTypes("editorMarkerNavigationError", color.ERROR, base.BACKGROUND)
    .build();

  public markerNavigationWarningBackground = builder
    .setName("editorMarkerNavigationWarning.background")
    .addTypes("editorMarkerNavigationWarning", color.WARNING, base.BACKGROUND)
    .build();
}
