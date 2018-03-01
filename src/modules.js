const { versions, types } = require('./moduleMetadata');
const root = require('./rootModule');
const { header } = require('./header');
const syntax = require('./syntax');
const ui = require('./ui');

function getAllModules() {
  return [
    header,
    syntax.global,
    syntax.css,
    syntax.html,
    syntax.json,
    syntax.markdown,
    ui.activityBar,
    ui.Badge,
    ui.baseColors,
    ui.buttonControl,
    ui.contrastColors,
    ui.debug,
    ui.diffEditorColors,
    ui.dropdownControl,
    ui.editorColors,
    ui.editorGroupsAndTabs,
    ui.editorWidgetColors,
    ui.explorerColors,
    ui.extensions,
    ui.inputControl,
    ui.listControll,
    ui.mergeConflicts,
    ui.notificationDialogColors,
    ui.panelColors,
    ui.peekViewColors,
    ui.progressBar,
    ui.quickPicker,
    ui.scrollBarControll,
    ui.sideBar,
    ui.statusBarColors,
    ui.terminalColors,
    ui.titleBarColors,
    ui.welcomePage,
  ];
}

function getModules(version) {
  const modules = getAllModules();
  return modules.filter((module) => {
    if (module.version === version) {
      return true;
    }
    return false;
  });
}

function getRootSectionForModule(rootModule, module) {
  if (module.type === types.HEADER) {
    return rootModule;
  }
  if (module.type === types.SYNTAX) {
    return rootModule.tokenColors;
  }
  if (module.type === types.UI) {
    return rootModule.colors;
  }
  return null;
}

function appendToRoot(rootModule, module) {
  const rootSection = getRootSectionForModule(rootModule, module);
  if (module.type !== types.SYNTAX) { Object.assign(rootSection, module); } else {
    module.items.forEach((item) => {
      rootSection.push(item);
    });
  }
}

function buildModules(modules) {
  const template = root.NewRoot();

  modules.forEach((module) => {
    appendToRoot(template, module);
  });

  return JSON.stringify(template, null, 2);
}

exports.buildStableModules = function buildStableModules() {
  const stableModules = getModules(versions.STABLE);
  return buildModules(stableModules);
};

exports.buildUnstableModules = function buildUnstableModules() {
  const unstableModules = getModules(versions.UNSTABLE);
  return buildModules(unstableModules);
};
