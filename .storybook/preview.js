import '../src/assets/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      expanded: true
    },
  },
  backgrounds: {
    values:[
      { name: 'story-red', value: 'pink' },
      { name: 'story-green', value: 'olive' },
    ]
  }
};
