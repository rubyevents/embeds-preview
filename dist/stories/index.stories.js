import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_TALK_SLUGS, getBaseUrl } from './slugs.js';
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
export default meta;
export const Talk = {
    render: args => html `
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
export const TalkWithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => html `
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
export const CustomBaseUrl = {
    args: {
        'base-url': 'https://rubyevents.org',
    },
    render: args => html `
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
//# sourceMappingURL=index.stories.js.map