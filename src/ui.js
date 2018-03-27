const { uiTemplate } = require('./moduleMetadata');
const { ansiColors, baseUIColors, additionalUIColors } = require('./colors');

const terminalColors = {
  'terminal.background': baseUIColors.darkNeutralBackground.clone().darken(2).toHexString(),
  'terminal.foreground': baseUIColors.neutralForeground.toHexString(),
  'terminal.ansiBrightBlack': ansiColors.brightBlack.toHexString(),
  'terminal.ansiBrightRed': ansiColors.brightRed.toHexString(),
  'terminal.ansiBrightGreen': ansiColors.brightGreen.toHexString(),
  'terminal.ansiBrightYellow': ansiColors.brightYellow.toHexString(),
  'terminal.ansiBrightBlue': ansiColors.brightBlue.toHexString(),
  'terminal.ansiBrightMagenta': ansiColors.brightMagenta.toHexString(),
  'terminal.ansiBrightCyan': ansiColors.brightCyan.toHexString(),
  'terminal.ansiBrightWhite': ansiColors.brightWhite.toHexString(),
  'terminal.ansiBlack': ansiColors.black.toHexString(),
  'terminal.ansiRed': ansiColors.red.toHexString(),
  'terminal.ansiGreen': ansiColors.green.toHexString(),
  'terminal.ansiYellow': ansiColors.yellow.toHexString(),
  'terminal.ansiBlue': ansiColors.blue.toHexString(),
  'terminal.ansiMagenta': ansiColors.magenta.toHexString(),
  'terminal.ansiCyan': ansiColors.cyan.toHexString(),
  'terminal.ansiWhite': ansiColors.white.toHexString(),
  __proto__: uiTemplate,
};

const contrastColors = {
  contrastBorder: baseUIColors.darkBackground.toHexString(),
  contrastActiveBorder: null,
  __proto__: uiTemplate,
};

const baseColors = {
  focusBorder: null,
  foreground: null,
  'widget.shadow': null,
  'selection.background': null,
  errorForeground: null,
  __proto__: uiTemplate,
};

const buttonControl = {
  'button.background': null,
  'button.foreground': null,
  'button.hoverBackground': null,
  __proto__: uiTemplate,
};

const dropdownControl = {
  'dropdown.background': null,
  'dropdown.border': null,
  'dropdown.foreground': null,
  __proto__: uiTemplate,
};

const inputControl = {
  'input.background': null,
  'input.foreground': null,
  'input.border': null,
  'input.placeholderForeground': null,
  'inputOption.activeBorder': null,
  'inputValidation.infoBackground': null,
  'inputValidation.infoBorder': null,
  'inputValidation.warningBackground': null,
  'inputValidation.warningBorder': null,
  'inputValidation.errorBackground': null,
  'inputValidation.errorBorder': null,
  __proto__: uiTemplate,
};

const scrollBarControll = {
  'scrollbar.shadow': baseUIColors.darkBackground.toHexString(),
  'scrollbarSlider.activeBackground': null,
  'scrollbarSlider.background': null,
  'scrollbarSlider.hoverBackground': null,
  __proto__: uiTemplate,
};

const Badge = {
  'badge.foreground': null,
  'badge.background': null,
  __proto__: uiTemplate,
};

const progressBar = {
  'progressBar.background': null,
  __proto__: uiTemplate,
};

const listControll = {
  'list.activeSelectionBackground': additionalUIColors.neutralGray.clone().darken(1).toHexString(),
  'list.activeSelectionForeground': null,
  'list.dropBackground': null,
  'list.focusBackground': null,
  'list.highlightForeground': null,
  'list.hoverBackground': baseUIColors.neutralBackground.clone().brighten(3).toHexString(),
  'list.inactiveSelectionBackground': baseUIColors.neutralBackground.toHexString(),
  'list.inactiveSelectionForeground': null,
  'list.hoverForeground': null,
  'list.focusForeground': null,
  __proto__: uiTemplate,
};

const activityBar = {
  'activityBar.background': baseUIColors.darkBackground.clone().darken(1).toHexString(),
  'activityBar.dropBackground': null,
  'activityBar.foreground': null,
  'activityBar.border': null,
  'activityBarBadge.background': null,
  'activityBarBadge.foreground': null,
  __proto__: uiTemplate,
};

const sideBar = {
  'sideBar.background': baseUIColors.darkBackground.toHexString(),
  'sideBar.foreground': null,
  'sideBar.border': null,
  'sideBarTitle.foreground': null,
  'sideBarSectionHeader.background': baseUIColors.darkBackground.clone().brighten(4).toHexString(),
  'sideBarSectionHeader.foreground': null,
  __proto__: uiTemplate,
};

const editorGroupsAndTabs = {
  'editorGroup.background': null,
  'editorGroup.border': null,
  'editorGroup.dropBackground': null,
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': baseUIColors.darkBackground.toHexString(),
  'editorGroupHeader.tabsBorder': null,
  'tab.activeBackground': null,
  'tab.activeForeground': null,
  'tab.border': baseUIColors.darkBackground.toHexString(),
  'tab.activeBorder': null,
  'tab.unfocusedActiveBorder': null,
  'tab.inactiveBackground': baseUIColors.darkBackground.toHexString(),
  'tab.inactiveForeground': null,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedInactiveForeground': null,
  __proto__: uiTemplate,
};

const editorColors = {
  'editor.foreground': null,
  'editor.background': baseUIColors.darkNeutralBackground.toHexString(),
  'editorLineNumber.foreground': null,
  'editorCursor.foreground': null,
  'editor.selectionBackground': null,
  'editor.selectionHighlightBackground': null,
  'editor.inactiveSelectionBackground': null,
  'editor.wordHighlightBackground': null,
  'editor.wordHighlightStrongBackground': null,
  'editor.findMatchBackground': null,
  'editor.findMatchHighlightBackground': null,
  'editor.findRangeHighlightBackground': null,
  'editor.hoverHighlightBackground': null,
  'editor.lineHighlightBackground': null,
  'editor.lineHighlightBorder': additionalUIColors.neutralGray.toHexString(),
  'editorLink.activeForeground': null,
  'editor.rangeHighlightBackground': null,
  'editorWhitespace.foreground': null,
  'editorIndentGuide.background': null,
  'editorRuler.foreground': null,
  'editorCodeLens.foreground': null,
  'editorBracketMatch.background': null,
  'editorBracketMatch.border': null,
  'editorOverviewRuler.border': baseUIColors.darkBackground.toHexString(),
  'editorOverviewRuler.findMatchForeground': null,
  'editorOverviewRuler.rangeHighlightForeground': null,
  'editorOverviewRuler.selectionHighlightForeground': null,
  'editorOverviewRuler.wordHighlightForeground': null,
  'editorOverviewRuler.wordHighlightStrongForeground': null,
  'editorOverviewRuler.modifiedForeground': null,
  'editorOverviewRuler.addedForeground': null,
  'editorOverviewRuler.deletedForeground': null,
  'editorOverviewRuler.errorForeground': null,
  'editorOverviewRuler.warningForeground': null,
  'editorOverviewRuler.infoForeground': null,
  'editorError.foreground': null,
  'editorError.border': null,
  'editorWarning.foreground': null,
  'editorWarning.border': null,
  'editorGutter.background': null,
  'editorGutter.modifiedBackground': null,
  'editorGutter.addedBackground': null,
  'editorGutter.deletedBackground': null,
  __proto__: uiTemplate,
};

const explorerColors = {
  'gitDecoration.modifiedResourceForeground': null,
  'gitDecoration.deletedResourceForeground': null,
  'gitDecoration.untrackedResourceForeground': null,
  'gitDecoration.ignoredResourceForeground': null,
  'gitDecoration.conflictingResourceForeground': null,
  __proto__: uiTemplate,
};

const diffEditorColors = {
  'diffEditor.insertedTextBackground': null,
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBackground': null,
  'diffEditor.removedTextBorder': null,
  __proto__: uiTemplate,
};

const editorWidgetColors = {
  'editorWidget.background': null,
  editorWidgetBorder: null,
  'editorSuggestWidget.background': null,
  'editorSuggestWidget.border': null,
  'editorSuggestWidget.foreground': null,
  'editorSuggestWidget.highlightForeground': null,
  'editorSuggestWidget.selectedBackground': null,
  'editorHoverWidget.background': null,
  'editorHoverWidget.border': null,
  'debugExceptionWidget.background': null,
  'debugExceptionWidget.border': null,
  'editorMarkerNavigation.background': null,
  'editorMarkerNavigationError.background': null,
  'editorMarkerNavigationWarning.background': null,
  __proto__: uiTemplate,
};

const peekViewColors = {
  'peekView.border': null,
  'peekViewEditor.background': null,
  'peekViewEditorGutter.background': null,
  'peekViewEditor.matchHighlightBackground': null,
  'peekViewResult.background': null,
  'peekViewResult.fileForeground': null,
  'peekViewResult.lineForeground': null,
  'peekViewResult.matchHighlightBackground': null,
  'peekViewResult.selectionBackground': null,
  'peekViewResult.selectionForeground': null,
  'peekViewTitle.background': null,
  'peekViewTitleDescription.foreground': null,
  'peekViewTitleLabel.foreground': null,
  __proto__: uiTemplate,
};

const mergeConflicts = {
  'merge.currentHeaderBackground': null,
  'merge.currentContentBackground': null,
  'merge.incomingHeaderBackground': null,
  'merge.incomingContentBackground': null,
  'merge.border': null,
  'editorOverviewRuler.currentContentForeground': null,
  'editorOverviewRuler.incomingContentForeground': null,
  __proto__: uiTemplate,
};

const panelColors = {
  'panel.background': null,
  'panel.border': baseUIColors.darkBackground.toHexString(),
  'panelTitle.activeBorder': null,
  'panelTitle.activeForeground': null,
  'panelTitle.inactiveForeground': null,
  __proto__: uiTemplate,
};

const statusBarColors = {
  'statusBar.background': baseUIColors.darkBackground.toHexString(),
  'statusBar.foreground': null,
  'statusBar.debuggingBackground': null,
  'statusBar.debuggingForeground': null,
  'statusBar.noFolderBackground': null,
  'statusBar.noFolderForeground': null,
  'statusBarItem.activeBackground': null,
  'statusBarItem.hoverBackground': null,
  'statusBarItem.prominentBackground': null,
  'statusBarItem.prominentHoverBackground': null,
  'statusBar.border': null,
  __proto__: uiTemplate,
};

const titleBarColors = {
  'titleBar.activeBackground': null,
  'titleBar.activeForeground': null,
  'titleBar.inactiveBackground': null,
  'titleBar.inactiveForeground': null,
  __proto__: uiTemplate,
};

const notificationDialogColors = {
  'notification.background': null,
  'notification.foreground': null,
  'notification.buttonBackground': null,
  'notification.buttonForeground': null,
  'notification.buttonHoverBackground': null,
  'notification.errorBackground': null,
  'notification.errorForeground': null,
  'notification.infoBackground': null,
  'notification.infoForeground': null,
  'notification.warningBackground': null,
  'notification.warningForeground': null,
  __proto__: uiTemplate,
};

const extensions = {
  'extensionButton.prominentForeground': null,
  'extensionButton.prominentBackground': null,
  'extensionButton.prominentHoverBackground': null,
  __proto__: uiTemplate,
};

const quickPicker = {
  'pickerGroup.border': null,
  'pickerGroup.foreground': null,
  __proto__: uiTemplate,
};

const debug = {
  'debugToolBar.background': null,
  __proto__: uiTemplate,
};

const welcomePage = {
  'welcomePage.buttonBackground': null,
  'welcomePage.buttonHoverBackground': null,
  'walkThrough.embeddedEditorBackground': null,
  __proto__: uiTemplate,
};

exports.terminalColors = terminalColors;
exports.contrastColors = contrastColors;
exports.baseColors = baseColors;
exports.buttonControl = buttonControl;
exports.dropdownControl = dropdownControl;
exports.inputControl = inputControl;
exports.scrollBarControll = scrollBarControll;
exports.Badge = Badge;
exports.progressBar = progressBar;
exports.listControll = listControll;
exports.activityBar = activityBar;
exports.sideBar = sideBar;
exports.editorGroupsAndTabs = editorGroupsAndTabs;
exports.editorColors = editorColors;
exports.explorerColors = explorerColors;
exports.diffEditorColors = diffEditorColors;
exports.editorWidgetColors = editorWidgetColors;
exports.peekViewColors = peekViewColors;
exports.mergeConflicts = mergeConflicts;
exports.panelColors = panelColors;
exports.statusBarColors = statusBarColors;
exports.titleBarColors = titleBarColors;
exports.notificationDialogColors = notificationDialogColors;
exports.extensions = extensions;
exports.quickPicker = quickPicker;
exports.debug = debug;
exports.welcomePage = welcomePage;
