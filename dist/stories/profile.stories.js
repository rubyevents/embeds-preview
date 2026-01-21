import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_USER_SLUGS, getBaseUrl } from './slugs.js';
const meta = {
    title: 'Components/Profile',
    component: 'rubyevents-profile',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_USER_SLUGS,
            description: 'The slug of the profile to display',
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
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
export default meta;
export const Default = {
    render: args => html `
    <rubyevents-profile
      slug=${args.slug}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-profile>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-profile slug="marcoroth" show-footer></rubyevents-profile>`,
            },
        },
    },
};
export const WithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => html `
    <rubyevents-profile
      slug=${args.slug}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-profile>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-profile slug="marcoroth"></rubyevents-profile>`,
            },
        },
    },
};
//# sourceMappingURL=profile.stories.js.map