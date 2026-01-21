import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, b as FALLBACK_USER_SLUGS } from './slugs-BWy3PvLo.js';
import './state-CRAeqyPl.js';

const meta = {
    title: 'Components/Passport',
    component: 'rubyevents-passport',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_USER_SLUGS,
            description: 'User slug to display stamps for',
        },
        tab: {
            control: 'select',
            options: ['all', 'countries', 'events', 'achievements'],
            description: 'Active tab to display',
        },
        'show-sections': {
            control: 'boolean',
            description: 'Whether to show section headers in "all" view',
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
        slug: 'marcoroth',
        tab: 'all',
        'show-sections': true,
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const Default = {
    render: args => b `
    <rubyevents-passport
      slug=${args.slug}
      tab=${args.tab}
      ?show-sections=${args['show-sections']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-passport>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-passport slug="marcoroth" show-footer></rubyevents-passport>`,
            },
        },
    },
};
const CountriesTab = {
    args: {
        tab: 'countries',
    },
    render: args => b `
    <rubyevents-passport
      slug=${args.slug}
      tab=${args.tab}
      ?show-sections=${args['show-sections']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-passport>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-passport slug="marcoroth" tab="countries" show-footer></rubyevents-passport>`,
            },
        },
    },
};
const EventsTab = {
    args: {
        tab: 'events',
    },
    render: args => b `
    <rubyevents-passport
      slug=${args.slug}
      tab=${args.tab}
      ?show-sections=${args['show-sections']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-passport>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-passport slug="marcoroth" tab="events" show-footer></rubyevents-passport>`,
            },
        },
    },
};
const AchievementsTab = {
    args: {
        tab: 'achievements',
    },
    render: args => b `
    <rubyevents-passport
      slug=${args.slug}
      tab=${args.tab}
      ?show-sections=${args['show-sections']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-passport>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-passport slug="marcoroth" tab="achievements" show-footer></rubyevents-passport>`,
            },
        },
    },
};
const WithoutSections = {
    args: {
        'show-sections': false,
    },
    render: args => b `
    <rubyevents-passport
      slug=${args.slug}
      tab=${args.tab}
      ?show-sections=${args['show-sections']}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-passport>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-passport slug="marcoroth" show-footer></rubyevents-passport>`,
            },
        },
    },
};

export { AchievementsTab, CountriesTab, Default, EventsTab, WithoutSections, meta as default };
