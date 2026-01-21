import { html } from 'lit';
import '../src/ruby-events.js';
import { FALLBACK_USER_SLUGS, getBaseUrl } from './slugs.js';
const meta = {
    title: 'Components/Stickers',
    component: 'rubyevents-stickers',
    argTypes: {
        slug: {
            control: 'select',
            options: FALLBACK_USER_SLUGS,
            description: 'User slug to display stickers for',
        },
        'min-size': {
            control: 'number',
            description: 'Minimum sticker size in pixels',
        },
        'max-size': {
            control: 'number',
            description: 'Maximum sticker size in pixels',
        },
        seed: {
            control: 'number',
            description: 'Random seed for consistent sticker placement',
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
        'min-size': 60,
        'max-size': 100,
        seed: 0,
        'base-url': getBaseUrl(),
        'show-footer': true,
    },
};
export default meta;
export const Default = {
    render: args => html `
    <rubyevents-stickers
      slug=${args.slug}
      min-size=${args['min-size']}
      max-size=${args['max-size']}
      seed=${args.seed}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-stickers>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-stickers slug="marcoroth" show-footer></rubyevents-stickers>`,
            },
        },
    },
};
export const LargeStickers = {
    args: {
        'min-size': 80,
        'max-size': 140,
    },
    render: args => html `
    <rubyevents-stickers
      slug=${args.slug}
      min-size=${args['min-size']}
      max-size=${args['max-size']}
      seed=${args.seed}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-stickers>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-stickers slug="marcoroth" min-size="80" max-size="140" show-footer></rubyevents-stickers>`,
            },
        },
    },
};
export const SmallStickers = {
    args: {
        'min-size': 40,
        'max-size': 70,
    },
    render: args => html `
    <rubyevents-stickers
      slug=${args.slug}
      min-size=${args['min-size']}
      max-size=${args['max-size']}
      seed=${args.seed}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-stickers>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-stickers slug="marcoroth" min-size="40" max-size="70" show-footer></rubyevents-stickers>`,
            },
        },
    },
};
export const FixedSeed = {
    args: {
        seed: 12345,
    },
    render: args => html `
    <rubyevents-stickers
      slug=${args.slug}
      min-size=${args['min-size']}
      max-size=${args['max-size']}
      seed=${args.seed}
      base-url=${args['base-url']}
      .showFooter=${args['show-footer']}
    ></rubyevents-stickers>
  `,
    parameters: {
        docs: {
            source: {
                code: `<rubyevents-stickers slug="marcoroth" seed="12345" show-footer></rubyevents-stickers>`,
            },
        },
    },
};
//# sourceMappingURL=stickers.stories.js.map