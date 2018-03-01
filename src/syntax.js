const { syntaxTemplate } = require('./moduleMetadata');
const colors = require('./colors');

const global = {
  items: [
    {
      name: 'Global settings',
      settings: {
        background: null,
        foreground: null,
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Boolean',
      scope: 'constant.language.boolean',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Identifier',
      scope: 'variable, support.variable, support.class, support.constant, meta.definition.variable entity.name.function',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Function call',
      scope: 'entity.name.function, support.function',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Storage',
      scope: 'storage.type, storage.modifier',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Modules',
      scope: 'support.module, support.node',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Type',
      scope: 'support.type',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Type',
      scope: 'entity.name.type, entity.other.inherited-class',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Class',
      scope: 'entity.name.type.class',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Class variable',
      scope: 'variable.object.property',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Class method',
      scope: 'meta.definition.method entity.name.function',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Function definition',
      scope: 'meta.function entity.name.function',
      settings: {
        foreground: null,
      },
    },
    {
      name: 'Template expression',
      scope: 'template.expression.begin, template.expression.end',
      settings: {
        foreground: null,
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
      foreground: null,
    },
  },
  {
    name: 'JSON constant',
    scope: 'constant.language.json',
    settings: {
      foreground: null,
    },
  }],
  __proto__: syntaxTemplate,
};

const css = {
  items: [{
    name: 'CSS class',
    scope: 'entity.other.attribute-name.class',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'CSS ID',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'CSS tag',
    scope: 'source.css entity.name.tag',
    settings: {
      foreground: null,
    },
  }],
  __proto__: syntaxTemplate,
};

const html = {
  items: [{
    name: 'HTML tag outer',
    scope: 'meta.tag, punctuation.definition.tag',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'HTML tag inner',
    scope: 'entity.name.tag',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'HTML tag attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: null,
    },
  }],
  __proto__: syntaxTemplate,
};

const markdown = {
  items: [{
    name: 'Markdown heading',
    scope: 'markup.heading',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'Markdown link text',
    scope: 'text.html.markdown meta.link.inline, meta.link.reference',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'Markdown block quote',
    scope: 'text.html.markdown markup.quote',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'Markdown list item',
    scope: 'text.html.markdown beginning.punctuation.definition.list',
    settings: {
      foreground: null,
    },
  },
  {
    name: 'Markdown italic',
    scope: 'markup.italic',
    settings: {
      foreground: null,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markdown bold',
    scope: 'markup.bold',
    settings: {
      foreground: null,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown bold italic',
    scope: 'markup.bold markup.italic, markup.italic markup.bold',
    settings: {
      foreground: null,
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
