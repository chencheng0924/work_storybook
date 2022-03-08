module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    {
      name:"@storybook/addon-essentials",
      options:{
        backgrounds: true,
      }
    }
  ],
};
