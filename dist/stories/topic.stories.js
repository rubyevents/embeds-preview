import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_TOPIC_SLUGS, getBaseUrl } from './slugs.js';
const meta = {
    title: 'Components/Topic',
    component: 'rubyevents-topic',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_TOPIC_SLUGS,
            description: 'The slug of the topic to display',
        },
        limit: {
            control: 'number',
            description: 'Maximum number of talks to display',
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
        slug: 'truffleruby',
        limit: 10,
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
export default meta;
export const Default = {
    render: args => html `
    <rubyevents-topic
      slug=${args.slug}
      limit=${args.limit}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-topic>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-topic slug="truffleruby" show-footer></rubyevents-topic>`,
            },
        },
    },
};
export const WithMoreTalks = {
    args: {
        slug: 'ruby-on-rails',
        limit: 3,
    },
    render: args => html `
    <rubyevents-topic
      slug=${args.slug}
      limit=${args.limit}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-topic>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-topic slug="ruby-on-rails" limit="3" show-footer></rubyevents-topic>`,
            },
        },
    },
};
export const WithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => html `
    <rubyevents-topic
      slug=${args.slug}
      limit=${args.limit}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-topic>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-topic slug="truffleruby"></rubyevents-topic>`,
            },
        },
    },
};
//# sourceMappingURL=topic.stories.js.map