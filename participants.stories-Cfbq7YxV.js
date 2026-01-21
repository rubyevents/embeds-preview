import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, F as FALLBACK_EVENT_SLUGS } from './slugs-W7dhRCvL.js';
import './state-CRAeqyPl.js';

const meta = {
    title: 'Components/Participants',
    component: 'rubyevents-participants',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_EVENT_SLUGS,
            description: 'The slug of the event to display participants for',
        },
        filter: {
            control: 'select',
            options: ['all', 'keynote_speakers', 'speakers', 'attendees'],
            description: 'Filter to show specific participant types',
        },
        'show-tabs': {
            control: 'boolean',
            description: 'Whether to show tabs for filtering',
        },
        compact: {
            control: 'boolean',
            description: 'Compact mode with small avatars, no names, no groups',
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
        filter: 'all',
        'show-tabs': true,
        compact: false,
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const AllParticipants = {
    render: args => b `
    <rubyevents-participants
      slug=${args.slug}
      filter=${args.filter}
      ?show-tabs=${args['show-tabs']}
      ?compact=${args.compact}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-participants>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-participants slug="sfruby-2025" show-footer></rubyevents-participants>`,
            },
        },
    },
};
const SpeakersOnly = {
    args: {
        filter: 'speakers',
    },
    render: args => b `
    <rubyevents-participants
      slug=${args.slug}
      filter=${args.filter}
      ?show-tabs=${args['show-tabs']}
      ?compact=${args.compact}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-participants>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-participants slug="sfruby-2025" filter="speakers" show-footer></rubyevents-participants>`,
            },
        },
    },
};
const KeynoteSpeakers = {
    args: {
        filter: 'keynote_speakers',
    },
    render: args => b `
    <rubyevents-participants
      slug=${args.slug}
      filter=${args.filter}
      ?show-tabs=${args['show-tabs']}
      ?compact=${args.compact}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-participants>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-participants slug="sfruby-2025" filter="keynote_speakers" show-footer></rubyevents-participants>`,
            },
        },
    },
};
const AttendeesOnly = {
    args: {
        filter: 'attendees',
    },
    render: args => b `
    <rubyevents-participants
      slug=${args.slug}
      filter=${args.filter}
      ?show-tabs=${args['show-tabs']}
      ?compact=${args.compact}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-participants>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-participants slug="sfruby-2025" filter="attendees" show-footer></rubyevents-participants>`,
            },
        },
    },
};
const WithoutTabs = {
    args: {
        'show-tabs': false,
    },
    render: args => b `
    <rubyevents-participants
      slug=${args.slug}
      filter=${args.filter}
      ?show-tabs=${args['show-tabs']}
      ?compact=${args.compact}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-participants>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-participants slug="sfruby-2025" show-footer></rubyevents-participants>`,
            },
        },
    },
};
const Compact = {
    args: {
        compact: true,
    },
    render: args => b `
    <rubyevents-participants
      slug=${args.slug}
      filter=${args.filter}
      ?show-tabs=${args['show-tabs']}
      ?compact=${args.compact}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-participants>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-participants slug="sfruby-2025" compact show-footer></rubyevents-participants>`,
            },
        },
    },
};

const __namedExportsOrder = ['AllParticipants', 'SpeakersOnly', 'KeynoteSpeakers', 'AttendeesOnly', 'WithoutTabs', 'Compact'];

export { AllParticipants, AttendeesOnly, Compact, KeynoteSpeakers, SpeakersOnly, WithoutTabs, __namedExportsOrder, meta as default };
