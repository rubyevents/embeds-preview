import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, a as FALLBACK_TALK_SLUGS } from './slugs-BOXTUA_I.js';

const meta = {
    title: 'Components/Talk',
    component: 'rubyevents-talk',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_TALK_SLUGS,
            description: 'The slug of the talk to display',
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
        slug: 'keynote-rubyllm',
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const Talk = {
    render: args => b `
    <rubyevents-talk
      slug=${args.slug}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-talk>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Add the `show-footer` attribute to display the "Powered by RubyEvents" footer.',
            },
            source: {
                code: `<rubyevents-talk slug="keynote-rubyllm" show-footer></rubyevents-talk>`,
            },
        },
    },
};
const TalkWithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => b `
    <rubyevents-talk
      slug=${args.slug}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-talk>
  `,
    parameters: {
        docs: {
            description: {
                story: 'The footer is hidden by default. This is the default appearance.',
            },
            source: {
                code: `<rubyevents-talk slug="keynote-rubyllm"></rubyevents-talk>`,
            },
        },
    },
};
const CustomBaseUrl = {
    args: {
        'base-url': 'https://rubyevents.org',
    },
    render: args => b `
    <rubyevents-talk
      slug=${args.slug}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-talk>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-talk
  slug="keynote-rubyllm"
  base-url="https://rubyevents.org"
></rubyevents-talk>`,
            },
        },
    },
};

const __namedExportsOrder = ['Talk', 'TalkWithoutFooter', 'CustomBaseUrl'];

export { CustomBaseUrl, Talk, TalkWithoutFooter, __namedExportsOrder, meta as default };
