export interface Speaker {
    name: string;
    slug: string;
    avatar_url: string;
}
export interface SpeakerDetail extends Speaker {
    bio: string;
    url: string;
    twitter: string | null;
    github: string | null;
    website: string | null;
    talks_count: number;
    events_count: number;
    talks: TalkSummary[];
    events: EventSummary[];
}
export interface TalkSummary {
    title: string;
    slug: string;
    thumbnail_url: string;
    event_name: string;
    date: string;
}
export interface EventSummary {
    name: string;
    slug: string;
    date: string;
    location: string;
    avatar_url: string | null;
    featured_background: string | null;
}
export interface EventInfo {
    name: string;
    slug: string;
    location: string;
}
export interface Talk {
    slug: string;
    title: string;
    description: string;
    thumbnail_url: string;
    duration_in_seconds: number;
    video_provider: string;
    date: string;
    url: string;
    speakers: Speaker[];
    event: EventInfo;
}
export interface Event {
    name: string;
    slug: string;
    location: string;
    start_date: string;
    end_date: string;
    url: string;
    avatar_url: string | null;
    banner_url: string | null;
    featured_background: string | null;
    featured_color: string | null;
}
export interface EventDetail extends Event {
    description: string | null;
    city: string | null;
    country_code: string | null;
    kind: string;
    website: string | null;
    banner_url: string | null;
    talks_count: number;
    speakers_count: number;
    series: {
        name: string;
        slug: string;
    } | null;
    participants: {
        keynote_speakers: Participant[];
        speakers: Participant[];
        attendees: Participant[];
    };
    counts: {
        keynote_speakers: number;
        speakers: number;
        attendees: number;
        total: number;
    };
}
export interface EventsResponse {
    events: Event[];
    pagination: Pagination;
}
export interface Pagination {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
}
export interface Profile {
    name: string;
    slug: string;
    bio: string;
    avatar_url: string;
    url: string;
    location: string | null;
    twitter: string | null;
    github: string | null;
    website: string | null;
    upcoming_events_count: number;
    upcoming_events: UpcomingEvent[];
}
export interface UpcomingEvent {
    name: string;
    slug: string;
    date: string;
    end_date: string | null;
    location: string | null;
    attended_as: 'speaker' | 'keynote_speaker' | 'visitor';
    avatar_url: string | null;
    featured_background: string | null;
}
export interface Participant {
    name: string;
    slug: string;
    avatar_url: string;
}
export interface ParticipantsResponse {
    event: {
        name: string;
        slug: string;
        url: string;
    };
    participants: {
        speakers: Participant[];
        keynote_speakers: Participant[];
        attendees: Participant[];
    };
    counts: {
        speakers: number;
        keynote_speakers: number;
        attendees: number;
        total: number;
    };
}
export interface Sticker {
    code: string;
    name: string;
    image_url: string | null;
    event: {
        name: string;
        slug: string;
    } | null;
}
export interface StickersResponse {
    user: {
        name: string;
        slug: string;
        url: string;
    };
    stickers: Sticker[];
    count: number;
}
export interface Stamp {
    code: string;
    name: string;
    image_url: string | null;
    has_country: boolean;
    has_event: boolean;
    country: {
        name: string;
        code: string;
    } | null;
    event: {
        name: string;
        slug: string;
    } | null;
}
export interface StampsResponse {
    user: {
        name: string;
        slug: string;
        url: string;
    };
    stamps: Stamp[];
    count: number;
    grouped: {
        countries: Stamp[];
        events: Stamp[];
        achievements: Stamp[];
    };
}
export interface TopicTalk {
    title: string;
    slug: string;
    thumbnail_url: string;
    duration_in_seconds: number;
    date: string;
    url: string;
    speakers: Speaker[];
    event: {
        name: string;
        slug: string;
    } | null;
}
export interface TopicResponse {
    name: string;
    slug: string;
    description: string | null;
    url: string;
    talks_count: number;
    talks: TopicTalk[];
}
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export interface ComponentState<T> {
    state: LoadingState;
    data: T | null;
    error: string | null;
}
