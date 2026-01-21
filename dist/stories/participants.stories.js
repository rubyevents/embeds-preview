import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_EVENT_SLUGS, getBaseUrl } from './slugs.js';
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
export default meta;
export const AllParticipants = {
    render: args => html `
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
export const SpeakersOnly = {
    args: {
        filter: 'speakers',
    },
    render: args => html `
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
export const KeynoteSpeakers = {
    args: {
        filter: 'keynote_speakers',
    },
    render: args => html `
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
export const AttendeesOnly = {
    args: {
        filter: 'attendees',
    },
    render: args => html `
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
export const WithoutTabs = {
    args: {
        'show-tabs': false,
    },
    render: args => html `
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
export const Compact = {
    args: {
        compact: true,
    },
    render: args => html `
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
//# sourceMappingURL=participants.stories.js.map