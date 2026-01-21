import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, b as FALLBACK_USER_SLUGS } from './slugs-BOXTUA_I.js';

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
const Default = {
    render: args => b `
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
const WithoutFooter = {
    args: {
        'show-footer': false,
    },
    render: args => b `
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

const __namedExportsOrder = ['Default', 'WithoutFooter'];

export { Default, WithoutFooter, __namedExportsOrder, meta as default };
