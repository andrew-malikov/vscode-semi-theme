import Component from "../component";
import { builder } from "../propertyBuilder";

export default class Editor extends Component {
  public foreground = builder
    .setName("editor.foreground")
    .addTypes("editor", "foreground")
    .build();

  public background = builder
    .setName("editor.background")
    .addTypes("editor", "background")
    .build();

  public lineNumberForeground = builder
    .setName("editorLineNumber.foreground")
    .addTypes("editor", "lineNumber", "foreground")
    .build();

  public cursorForeground = builder
    .setName("editorCursor.foreground")
    .addTypes("editor", "cursor", "foreground")
    .build();

  public selectionBackground = builder
    .setName("editor.selectionBackground")
    .addTypes("editor", "selection", "background")
    .build();

  public selectionHighlightBackground = builder
    .setName("editor.selectionHighlightBackground")
    .addTypes("editor", "selection", "highlight", "background")
    .build();

  public inactiveSelectionBackground = builder
    .setName("editor.inactiveSelectionBackground")
    .addTypes("editor", "inactive", "selection", "background")
    .build();

  public wordHighlightBackground = builder
    .setName("editor.wordHighlightBackground")
    .addTypes("editor", "word", "highlight", "background")
    .build();

  public wordHighlightStrongBackground = builder
    .setName("editor.wordHighlightStrongBackground")
    .addTypes("editor", "word", "highlight", "strong", "bacground")
    .build();

  public findMatchBackground = builder
    .setName("editor.findMatchBackground")
    .addTypes("editor", "find", "match", "background")
    .build();

  public findMatchHighlightBackground = builder
    .setName("editor.findMatchHighlightBackground")
    .addTypes("editor", "find", "match", "highlight", "background")
    .build();

  public findRangeHighlightBackground = builder
    .setName("editor.findRangeHighlightBackground")
    .addTypes("editor", "find", "range", "highlight", "background")
    .build();

  public hoverHighlightBackground = builder
    .setName("editor.hoverHighlightBackground")
    .addTypes("editor", "hover", "highlight", "background")
    .build();

  public lineHighlightBackground = builder
    .setName("editor.lineHighlightBackground")
    .addTypes("editor", "line", "highlight", "background")
    .build();

  public lineHighlightBorder = builder
    .setName("editor.lineHighlightBorder")
    .addTypes("editor", "line", "highlight", "background")
    .build();

  public linkActiveForeground = builder
    .setName("editorLink.activeForeground")
    .addTypes("editor", "link", "active", "foreground")
    .build();

  public rangeHighlightBackground = builder
    .setName("editor.rangeHighlightBackground")
    .addTypes("editor", "range", "highlight", "background")
    .build();

  public whitespaceForeground = builder
    .setName("editorWhitespace.foreground")
    .addTypes("editor", "whitespace", "foreground")
    .build();

  public indentGuideBackground = builder
    .setName("editorIndentGuide.background")
    .addTypes("editor", "indent", "guide", "background")
    .build();

  public rulerForeground = builder
    .setName("editorRuler.foreground")
    .addTypes("editor", "ruler", "foreground")
    .build();

  public codeLensForeground = builder
    .setName("editorCodeLens.foreground")
    .addTypes("editor", "codeLens", "foreground")
    .build();

  public bracketMatchBackground = builder
    .setName("editorBracketMatch.background")
    .addTypes("editor", "bracket", "match", "background")
    .build();

  public bracketMatchBorder = builder
    .setName("editorBracketMatch.border")
    .addTypes("editor", "bracket", "match", "border")
    .build();

  public overviewRulerBorder = builder
    .setName("editorOverviewRuler.border")
    .addTypes("editor", "overiew", "ruler", "border")
    .build();

  public overviewRulerFindMatchForeground = builder
    .setName("editorOverviewRuler.findMatchForeground")
    .addTypes("editor", "overview", "ruler", "find", "match", "foreground")
    .build();

  public overviewRulerRangeHighlightForeground = builder
    .setName("editorOverviewRuler.rangeHighlightForeground")
    .addTypes("editor", "overview", "ruler", "range", "highlight", "foreground")
    .build();

  public overviewRulerSelectionHighlightForeground = builder
    .setName("editorOverviewRuler.selectionHighlightForeground")
    .addTypes(
      "editor",
      "overview",
      "ruler",
      "selection",
      "highlight",
      "foreground"
    )
    .build();

  public overviewRulerWordHighlightForeground = builder
    .setName("editorOverviewRuler.wordHighlightForeground")
    .addTypes("editor", "overview", "ruler", "word", "highlight", "foreground")
    .build();

  public overviewRulerWordHighlightStrongForeground = builder
    .setName("editorOverviewRuler.wordHighlightStrongForeground")
    .addTypes(
      "editor",
      "overview",
      "ruler",
      "word",
      "highlight",
      "strong",
      "foreground"
    )
    .build();

  public overviewRulerModifiedForeground = builder
    .setName("editorOverviewRuler.modifiedForeground")
    .addTypes("editor", "overview", "ruler", "modified", "foreground")
    .build();

  public overviewRulerAddedForeground = builder
    .setName("editorOverviewRuler.addedForeground")
    .addTypes("editor", "overview", "ruler", "added", "foreground")
    .build();

  public overviewRulerDeletedForeground = builder
    .setName("editorOverviewRuler.deletedForeground")
    .addTypes("editor", "overview", "ruler", "deleted", "foreground")
    .build();

  public overviewRulerErrorForeground = builder
    .setName("editorOverviewRuler.errorForeground")
    .addTypes("editor", "overview", "ruler", "error", "foreground")
    .build();

  public overviewRulerWarningForeground = builder
    .setName("editorOverviewRuler.warningForeground")
    .addTypes("editor", "overview", "ruler", "warning", "foreground")
    .build();

  public overviewRulerInfoForeground = builder
    .setName("editorOverviewRuler.infoForeground")
    .addTypes("editor", "overview", "ruler", "info", "foreground")
    .build();

  public errorForeground = builder
    .setName("editorError.foreground")
    .addTypes("editor", "error", "foreground")
    .build();

  public errorBorder = builder
    .setName("editorError.border")
    .addTypes("editor", "error", "border")
    .build();

  public warningForeground = builder
    .setName("editorWarning.foreground")
    .addTypes("editor", "warning", "foreground")
    .build();

  public warningBorder = builder
    .setName("editorWarning.border")
    .addTypes("editorWarning", "border")
    .build();

  public gutterBackground = builder
    .setName("editorGutter.background")
    .addTypes("editor", "gutter", "background")
    .build();

  public gutterModifiedBackground = builder
    .setName("editorGutter.modifiedBackground")
    .addTypes("editor", "gutter", "modified", "background")
    .build();

  public gutterAddedBackground = builder
    .setName("editorGutter.addedBackground")
    .addTypes("editor", "gutter", "added", "background")
    .build();

  public gutterDeletedBackground = builder
    .setName("editorGutter.deletedBackground")
    .addTypes("editor", "gutter", "deleted", "background")
    .build();
}
