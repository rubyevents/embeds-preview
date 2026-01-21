import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, d as FALLBACK_TOPIC_SLUGS } from './slugs-W7dhRCvL.js';
import './state-CRAeqyPl.js';

const meta = {
    title: 'Components/Topic',
    component: 'rubyevents-topic',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_TOPIC_SLUGS,
            description: 'The slug of the topic to display',
        },
        limit: {
            control: 'number',
            description: 'Maximum number of talks to display',
        },
        'base-url': {
            control: 'text',
            description: 'Base URL for the RubyEvents API',
        },
        'show-footer': {
            control: 'boolean',
            description: 'Whether to show the "Powered by" footer',
        },
    },
    args: {
        slug: 'truffleruby',
        limit: 10,
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const Default = {
    render: args => b `
    <rubyevents-topic
      slug=${args.slug}
      limit=${args.limit}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-topic>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-topic slug="truffleruby" show-footer></rubyevents-topic>`,
            },
        },
    },
};
const WithMoreTalks = {
    args: {
        slug: 'ruby-on-rails',
        limit: 3,
    },
    render: args => b `
    <rubyevents-topic
      slug=${args.slug}
      limit=${args.limit}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-topic>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-topic slug="ruby-on-rails" limit="3" show-footer></rubyevents-topic>`,
            },
        },
    },
};
const WithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => b `
    <rubyevents-topic
      slug=${args.slug}
      limit=${args.limit}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-topic>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-topic slug="truffleruby"></rubyevents-topic>`,
            },
        },
    },
};

const __namedExportsOrder = ['Default', 'WithMoreTalks', 'WithoutFooter'];

export { Default, WithMoreTalks, WithoutFooter, __namedExportsOrder, meta as default };
