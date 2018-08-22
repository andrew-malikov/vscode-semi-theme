import Component from "../component";
import { builder } from "../propertyBuilder";

import { BaseType as base } from "../types/baseType";
import { ColorType as color } from "../types/colorType";
import { ComponentType as component } from "../types/componentType";
import { ExtraType as extra } from "../types/extraType";
import { StateType as state } from "../types/stateType";

export default class Editor extends Component {
  public foreground = builder
    .setName("editor.foreground")
    .addTypes(component.EDITOR, base.FOREGROUND)
    .build();

  public background = builder
    .setName("editor.background")
    .addTypes(component.EDITOR, base.BACKGROUND)
    .build();

  public lineNumberForeground = builder
    .setName("editorLineNumber.foreground")
    .addTypes(component.EDITOR, base.LINE_NUMBER, base.FOREGROUND)
    .build();

  public cursorForeground = builder
    .setName("editorCursor.foreground")
    .addTypes(component.EDITOR, base.CURSOR, base.FOREGROUND)
    .build();

  public selectionBackground = builder
    .setName("editor.selectionBackground")
    .addTypes(component.EDITOR, base.SELECTION, base.BACKGROUND)
    .build();

  public selectionHighlightBackground = builder
    .setName("editor.selectionHighlightBackground")
    .addTypes(
      component.EDITOR,
      base.SELECTION,
      color.HIGHLIGHT,
      base.BACKGROUND
    )
    .build();

  public inactiveSelectionBackground = builder
    .setName("editor.inactiveSelectionBackground")
    .addTypes(component.EDITOR, state.INACTIVE, base.SELECTION, base.BACKGROUND)
    .build();

  public wordHighlightBackground = builder
    .setName("editor.wordHighlightBackground")
    .addTypes(component.EDITOR, base.WORD, color.HIGHLIGHT, base.BACKGROUND)
    .build();

  public wordHighlightStrongBackground = builder
    .setName("editor.wordHighlightStrongBackground")
    .addTypes(component.EDITOR, base.WORD, color.HIGHLIGHT)
    .build();

  public findMatchBackground = builder
    .setName("editor.findMatchBackground")
    .addTypes(component.EDITOR, extra.FIND, extra.MATCH, base.BACKGROUND)
    .build();

  public findMatchHighlightBackground = builder
    .setName("editor.findMatchHighlightBackground")
    .addTypes(
      component.EDITOR,
      extra.FIND,
      extra.MATCH,
      color.HIGHLIGHT,
      base.BACKGROUND
    )
    .build();

  public findRangeHighlightBackground = builder
    .setName("editor.findRangeHighlightBackground")
    .addTypes(
      component.EDITOR,
      extra.FIND,
      extra.RANGE,
      color.HIGHLIGHT,
      base.BACKGROUND
    )
    .build();

  public hoverHighlightBackground = builder
    .setName("editor.hoverHighlightBackground")
    .addTypes(component.EDITOR, state.HOVER, color.HIGHLIGHT, base.BACKGROUND)
    .build();

  public lineHighlightBackground = builder
    .setName("editor.lineHighlightBackground")
    .addTypes(component.EDITOR, base.LINE, color.HIGHLIGHT, base.BACKGROUND)
    .build();

  public lineHighlightBorder = builder
    .setName("editor.lineHighlightBorder")
    .addTypes(component.EDITOR, base.LINE, color.HIGHLIGHT, base.BACKGROUND)
    .build();

  public linkActiveForeground = builder
    .setName("editorLink.activeForeground")
    .addTypes(component.EDITOR, extra.LINK, state.ACTIVE, base.FOREGROUND)
    .build();

  public rangeHighlightBackground = builder
    .setName("editor.rangeHighlightBackground")
    .addTypes(component.EDITOR, extra.RANGE, color.HIGHLIGHT, base.BACKGROUND)
    .build();

  public whitespaceForeground = builder
    .setName("editorWhitespace.foreground")
    .addTypes(component.EDITOR, base.WHITESPACE, base.FOREGROUND)
    .build();

  public indentGuideBackground = builder
    .setName("editorIndentGuide.background")
    .addTypes(component.EDITOR, extra.INDENT, extra.GUIDE, base.BACKGROUND)
    .build();

  public rulerForeground = builder
    .setName("editorRuler.foreground")
    .addTypes(component.EDITOR, extra.RULER, base.FOREGROUND)
    .build();

  public codeLensForeground = builder
    .setName("editorCodeLens.foreground")
    .addTypes(component.EDITOR, extra.CODE_LENS, base.FOREGROUND)
    .build();

  public bracketMatchBackground = builder
    .setName("editorBracketMatch.background")
    .addTypes(component.EDITOR, base.BRACKET, extra.MATCH, base.BACKGROUND)
    .build();

  public bracketMatchBorder = builder
    .setName("editorBracketMatch.border")
    .addTypes(component.EDITOR, base.BRACKET, extra.MATCH, base.BORDER)
    .build();

  public overviewRulerBorder = builder
    .setName("editorOverviewRuler.border")
    .addTypes(component.EDITOR, extra.OVERVIEW, extra.RULER, base.BORDER)
    .build();

  public overviewRulerFindMatchForeground = builder
    .setName("editorOverviewRuler.findMatchForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      extra.FIND,
      extra.MATCH,
      base.FOREGROUND
    )
    .build();

  public overviewRulerRangeHighlightForeground = builder
    .setName("editorOverviewRuler.rangeHighlightForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      extra.RANGE,
      color.HIGHLIGHT,
      base.FOREGROUND
    )
    .build();

  public overviewRulerSelectionHighlightForeground = builder
    .setName("editorOverviewRuler.selectionHighlightForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      base.SELECTION,
      color.HIGHLIGHT,
      base.FOREGROUND
    )
    .build();

  public overviewRulerWordHighlightForeground = builder
    .setName("editorOverviewRuler.wordHighlightForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      base.WORD,
      color.HIGHLIGHT,
      base.FOREGROUND
    )
    .build();

  public overviewRulerWordHighlightStrongForeground = builder
    .setName("editorOverviewRuler.wordHighlightStrongForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      base.WORD,
      color.HIGHLIGHT,
      color.STRONG,
      base.FOREGROUND
    )
    .build();

  public overviewRulerModifiedForeground = builder
    .setName("editorOverviewRuler.modifiedForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      state.MODIFIED,
      base.FOREGROUND
    )
    .build();

  public overviewRulerAddedForeground = builder
    .setName("editorOverviewRuler.addedForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      state.ADDED,
      base.FOREGROUND
    )
    .build();

  public overviewRulerDeletedForeground = builder
    .setName("editorOverviewRuler.deletedForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      state.DELETED,
      base.FOREGROUND
    )
    .build();

  public overviewRulerErrorForeground = builder
    .setName("editorOverviewRuler.errorForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      color.ERROR,
      base.FOREGROUND
    )
    .build();

  public overviewRulerWarningForeground = builder
    .setName("editorOverviewRuler.warningForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      color.WARNING,
      base.FOREGROUND
    )
    .build();

  public overviewRulerInfoForeground = builder
    .setName("editorOverviewRuler.infoForeground")
    .addTypes(
      component.EDITOR,
      extra.OVERVIEW,
      extra.RULER,
      color.INFO,
      base.FOREGROUND
    )
    .build();

  public errorForeground = builder
    .setName("editorError.foreground")
    .addTypes(component.EDITOR, color.ERROR, base.FOREGROUND)
    .build();

  public errorBorder = builder
    .setName("editorError.border")
    .addTypes(component.EDITOR, color.ERROR, base.BORDER)
    .build();

  public warningForeground = builder
    .setName("editorWarning.foreground")
    .addTypes(component.EDITOR, color.WARNING, base.FOREGROUND)
    .build();

  public warningBorder = builder
    .setName("editorWarning.border")
    .addTypes(component.EDITOR, color.WARNING, base.BORDER)
    .build();

  public gutterBackground = builder
    .setName("editorGutter.background")
    .addTypes(component.EDITOR, extra.GUTTER, base.BACKGROUND)
    .build();

  public gutterModifiedBackground = builder
    .setName("editorGutter.modifiedBackground")
    .addTypes(component.EDITOR, extra.GUTTER, state.MODIFIED, base.BACKGROUND)
    .build();

  public gutterAddedBackground = builder
    .setName("editorGutter.addedBackground")
    .addTypes(component.EDITOR, extra.GUTTER, state.ADDED, base.BACKGROUND)
    .build();

  public gutterDeletedBackground = builder
    .setName("editorGutter.deletedBackground")
    .addTypes(component.EDITOR, extra.GUTTER, state.DELETED, base.BACKGROUND)
    .build();
}
