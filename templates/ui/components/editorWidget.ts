import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { StateType as state } from "../types/stateType";
import { WidgetType as widget } from "../types/widgetType";

export default class EditorWidget extends Component {
  public background = builder
    .setName("editorWidget.background")
    .addTypes(component.EDITOR_WIDGET, base.BACKGROUND)
    .build();

  public border = builder
    .setName("editorWidgetBorder")
    .addTypes(component.EDITOR_WIDGET, base.BORDER)
    .build();

  public suggestBackground = builder
    .setName("editorSuggestWidget.background")
    .addTypes(component.EDITOR_WIDGET, widget.SUGGEST, base.BACKGROUND)
    .build();

  public suggestBorder = builder
    .setName("editorSuggestWidget.border")
    .addTypes(component.EDITOR_WIDGET, widget.SUGGEST, base.BORDER)
    .build();

  public suggestForeground = builder
    .setName("editorSuggestWidget.foreground")
    .addTypes(component.EDITOR_WIDGET, widget.SUGGEST, base.FOREGROUND)
    .build();

  public suggestHighlightForeground = builder
    .setName("editorSuggestWidget.highlightForeground")
    .addTypes(
      component.EDITOR_WIDGET,
      widget.SUGGEST,
      color.HIGHLIGHT,
      base.FOREGROUND
    )
    .build();

  public suggestSelectedBackground = builder
    .setName("editorSuggestWidget.selectedBackground")
    .addTypes(
      component.EDITOR_WIDGET,
      widget.SUGGEST,
      state.SELECTED,
      base.BACKGROUND
    )
    .build();

  public hoverBackground = builder
    .setName("editorHoverWidget.background")
    .addTypes(
      component.EDITOR_WIDGET,
      widget.HOVER,
      state.HOVER,
      base.BACKGROUND
    )
    .build();

  public hoverBorder = builder
    .setName("editorHoverWidget.border")
    .addTypes(widget.HOVER, state.HOVER, base.BORDER)
    .build();

  public exceptionBackground = builder
    .setName("debugExceptionWidget.background")
    .addTypes(component.EDITOR_WIDGET, widget.EXCEPTION, base.BACKGROUND)
    .build();

  public exceptionBorder = builder
    .setName("debugExceptionWidget.border")
    .addTypes(component.EDITOR_WIDGET, widget.EXCEPTION, base.BORDER)
    .build();

  public markerNavigationBackground = builder
    .setName("editorMarkerNavigation.background")
    .addTypes(component.EDITOR_WIDGET, widget.MARKER, base.BACKGROUND)
    .build();

  public markerNavigationErrorBackground = builder
    .setName("editorMarkerNavigationError.background")
    .addTypes(
      component.EDITOR_WIDGET,
      widget.MARKER,
      color.ERROR,
      base.BACKGROUND
    )
    .build();

  public markerNavigationWarningBackground = builder
    .setName("editorMarkerNavigationWarning.background")
    .addTypes(
      component.EDITOR_WIDGET,
      widget.MARKER,
      color.WARNING,
      base.BACKGROUND
    )
    .build();
}
