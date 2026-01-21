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
  './dist/stories/event-card.stories.js': () => import('./event-card.stories-DJq7pEey.js'),
  './dist/stories/event.stories.js': () => import('./event.stories-j2UFvtah.js'),
  './dist/stories/events.stories.js': () => import('./events.stories-Cwxk0QDn.js'),
  './dist/stories/index.stories.js': () => import('./index.stories-DTy5g0UI.js'),
  './dist/stories/introduction.stories.js': () => import('./introduction.stories-CUn6Y0hM.js'),
  './dist/stories/participants.stories.js': () => import('./participants.stories-Cfbq7YxV.js'),
  './dist/stories/passport.stories.js': () => import('./passport.stories-BCjj7e_j.js'),
  './dist/stories/profile.stories.js': () => import('./profile.stories-2z1Lrqhr.js'),
  './dist/stories/speaker.stories.js': () => import('./speaker.stories-4EJWtHNM.js'),
  './dist/stories/stickers.stories.js': () => import('./stickers.stories-Dcrf2fCa.js'),
  './dist/stories/topic.stories.js': () => import('./topic.stories-DvnaOwjh.js'),
  './storybook-static/dist/stories/event-card.stories.js': () => import('./event-card.stories-qSr8_3qN.js'),
  './storybook-static/dist/stories/event.stories.js': () => import('./event.stories-B10HWg9-.js'),
  './storybook-static/dist/stories/events.stories.js': () => import('./events.stories-DzDpmdtU.js'),
  './storybook-static/dist/stories/index.stories.js': () => import('./index.stories-DsYMwiWR.js'),
  './storybook-static/dist/stories/introduction.stories.js': () => import('./introduction.stories-ClE4mDzm.js'),
  './storybook-static/dist/stories/participants.stories.js': () => import('./participants.stories-cWoVPxtU.js'),
  './storybook-static/dist/stories/passport.stories.js': () => import('./passport.stories-BFky747n.js'),
  './storybook-static/dist/stories/profile.stories.js': () => import('./profile.stories-D4sWyHaT.js'),
  './storybook-static/dist/stories/speaker.stories.js': () => import('./speaker.stories-D8VA6fVb.js'),
  './storybook-static/dist/stories/stickers.stories.js': () => import('./stickers.stories-OIIPit1z.js'),
  './storybook-static/dist/stories/topic.stories.js': () => import('./topic.stories-4GjbOr1p.js')
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
