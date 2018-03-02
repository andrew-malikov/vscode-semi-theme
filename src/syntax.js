const { syntaxTemplate } = require('./moduleMetadata');
const { ansiColors, baseSyntaxColors, baseUIColors } = require('./colors');

const global = {
  items: [
    {
      name: 'Global settings',
      settings: {
        background: baseUIColors.neutralBackground.toHexString(),
        foreground: baseUIColors.neutralForeground.toHexString(),
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: ansiColors.green.toHexString(),
      },
    },
    {
      name: 'Boolean',
      scope: 'constant.language.boolean',
      settings: {
        foreground: ansiColors.magenta.toHexString(),
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: ansiColors.magenta.toHexString(),
      },
    },
    {
      name: 'Identifier',
      scope: 'variable, support.variable, support.class, support.constant, meta.definition.variable entity.name.function',
      settings: {
        foreground: ansiColors.red.toHexString(),
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: ansiColors.blue.toHexString(),
      },
    },
    {
      name: 'Function call',
      scope: 'entity.name.function, support.function',
      settings: {
        foreground: ansiColors.blue.toHexString(),
      },
    },
    {
      name: 'Storage',
      scope: 'storage.type, storage.modifier',
      settings: {
        foreground: baseSyntaxColors.yellow.toHexString(),
      },
    },
    {
      name: 'Modules',
      scope: 'support.module, support.node',
      settings: {
        foreground: ansiColors.blue.toHexString(),
      },
    },
    {
      name: 'Type',
      scope: 'support.type',
      settings: {
        foreground: ansiColors.cyan.toHexString(),
      },
    },
    {
      name: 'Type',
      scope: 'entity.name.type, entity.other.inherited-class',
      settings: {
        foreground: baseSyntaxColors.yellow.toHexString(),
      },
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: baseSyntaxColors.neutralCyan.toHexString(),
      },
    },
    {
      name: 'Class',
      scope: 'entity.name.type.class',
      settings: {
        foreground: baseSyntaxColors.yellow.toHexString(),
      },
    },
    {
      name: 'Class variable',
      scope: 'variable.object.property',
      settings: {
        foreground: ansiColors.green.toHexString(),
      },
    },
    {
      name: 'Class method',
      scope: 'meta.definition.method entity.name.function',
      settings: {
        foreground: baseSyntaxColors.yellow.toHexString(),
      },
    },
    {
      name: 'Function definition',
      scope: 'meta.function entity.name.function',
      settings: {
        foreground: baseSyntaxColors.brightViolet.toHexString(),
      },
    },
    {
      name: 'Template expression',
      scope: 'template.expression.begin, template.expression.end',
      settings: {
        foreground: ansiColors.green.toHexString(),
      },
    },
  ],
  __proto__: syntaxTemplate,
};

const json = {
  items: [{
    name: 'JSON key',
    scope: 'meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json',
    settings: {
      foreground: baseSyntaxColors.cyan.toHexString(),
    },
  },
  {
    name: 'JSON constant',
    scope: 'constant.language.json',
    settings: {
      foreground: baseSyntaxColors.darkCyan.toHexString(),
    },
  }],
  __proto__: syntaxTemplate,
};

const css = {
  items: [{
    name: 'CSS class',
    scope: 'entity.other.attribute-name.class',
    settings: {
      foreground: baseSyntaxColors.yellow.toHexString(),
    },
  },
  {
    name: 'CSS ID',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: baseSyntaxColors.yellow.toHexString(),
    },
  },
  {
    name: 'CSS tag',
    scope: 'source.css entity.name.tag',
    settings: {
      foreground: ansiColors.red.toHexString(),
    },
  }],
  __proto__: syntaxTemplate,
};

const html = {
  items: [{
    name: 'HTML tag outer',
    scope: 'meta.tag, punctuation.definition.tag',
    settings: {
      foreground: ansiColors.white.toHexString(),
    },
  },
  {
    name: 'HTML tag inner',
    scope: 'entity.name.tag',
    settings: {
      foreground: ansiColors.red.toHexString(),
    },
  },
  {
    name: 'HTML tag attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: baseSyntaxColors.yellow.toHexString(),
    },
  }],
  __proto__: syntaxTemplate,
};

const markdown = {
  items: [{
    name: 'Markdown heading',
    scope: 'markup.heading',
    settings: {
      foreground: ansiColors.white.toHexString(),
    },
  },
  {
    name: 'Markdown link text',
    scope: 'text.html.markdown meta.link.inline, meta.link.reference',
    settings: {
      foreground: ansiColors.white.toHexString(),
    },
  },
  {
    name: 'Markdown block quote',
    scope: 'text.html.markdown markup.quote',
    settings: {
      foreground: baseSyntaxColors.yellow.toHexString(),
    },
  },
  {
    name: 'Markdown list item',
    scope: 'text.html.markdown beginning.punctuation.definition.list',
    settings: {
      foreground: ansiColors.green.toHexString(),
    },
  },
  {
    name: 'Markdown italic',
    scope: 'markup.italic',
    settings: {
      foreground: ansiColors.green.toHexString(),
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markdown bold',
    scope: 'markup.bold',
    settings: {
      foreground: ansiColors.green.toHexString(),
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown bold italic',
    scope: 'markup.bold markup.italic, markup.italic markup.bold',
    settings: {
      foreground: ansiColors.green.toHexString(),
      fontStyle: 'italic bold',
    },
  }],
  __proto__: syntaxTemplate,
};

exports.global = global;
exports.json = json;
exports.css = css;
exports.html = html;
exports.markdown = markdown;
