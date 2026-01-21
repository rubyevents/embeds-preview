import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl } from './slugs-W7dhRCvL.js';
import './state-CRAeqyPl.js';

const meta = {
    title: 'Components/Events',
    component: 'rubyevents-events',
    argTypes: {
        filter: {
            control: 'select',
            options: ['upcoming', 'past', 'all'],
            description: 'Filter events by type',
        },
        limit: {
            control: 'number',
            description: 'Maximum number of events to display',
        },
        'show-filter': {
            control: 'boolean',
            description: 'Whether to show the filter dropdown',
        },
        title: {
            control: 'text',
            description: 'Custom title for the events list',
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
        filter: 'upcoming',
        limit: 10,
        'show-filter': false,
        title: '',
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
const UpcomingEvents = {
    render: args => b `
    <rubyevents-events
      filter=${args.filter}
      limit=${args.limit}
      ?show-filter=${args['show-filter']}
      title=${args.title}
      base-url=${args['base-url']}
      ?show-footer=${args['show-footer']}
    ></rubyevents-events>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-events filter="upcoming"></rubyevents-events>`,
            },
        },
    },
};
const PastEvents = {
    args: {
        filter: 'past',
    },
    render: args => b `
    <rubyevents-events
      filter=${args.filter}
      limit=${args.limit}
      ?show-filter=${args['show-filter']}
      title=${args.title}
      base-url=${args['base-url']}
      ?show-footer=${args['show-footer']}
    ></rubyevents-events>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-events filter="past"></rubyevents-events>`,
            },
        },
    },
};
const AllEvents = {
    args: {
        filter: 'all',
    },
    render: args => b `
    <rubyevents-events
      filter=${args.filter}
      limit=${args.limit}
      ?show-filter=${args['show-filter']}
      title=${args.title}
      base-url=${args['base-url']}
      ?show-footer=${args['show-footer']}
    ></rubyevents-events>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-events filter="all"></rubyevents-events>`,
            },
        },
    },
};
const WithFilterDropdown = {
    args: {
        'show-filter': true,
    },
    render: args => b `
    <rubyevents-events
      filter=${args.filter}
      limit=${args.limit}
      ?show-filter=${args['show-filter']}
      title=${args.title}
      base-url=${args['base-url']}
      ?show-footer=${args['show-footer']}
    ></rubyevents-events>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-events
  filter="upcoming"
  show-filter
></rubyevents-events>`,
            },
        },
    },
};
const CustomTitle = {
    args: {
        title: 'Featured Ruby Conferences',
        limit: 5,
    },
    render: args => b `
    <rubyevents-events
      filter=${args.filter}
      limit=${args.limit}
      ?show-filter=${args['show-filter']}
      title=${args.title}
      base-url=${args['base-url']}
      ?show-footer=${args['show-footer']}
    ></rubyevents-events>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-events
  title="Featured Ruby Conferences"
  limit="5"
></rubyevents-events>`,
            },
        },
    },
};
const LimitedList = {
    args: {
        filter: 'all',
        limit: 3,
    },
    render: args => b `
    <rubyevents-events
      filter=${args.filter}
      limit=${args.limit}
      ?show-filter=${args['show-filter']}
      title=${args.title}
      base-url=${args['base-url']}
      ?show-footer=${args['show-footer']}
    ></rubyevents-events>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-events
  filter="all"
  limit="3"
></rubyevents-events>`,
            },
        },
    },
};

const __namedExportsOrder = ['UpcomingEvents', 'PastEvents', 'AllEvents', 'WithFilterDropdown', 'CustomTitle', 'LimitedList'];

export { AllEvents, CustomTitle, LimitedList, PastEvents, UpcomingEvents, WithFilterDropdown, __namedExportsOrder, meta as default };
