const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../containers/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",

  /**
   * Customize webpack configuration for Storybook.
   *
   * This doesn't affect the Next.js application, only the Storybook compilation.
   *
   * @param config
   * @see https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project
   */
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,

          /**
           * Map Emotion 10 libraries to Emotion 11 libraries.
           *
           * Otherwise Storybook fails to compile with "Module not found: Error: Can't resolve '@emotion/styled/base'", etc.
           * It wasn't necessary to do this until we imported React component using "@emotion/styled".
           * This issue is probably caused because Storybook uses Emotion 10 while we have Emotion 11 used by the Next.js app.
           *
           * @see https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
           */
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
  babel: async (options) => {
    options.plugins.push(
      ...[
        [
          "@emotion/babel-plugin-jsx-pragmatic",
          {
            export: "jsx",
            import: "__cssprop",
            module: "@emotion/react",
          },
        ],
        [
          "@babel/plugin-transform-react-jsx",
          {
            pragma: "__cssprop",
          },
          "twin css prop",
        ],
      ]
    );

    options.plugins.push("babel-plugin-inline-react-svg");

    return options;
  },
};
