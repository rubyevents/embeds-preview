import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_SPEAKER_SLUGS, getBaseUrl } from './slugs.js';
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
export default meta;
export const WithTalks = {
    render: args => html `
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
export const WithEvents = {
    args: {
        tab: 'events',
    },
    render: args => html `
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
export const WithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => html `
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
//# sourceMappingURL=speaker.stories.js.map