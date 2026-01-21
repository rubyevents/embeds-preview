const parameters = {
  docs: {
    source: {
      language: 'html',
      format: true,
      type: 'code',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Components'],
    },
  },
};

export { parameters };
