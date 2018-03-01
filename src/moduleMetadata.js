const versions = {
  STABLE: 'stable',
  UNSTABLE: 'unstable',
};

const types = {
  HEADER: 'header',
  SYNTAX: 'syntax',
  UI: 'ui',
};

const moduleTemplate = {
  version: versions.STABLE,
};

const headerTemplate = {
  type: types.HEADER,
  __proto__: moduleTemplate,
};

const syntaxTemplate = {
  type: types.SYNTAX,
  __proto__: moduleTemplate,
};

const uiTemplate = {
  type: types.UI,
  __proto__: moduleTemplate,
};

const unusedKeys = ['version', 'type'];

exports.versions = versions;
exports.types = types;

exports.headerTemplate = headerTemplate;
exports.syntaxTemplate = syntaxTemplate;
exports.uiTemplate = uiTemplate;

exports.toJSON = function toJSON(key, value) {
  if (unusedKeys.includes(key)) { return undefined; }
  return value;
};
