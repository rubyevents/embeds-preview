import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_EVENT_SLUGS, getBaseUrl } from './slugs.js';
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
export default meta;
export const Default = {
    render: args => html `
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
export const WithoutParticipants = {
    args: {
        'show-participants': false,
    },
    render: args => html `
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
export const LimitedAvatars = {
    args: {
        'max-avatars': 4,
    },
    render: args => html `
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
//# sourceMappingURL=event.stories.js.map