// API Client for RubyEvents Embed Components
const DEFAULT_BASE_URL = 'https://rubyevents.org';
export class ApiClient {
    constructor(baseUrl = DEFAULT_BASE_URL) {
        this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
    }
    async fetch(endpoint) {
        const url = `${this.baseUrl}/api/v1/embed${endpoint}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Not found');
            }
            throw new Error(`API error: ${response.status}`);
        }
        return response.json();
    }
    async getTalk(slug) {
        return this.fetch(`/talks/${encodeURIComponent(slug)}`);
    }
    async getSpeaker(slug) {
        return this.fetch(`/speakers/${encodeURIComponent(slug)}`);
    }
    async getProfile(slug) {
        return this.fetch(`/profiles/${encodeURIComponent(slug)}`);
    }
    async getEvents(filter) {
        const params = filter ? `?filter=${encodeURIComponent(filter)}` : '';
        return this.fetch(`/events${params}`);
    }
    async getEvent(slug) {
        return this.fetch(`/events/${encodeURIComponent(slug)}`);
    }
    async getParticipants(eventSlug) {
        return this.fetch(`/events/${encodeURIComponent(eventSlug)}/participants`);
    }
    async getStickers(userSlug) {
        return this.fetch(`/stickers/${encodeURIComponent(userSlug)}`);
    }
    async getStamps(userSlug) {
        return this.fetch(`/stamps/${encodeURIComponent(userSlug)}`);
    }
    async getTopic(slug) {
        return this.fetch(`/topics/${encodeURIComponent(slug)}`);
    }
}
// Singleton instance with default base URL
let defaultClient = null;
export function getApiClient(baseUrl) {
    if (baseUrl) {
        return new ApiClient(baseUrl);
    }
    if (!defaultClient) {
        defaultClient = new ApiClient();
    }
    return defaultClient;
}
//# sourceMappingURL=api.js.map