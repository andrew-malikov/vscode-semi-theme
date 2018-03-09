const color = require('tinycolor2');

const baseUIColors = {
  neutralBackground: color('#1C282D'),
  darkNeutralBackground: color('#1E2529'),
  darkBackground: color('#14191E'),
  blackBackground: color('#0A0F14'),
  neutralForeground: color('#D6D8D9'),
  pastelForeground: color('#D3D3C2'),
  lightForeground: color('#EAEBEC'),
};

const additionalUIColors = {
  neutralGray: color('#3A464D'),
};

const ansiColors = {
  black: color('#263238'),
  red: color('#FA6981'),
  green: color('#C3E88D'),
  yellow: color('#FFCC00'),
  blue: color('#82AAFF'),
  magenta: color('#f77669'),
  cyan: color('#7FCAC3'),
  white: color('#B2CCD6'),
  brightBlack: color('#65737e'),
  brightRed: color('#bf616a'),
  brightGreen: color('#a3be8c'),
  brightYellow: color('#FFCC00'),
  brightBlue: color('#82AAFF'),
  brightMagenta: color('#f77669'),
  brightCyan: color('#7FCAC3'),
  brightWhite: color('#B2CCD6'),
};

const baseSyntaxColors = {
  indigo: color('#9281fa').darken(2),
  brightViolet: color('#BD8BDF'),
  yellow: color('#FFCB6B'),
  cyan: color('#40c4ff'),
  darkCyan: color('#039BE5'),
  neutralCyan: color('#405561'),
};

exports.baseUIColors = baseUIColors;
exports.additionalUIColors = additionalUIColors;
exports.ansiColors = ansiColors;
exports.baseSyntaxColors = baseSyntaxColors;
