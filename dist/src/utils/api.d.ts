export declare class ApiClient {
    private baseUrl;
    constructor(baseUrl?: string);
    private fetch;
    getTalk(slug: string): Promise<import("../types/api.js").Talk>;
    getSpeaker(slug: string): Promise<import("../types/api.js").SpeakerDetail>;
    getProfile(slug: string): Promise<import("../types/api.js").Profile>;
    getEvents(filter?: string): Promise<import("../types/api.js").EventsResponse>;
    getEvent(slug: string): Promise<import("../types/api.js").EventDetail>;
    getParticipants(eventSlug: string): Promise<import("../types/api.js").ParticipantsResponse>;
    getStickers(userSlug: string): Promise<import("../types/api.js").StickersResponse>;
    getStamps(userSlug: string): Promise<import("../types/api.js").StampsResponse>;
    getTopic(slug: string): Promise<import("../types/api.js").TopicResponse>;
}
export declare function getApiClient(baseUrl?: string): ApiClient;
