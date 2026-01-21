import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, F as FALLBACK_EVENT_SLUGS } from './slugs-BWy3PvLo.js';
import './state-CRAeqyPl.js';

const meta = {
    title: 'Components/Event Card',
    component: 'rubyevents-event-card',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_EVENT_SLUGS,
            description: 'Event slug to display',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size variant of the card',
        },
        'show-kind': {
            control: 'boolean',
            description: 'Whether to show the event kind badge',
        },
        'base-url': {
            control: 'text',
            description: 'Base URL for the RubyEvents API',
        },
    },
    args: {
        slug: 'sfruby-2025',
        size: 'md',
        'show-kind': true,
        'base-url': getBaseUrl(),
    },
};
const SmallSize = {
    args: {
        size: 'sm',
    },
    render: args => b `
    <rubyevents-event-card
      slug=${args.slug}
      size=${args.size}
      ?show-kind=${args['show-kind']}
      base-url=${args['base-url']}
    ></rubyevents-event-card>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-event-card slug="sfruby-2025" size="sm"></rubyevents-event-card>`,
            },
        },
    },
};
const LargeSize = {
    args: {
        size: 'lg',
    },
    render: args => b `
    <rubyevents-event-card
      slug=${args.slug}
      size=${args.size}
      ?show-kind=${args['show-kind']}
      base-url=${args['base-url']}
    ></rubyevents-event-card>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-event-card slug="sfruby-2025" size="lg"></rubyevents-event-card>`,
            },
        },
    },
};
const CardGrid = {
    render: args => b `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
      ${FALLBACK_EVENT_SLUGS.slice(0, 3).map((slug) => b `
          <rubyevents-event-card
            slug=${slug}
            base-url=${args['base-url']}
          ></rubyevents-event-card>
        `)}
    </div>
  `,
    parameters: {
        docs: {
            source: {
                code: `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
  <rubyevents-event-card slug="sfruby-2025"></rubyevents-event-card>
  <rubyevents-event-card slug="rails-world-2024"></rubyevents-event-card>
  <rubyevents-event-card slug="railsconf-2024"></rubyevents-event-card>
</div>`,
            },
        },
    },
};

export { CardGrid, LargeSize, SmallSize, meta as default };
