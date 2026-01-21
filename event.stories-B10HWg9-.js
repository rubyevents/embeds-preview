import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, F as FALLBACK_EVENT_SLUGS } from './slugs-BWy3PvLo.js';
import './state-CRAeqyPl.js';

const meta = {
    title: 'Components/Event',
    component: 'rubyevents-event',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_EVENT_SLUGS,
            description: 'Event slug to display',
        },
        'show-participants': {
            control: 'boolean',
            description: 'Whether to show participant avatars',
        },
        'max-avatars': {
            control: 'number',
            description: 'Maximum number of avatars to show per participant category',
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
        slug: 'sfruby-2025',
        'show-participants': true,
        'max-avatars': 8,
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const Default = {
    render: args => b `
    <rubyevents-event
      slug=${args.slug}
      ?show-participants=${args['show-participants']}
      max-avatars=${args['max-avatars']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-event>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-event slug="sfruby-2025" show-footer></rubyevents-event>`,
            },
        },
    },
};
const WithoutParticipants = {
    args: {
        'show-participants': false,
    },
    render: args => b `
    <rubyevents-event
      slug=${args.slug}
      ?show-participants=${args['show-participants']}
      max-avatars=${args['max-avatars']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-event>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-event slug="sfruby-2025"></rubyevents-event>`,
            },
        },
    },
};
const LimitedAvatars = {
    args: {
        'max-avatars': 4,
    },
    render: args => b `
    <rubyevents-event
      slug=${args.slug}
      ?show-participants=${args['show-participants']}
      max-avatars=${args['max-avatars']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-event>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-event slug="sfruby-2025" max-avatars="4" show-footer></rubyevents-event>`,
            },
        },
    },
};

export { Default, LimitedAvatars, WithoutParticipants, meta as default };
