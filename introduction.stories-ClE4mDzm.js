import { b } from './lit-element-xPuJNNul.js';

const meta = {
    title: 'Introduction',
};
const Demo = {
    render: () => b `
    <style>
      .demo-frame {
        width: 100%;
        height: calc(100vh - 50px);
        border: none;
        margin: -1rem;
        width: calc(100% + 2rem);
      }
    </style>
    <iframe class="demo-frame" src="./demo.html" title="RubyEvents Embeds Demo"></iframe>
  `,
    parameters: {
        docs: {
            source: {
                code: 'See demo/index.html for full source',
            },
        },
    },
};

export { Demo, meta as default };
