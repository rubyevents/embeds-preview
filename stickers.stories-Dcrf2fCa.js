import { b } from './lit-element-xPuJNNul.js';
import { g as getBaseUrl, b as FALLBACK_USER_SLUGS } from './slugs-W7dhRCvL.js';
import './state-CRAeqyPl.js';

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
const Default = {
    render: args => b `
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
const LargeStickers = {
    args: {
        'min-size': 80,
        'max-size': 140,
    },
    render: args => b `
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
const SmallStickers = {
    args: {
        'min-size': 40,
        'max-size': 70,
    },
    render: args => b `
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
const FixedSeed = {
    args: {
        seed: 12345,
    },
    render: args => b `
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

const __namedExportsOrder = ['Default', 'LargeStickers', 'SmallStickers', 'FixedSeed'];

export { Default, FixedSeed, LargeStickers, SmallStickers, __namedExportsOrder, meta as default };
