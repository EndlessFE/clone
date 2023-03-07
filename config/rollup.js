const pkg = require("../package.json");

const version = pkg.version;

const banner = `/**!
* ${pkg.name} ${version}
* Licensed under MIT
*/`;

const babel = require("@rollup/plugin-babel");

exports.banner = banner;

exports.getCompiler = function () {
  return babel({
    babelrc: false,
    presets: [
      [
        "@babel/env",
        {
          targets: {
            browsers:
              "last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10",
            node: "0.12",
          },
          modules: false,
          loose: true,
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
          helpers: false,
          regenerator: false,
        },
      ],
    ],
    exclude: "node_modules/**",
  });
};
