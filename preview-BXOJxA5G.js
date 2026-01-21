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
};

export { parameters };
