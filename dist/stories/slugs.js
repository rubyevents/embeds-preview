// Dynamic slug fetching for Storybook controls
// Automatically use rubyevents.org when not on localhost
export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return 'http://localhost:3000';
        }
    }
    return 'https://www.rubyevents.org';
}
const BASE_URL = getBaseUrl();
async function fetchSlugs(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/embed/${endpoint}`);
        if (!response.ok) {
            console.warn(`Failed to fetch ${endpoint} slugs:`, response.status);
            return [];
        }
        const data = await response.json();
        return data.slugs || [];
    }
    catch (error) {
        console.warn(`Failed to fetch ${endpoint} slugs:`, error);
        return [];
    }
}
// Cache for loaded slugs
let talkSlugs = null;
let eventSlugs = null;
let speakerSlugs = null;
let userSlugs = null;
export async function getTalkSlugs() {
    if (talkSlugs === null) {
        talkSlugs = await fetchSlugs('talks');
    }
    return talkSlugs;
}
export async function getEventSlugs() {
    if (eventSlugs === null) {
        eventSlugs = await fetchSlugs('events?slugs_only=true');
    }
    return eventSlugs;
}
export async function getSpeakerSlugs() {
    if (speakerSlugs === null) {
        speakerSlugs = await fetchSlugs('speakers');
    }
    return speakerSlugs;
}
export async function getUserSlugs() {
    if (userSlugs === null) {
        userSlugs = await fetchSlugs('profiles');
    }
    return userSlugs;
}
// Fallback slugs in case API is not available
export const FALLBACK_TALK_SLUGS = [
    'keynote-rubyllm',
    'opening-keynote-rails-world-2024',
];
export const FALLBACK_EVENT_SLUGS = [
    'sfruby-2025',
    'rails-world-2024',
    'railsconf-2024',
];
export const FALLBACK_SPEAKER_SLUGS = [
    'tenderlove',
    'matz',
];
export const FALLBACK_USER_SLUGS = [
    'marcoroth',
    'chaelcodes',
];
export const FALLBACK_TOPIC_SLUGS = [
    'truffleruby',
    'ruby-on-rails',
    'hotwire',
    'testing',
];
// Initialize and export promises for preloading
export const slugsPromise = Promise.all([
    getTalkSlugs(),
    getEventSlugs(),
    getSpeakerSlugs(),
    getUserSlugs(),
]);
//# sourceMappingURL=slugs.js.map