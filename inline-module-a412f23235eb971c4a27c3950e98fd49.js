import './sb-preview/runtime.js';

const channel = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__.createChannel({ page: 'preview' });
__STORYBOOK_MODULE_PREVIEW_API__.addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;

const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__.createChannel({ url: SERVER_CHANNEL_URL });
  __STORYBOOK_MODULE_PREVIEW_API__.addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}

const importers = {
  './dist/stories/event-card.stories.js': () => import('./event-card.stories-B0iPtzfH.js'),
  './dist/stories/event.stories.js': () => import('./event.stories-CyAMAS2h.js'),
  './dist/stories/events.stories.js': () => import('./events.stories-COH_0tL7.js'),
  './dist/stories/index.stories.js': () => import('./index.stories-UhYecaMK.js'),
  './dist/stories/introduction.stories.js': () => import('./introduction.stories-CUn6Y0hM.js'),
  './dist/stories/participants.stories.js': () => import('./participants.stories-Bm-RDTyU.js'),
  './dist/stories/passport.stories.js': () => import('./passport.stories-CtIji6gf.js'),
  './dist/stories/profile.stories.js': () => import('./profile.stories-CSavIxOD.js'),
  './dist/stories/speaker.stories.js': () => import('./speaker.stories-C5FvBqR-.js'),
  './dist/stories/stickers.stories.js': () => import('./stickers.stories-D-rRJGux.js'),
  './dist/stories/topic.stories.js': () => import('./topic.stories-CQ2SaTl3.js')
};

function importFn(path) {
  return importers[path]();
}

const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    import('./entry-preview-WS6LzCR5.js'),
    import('./entry-preview-docs-vuYRWjVk.js'),
    import('./preview-UQw5zITQ.js'),
    import('./preview-BbsZ1HGL.js'),
    import('./preview-BlJG9B2P.js'),
    import('./preview-Dhf5Fisp.js'),
    import('./preview-BYsVd6Zb.js'),
    import('./preview-CDagOaLU.js'),
    import('./preview-BCJYMtXk.js')
  ]);
  return __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs(configs);
};

window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb();

window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new __STORYBOOK_MODULE_PREVIEW_API__.ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });
