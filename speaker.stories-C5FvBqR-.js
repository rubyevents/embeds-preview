import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, c as FALLBACK_SPEAKER_SLUGS } from './slugs-BOXTUA_I.js';

const meta = {
    title: 'Components/Speaker',
    component: 'rubyevents-speaker',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_SPEAKER_SLUGS,
            description: 'The slug of the speaker to display',
        },
        tab: {
            control: 'select',
            options: ['talks', 'events'],
            description: 'The active tab to display',
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
        slug: 'tenderlove',
        tab: 'talks',
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const WithTalks = {
    render: args => b `
    <rubyevents-speaker
      slug=${args.slug}
      tab=${args.tab}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-speaker>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-speaker slug="tenderlove" show-footer></rubyevents-speaker>`,
            },
        },
    },
};
const WithEvents = {
    args: {
        tab: 'events',
    },
    render: args => b `
    <rubyevents-speaker
      slug=${args.slug}
      tab=${args.tab}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-speaker>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-speaker slug="tenderlove" tab="events" show-footer></rubyevents-speaker>`,
            },
        },
    },
};
const WithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => b `
    <rubyevents-speaker
      slug=${args.slug}
      tab=${args.tab}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-speaker>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-speaker slug="tenderlove"></rubyevents-speaker>`,
            },
        },
    },
};

const __namedExportsOrder = ['WithTalks', 'WithEvents', 'WithoutFooter'];

export { WithEvents, WithTalks, WithoutFooter, __namedExportsOrder, meta as default };
