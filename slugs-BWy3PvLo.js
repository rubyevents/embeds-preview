import { _ as __decorate, n, r, t } from './state-CRAeqyPl.js';
import { i, a as i$1, b } from './lit-element-xPuJNNul.js';

// API Client for RubyEvents Embed Components
const DEFAULT_BASE_URL = 'https://rubyevents.org';
class ApiClient {
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
function getApiClient(baseUrl) {
    if (baseUrl) {
        return new ApiClient(baseUrl);
    }
    if (!defaultClient) {
        defaultClient = new ApiClient();
    }
    return defaultClient;
}

const baseStyles = i `
  :host {
    --rubyevents-primary-color: var(--rubyevents-primary, #dc143c);
    --rubyevents-secondary-color: var(--rubyevents-secondary, #7a4ec2);
    --rubyevents-text-color: var(--rubyevents-text, #261b23);
    --rubyevents-text-muted: var(--rubyevents-muted, #6b7280);
    --rubyevents-background: var(--rubyevents-bg, #ffffff);
    --rubyevents-background-alt: var(--rubyevents-bg-alt, #f8f9fa);
    --rubyevents-border-color: var(--rubyevents-border, #e5e7eb);
    --rubyevents-border-radius: var(--rubyevents-radius, 8px);
    --rubyevents-font-family: var(
      --rubyevents-font,
      Inter,
      system-ui,
      -apple-system,
      sans-serif
    );

    display: block;
    font-family: var(--rubyevents-font-family);
    color: var(--rubyevents-text-color);
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: var(--rubyevents-primary-color);
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
const cardStyles = i `
  .card {
    background: var(--rubyevents-background);
    border: 1px solid var(--rubyevents-border-color);
    border-radius: var(--rubyevents-border-radius);
    overflow: hidden;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .card-subtitle {
    margin: 0;
    font-size: 0.875rem;
    color: var(--rubyevents-text-muted);
  }
`;
const thumbnailStyles = i `
  .thumbnail {
    position: relative;
    aspect-ratio: 16 / 9;
    background: var(--rubyevents-background-alt);
    overflow: hidden;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
  }

  .duration {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.125rem 0.375rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.75rem;
    border-radius: 4px;
  }
`;
const avatarStyles = i `
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    background: var(--rubyevents-background-alt);
  }

  .avatar-sm {
    width: 2rem;
    height: 2rem;
  }

  .avatar-lg {
    width: 4rem;
    height: 4rem;
  }

  .avatar-xl {
    width: 6rem;
    height: 6rem;
  }

  .avatar-group {
    display: flex;
    flex-direction: row;
  }

  .avatar-group .avatar {
    margin-left: -0.5rem;
    border: 2px solid var(--rubyevents-background);
  }

  .avatar-group .avatar:first-child {
    margin-left: 0;
  }
`;
const badgeStyles = i `
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    background: var(--rubyevents-background-alt);
    color: var(--rubyevents-text-muted);
  }

  .badge-primary {
    background: var(--rubyevents-primary-color);
    color: white;
  }

  .badge-secondary {
    background: var(--rubyevents-secondary-color);
    color: white;
  }
`;
const listStyles = i `
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--rubyevents-background);
    border: 1px solid var(--rubyevents-border-color);
    border-radius: var(--rubyevents-border-radius);
    transition: background-color 0.15s ease;
  }

  .list-item:hover {
    background: var(--rubyevents-background-alt);
  }

  .list-item-content {
    flex: 1;
    min-width: 0;
  }

  .list-item-title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-item-subtitle {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--rubyevents-text-muted);
  }
`;
const tabStyles = i `
  .tabs {
    display: flex;
    gap: 0.25rem;
    border-bottom: 1px solid var(--rubyevents-border-color);
    margin-bottom: 1rem;
  }

  .tab {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--rubyevents-text-muted);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .tab:hover {
    color: var(--rubyevents-text-color);
  }

  .tab.active {
    color: var(--rubyevents-primary-color);
    border-bottom-color: var(--rubyevents-primary-color);
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }
`;
const loadingStyles = i `
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: var(--rubyevents-text-muted);
  }

  .loading-spinner {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid var(--rubyevents-border-color);
    border-top-color: var(--rubyevents-primary-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .skeleton {
    background: linear-gradient(
      90deg,
      var(--rubyevents-background-alt) 25%,
      var(--rubyevents-border-color) 50%,
      var(--rubyevents-background-alt) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .skeleton-text {
    height: 1rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-text:last-child {
    width: 60%;
  }

  .skeleton-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .skeleton-thumbnail {
    aspect-ratio: 16 / 9;
  }
`;
const errorStyles = i `
  .error {
    padding: 1rem;
    text-align: center;
    color: var(--rubyevents-text-muted);
  }

  .error-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .error-message {
    font-size: 0.875rem;
  }
`;
const gridStyles = i `
  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    .grid-2,
    .grid-3 {
      grid-template-columns: 1fr;
    }
  }
`;
const utilityStyles = i `
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-xs {
    font-size: 0.75rem;
  }

  .text-muted {
    color: var(--rubyevents-text-muted);
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
// Footer with "Powered by" attribution
const footerStyles = i `
  .powered-by {
    margin-top: 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: right;
    font-size: 0.6875rem;
    color: var(--rubyevents-text-muted);
    opacity: 0.7;
  }

  .powered-by a {
    color: inherit;
  }

  .powered-by a:hover {
    color: var(--rubyevents-primary-color);
  }
`;

// Base Component for RubyEvents Embed Components
class BaseComponent extends i$1 {
    constructor() {
        super(...arguments);
        /**
         * Base URL for the RubyEvents API.
         * Defaults to https://rubyevents.org
         */
        this.baseUrl = 'https://rubyevents.org';
        /**
         * Whether to show the "Powered by RubyEvents" footer.
         * Add the `show-footer` attribute to display the footer.
         */
        this.showFooter = false;
        this.loadingState = 'idle';
        this.data = null;
        this.error = null;
        this.api = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.api = getApiClient(this.baseUrl);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Refetch data if baseUrl changes
        if (changedProperties.has('baseUrl') && this.api) {
            this.api = getApiClient(this.baseUrl);
            this.fetchData();
        }
    }
    renderLoading() {
        return b `
      <div class="loading">
        <div class="loading-spinner"></div>
      </div>
    `;
    }
    renderError() {
        return b `
      <div class="error">
        <div class="error-icon">!</div>
        <p class="error-message">${this.error || 'Something went wrong'}</p>
      </div>
    `;
    }
    renderFooter() {
        if (!this.showFooter) {
            return b ``;
        }
        return b `
      <div class="powered-by">
        Powered by
        <a href="${this.baseUrl}" target="_blank" rel="noopener noreferrer"
          >RubyEvents.org</a
        >
      </div>
    `;
    }
    formatDuration(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }
    formatDate(dateString) {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        }
        catch {
            return dateString;
        }
    }
    buildUrl(path) {
        return `${this.baseUrl}${path}`;
    }
    render() {
        switch (this.loadingState) {
            case 'loading':
                return this.renderLoading();
            case 'error':
                return this.renderError();
            case 'success':
                return this.renderContent();
            default:
                return b ``;
        }
    }
}
BaseComponent.styles = [baseStyles, loadingStyles, errorStyles, footerStyles];
__decorate([
    n({ type: String, attribute: 'base-url' })
], BaseComponent.prototype, "baseUrl", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-footer' })
], BaseComponent.prototype, "showFooter", void 0);
__decorate([
    r()
], BaseComponent.prototype, "loadingState", void 0);
__decorate([
    r()
], BaseComponent.prototype, "data", void 0);
__decorate([
    r()
], BaseComponent.prototype, "error", void 0);
// Skeleton components for loading states
i `
  .skeleton-card {
    padding: 1rem;
  }

  .skeleton-card .skeleton-thumbnail {
    margin-bottom: 0.75rem;
  }

  .skeleton-card .skeleton-text {
    height: 1rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-card .skeleton-text:last-child {
    width: 60%;
  }
`;

// RubyEvents Talk Component
// Displays a single talk card with video thumbnail, title, speakers, and event info
let RubyeventsTalk = class RubyeventsTalk extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The slug of the talk to display
         */
        this.slug = '';
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') && this.slug) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getTalk(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error = err instanceof Error ? err.message : 'Failed to load talk';
            this.loadingState = 'error';
        }
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const talk = this.data;
        const speakerNames = talk.speakers.map(s => s.name).join(', ');
        return b `
      <div class="talk-card card">
        <a
          href="${talk.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${talk.title}"
        >
          <div class="thumbnail">
            ${talk.thumbnail_url
            ? b `<img
                  src="${talk.thumbnail_url}"
                  alt="${talk.title}"
                  loading="lazy"
                />`
            : b `<div class="skeleton skeleton-thumbnail"></div>`}
            ${talk.duration_in_seconds
            ? b `<span class="duration"
                  >${this.formatDuration(talk.duration_in_seconds)}</span
                >`
            : ''}
          </div>
          <div class="card-body">
            <h3 class="card-title line-clamp-2">${talk.title}</h3>

            ${talk.speakers.length > 0
            ? b `
                  <div class="speakers">
                    <div class="avatar-group">
                      ${talk.speakers.slice(0, 3).map(speaker => b `
                          <img
                            class="avatar avatar-sm"
                            src="${speaker.avatar_url}"
                            alt="${speaker.name}"
                            loading="lazy"
                          />
                        `)}
                    </div>
                    <span class="speaker-names truncate">${speakerNames}</span>
                  </div>
                `
            : ''}
            ${talk.event
            ? b `
                  <div class="event-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="truncate">${talk.event.name}</span>
                  </div>
                  ${talk.event.location
                ? b `
                        <div class="event-info">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                          </svg>
                          <span>${talk.event.location}</span>
                        </div>
                      `
                : ''}
                `
            : ''}
            ${talk.date
            ? b `
                  <div class="talk-meta">
                    <span>${this.formatDate(talk.date)}</span>
                  </div>
                `
            : ''}
            ${this.renderFooter()}
          </div>
        </a>
      </div>
    `;
    }
    renderLoading() {
        return b `
      <div class="talk-card card">
        <div class="skeleton skeleton-thumbnail"></div>
        <div class="card-body">
          <div class="skeleton skeleton-text" style="width: 90%"></div>
          <div class="skeleton skeleton-text" style="width: 70%"></div>
          <div class="speakers" style="margin-top: 0.5rem">
            <div class="skeleton skeleton-avatar"></div>
            <div class="skeleton skeleton-text" style="width: 120px"></div>
          </div>
        </div>
      </div>
    `;
    }
};
RubyeventsTalk.styles = [
    ...BaseComponent.styles,
    cardStyles,
    thumbnailStyles,
    avatarStyles,
    badgeStyles,
    utilityStyles,
    i `
      .talk-card {
        max-width: 400px;
      }

      .talk-card a {
        color: inherit;
        text-decoration: none;
      }

      .talk-card a:hover .card-title {
        color: var(--rubyevents-primary-color);
      }

      .talk-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.75rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
      }

      .speakers {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .speaker-names {
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .event-info {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
        margin-top: 0.5rem;
      }

      .event-info + .event-info {
        margin-top: 0.125rem;
      }

      .event-info svg {
        width: 0.875rem;
        height: 0.875rem;
        flex-shrink: 0;
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsTalk.prototype, "slug", void 0);
RubyeventsTalk = __decorate([
    t('rubyevents-talk')
], RubyeventsTalk);

// RubyEvents Speaker Component
// Displays a speaker profile with tabs for talks and events
let RubyeventsSpeaker = class RubyeventsSpeaker extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The slug of the speaker to display
         */
        this.slug = '';
        /**
         * The active tab to display
         */
        this.tab = 'talks';
        this.activeTab = 'talks';
    }
    connectedCallback() {
        super.connectedCallback();
        this.activeTab = this.tab;
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') && this.slug) {
            this.fetchData();
        }
        if (changedProperties.has('tab')) {
            this.activeTab = this.tab;
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getSpeaker(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load speaker';
            this.loadingState = 'error';
        }
    }
    setTab(tab) {
        this.activeTab = tab;
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const speaker = this.data;
        return b `
      <div class="speaker-card card">
        <div class="speaker-header">
          <a
            href="${speaker.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${speaker.name}"
          >
            <img
              class="avatar avatar-xl"
              src="${speaker.avatar_url}"
              alt="${speaker.name}"
              loading="lazy"
            />
          </a>
          <div class="speaker-info">
            <h3 class="speaker-name">
              <a href="${speaker.url}" target="_blank" rel="noopener noreferrer"
                >${speaker.name}</a
              >
            </h3>
            <span class="badge">${speaker.talks_count} talks</span>
            ${speaker.bio
            ? b `<p class="speaker-bio">${speaker.bio}</p>`
            : ''}
            <div class="speaker-links">
              ${speaker.twitter
            ? b `
                    <a
                      href="https://twitter.com/${speaker.twitter}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                    </a>
                  `
            : ''}
              ${speaker.github
            ? b `
                    <a
                      href="https://github.com/${speaker.github}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  `
            : ''}
              ${speaker.website
            ? b `
                    <a
                      href="${speaker.website}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Website"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  `
            : ''}
            </div>
          </div>
        </div>

        <div class="tab-container">
          <div class="tabs">
            <button
              class="tab ${this.activeTab === 'talks' ? 'active' : ''}"
              @click=${() => this.setTab('talks')}
            >
              Talks (${speaker.talks_count})
            </button>
            <button
              class="tab ${this.activeTab === 'events' ? 'active' : ''}"
              @click=${() => this.setTab('events')}
            >
              Events (${speaker.events_count})
            </button>
          </div>

          <div
            class="tab-content ${this.activeTab === 'talks' ? 'active' : ''}"
          >
            ${this.renderTalks()}
          </div>

          <div
            class="tab-content ${this.activeTab === 'events' ? 'active' : ''}"
          >
            ${this.renderEvents()}
          </div>
          ${this.renderFooter()}
        </div>
      </div>
    `;
    }
    renderTalks() {
        if (!this.data || this.data.talks.length === 0) {
            return b `<p class="text-muted text-sm">No talks found.</p>`;
        }
        const hasMore = this.data.talks_count > this.data.talks.length;
        return b `
      <div class="list">
        ${this.data.talks.map(talk => b `
            <a
              href="${this.buildUrl(`/talks/${talk.slug}`)}"
              class="list-item talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${talk.thumbnail_url
            ? b `<img
                    class="talk-thumbnail"
                    src="${talk.thumbnail_url}"
                    alt="${talk.title}"
                    loading="lazy"
                  />`
            : b `<div class="talk-thumbnail skeleton"></div>`}
              <div class="list-item-content">
                <h4 class="list-item-title line-clamp-2">${talk.title}</h4>
                <p class="list-item-subtitle">
                  ${talk.event_name}
                  ${talk.date ? `- ${this.formatDate(talk.date)}` : ''}
                </p>
              </div>
            </a>
          `)}
      </div>
      ${hasMore
            ? b `
            <a
              href="${this.data.url}"
              class="view-all-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all ${this.data.talks_count} talks on RubyEvents
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </a>
          `
            : ''}
    `;
    }
    getEventInitial(name) {
        return name ? name.charAt(0).toUpperCase() : '?';
    }
    getEventBackground(event) {
        if (event.featured_background) {
            return event.featured_background;
        }
        return 'var(--rubyevents-primary-color)';
    }
    renderEvents() {
        if (!this.data || this.data.events.length === 0) {
            return b `<p class="text-muted text-sm">No events found.</p>`;
        }
        const hasMore = this.data.events_count > this.data.events.length;
        return b `
      <div class="list">
        ${this.data.events.map(event => b `
            <a
              href="${this.buildUrl(`/events/${event.slug}`)}"
              class="list-item event-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${event.avatar_url
            ? b `<img
                    class="event-avatar"
                    src="${event.avatar_url}"
                    alt="${event.name}"
                    loading="lazy"
                  />`
            : b `<div
                    class="event-avatar-placeholder"
                    style="background: ${this.getEventBackground(event)}"
                  >
                    ${this.getEventInitial(event.name)}
                  </div>`}
              <div class="list-item-content">
                <h4 class="list-item-title">${event.name}</h4>
                <p class="list-item-subtitle">
                  ${event.location}
                  ${event.date ? `- ${this.formatDate(event.date)}` : ''}
                </p>
              </div>
            </a>
          `)}
      </div>
      ${hasMore
            ? b `
            <a
              href="${this.data.url}"
              class="view-all-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all ${this.data.events_count} events on RubyEvents
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </a>
          `
            : ''}
    `;
    }
    renderLoading() {
        return b `
      <div class="speaker-card card">
        <div class="speaker-header">
          <div class="skeleton skeleton-avatar avatar-xl"></div>
          <div class="speaker-info">
            <div class="skeleton skeleton-text" style="width: 150px"></div>
            <div
              class="skeleton skeleton-text"
              style="width: 60px; height: 1.25rem"
            ></div>
            <div class="skeleton skeleton-text" style="width: 100%"></div>
            <div class="skeleton skeleton-text" style="width: 80%"></div>
          </div>
        </div>
        <div class="tab-container">
          <div class="skeleton skeleton-text" style="width: 100%"></div>
        </div>
      </div>
    `;
    }
};
RubyeventsSpeaker.styles = [
    ...BaseComponent.styles,
    cardStyles,
    thumbnailStyles,
    avatarStyles,
    badgeStyles,
    listStyles,
    tabStyles,
    utilityStyles,
    i `
      .speaker-card {
        max-width: 500px;
      }

      .speaker-header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .speaker-info {
        flex: 1;
        min-width: 0;
      }

      .speaker-name {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .speaker-name a {
        color: inherit;
        text-decoration: none;
      }

      .speaker-name a:hover {
        color: var(--rubyevents-primary-color);
      }

      .speaker-bio {
        margin: 0.5rem 0 0 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .speaker-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 0.5rem;
      }

      .speaker-links a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
      }

      .speaker-links a:hover {
        color: var(--rubyevents-primary-color);
      }

      .speaker-links svg {
        width: 1rem;
        height: 1rem;
      }

      .tab-container {
        padding: 1rem;
      }

      .talk-item {
        display: flex;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
      }

      .talk-item:hover {
        background: var(--rubyevents-background-alt);
      }

      .talk-thumbnail {
        width: 80px;
        aspect-ratio: 16 / 9;
        border-radius: 4px;
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .event-item {
        text-decoration: none;
        color: inherit;
      }

      .event-avatar {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .event-avatar-placeholder {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }

      .view-all-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
        color: var(--rubyevents-primary-color);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: background-color 0.15s ease;
      }

      .view-all-card:hover {
        background: var(--rubyevents-border-color);
      }

      .view-all-card svg {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsSpeaker.prototype, "slug", void 0);
__decorate([
    n({ type: String })
], RubyeventsSpeaker.prototype, "tab", void 0);
__decorate([
    r()
], RubyeventsSpeaker.prototype, "activeTab", void 0);
RubyeventsSpeaker = __decorate([
    t('rubyevents-speaker')
], RubyeventsSpeaker);

// RubyEvents Profile Component
// Displays a user profile with upcoming events
let RubyeventsProfile = class RubyeventsProfile extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The slug of the profile to display
         */
        this.slug = '';
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') && this.slug) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getProfile(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load profile';
            this.loadingState = 'error';
        }
    }
    formatAttendedAs(attendedAs) {
        return attendedAs.replace(/_/g, ' ');
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const profile = this.data;
        return b `
      <div class="profile-card card">
        <div class="profile-header">
          <a
            href="${profile.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${profile.name}"
          >
            <img
              class="avatar avatar-xl"
              src="${profile.avatar_url}"
              alt="${profile.name}"
              loading="lazy"
            />
          </a>
          <div class="profile-info">
            <h3 class="profile-name">
              <a href="${profile.url}" target="_blank" rel="noopener noreferrer"
                >${profile.name}</a
              >
            </h3>
            ${profile.location
            ? b `
                  <div class="profile-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${profile.location}
                  </div>
                `
            : ''}
            ${profile.bio
            ? b `<p class="profile-bio">${profile.bio}</p>`
            : ''}
            <div class="profile-links">
              ${profile.twitter
            ? b `
                    <a
                      href="https://twitter.com/${profile.twitter}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                    </a>
                  `
            : ''}
              ${profile.github
            ? b `
                    <a
                      href="https://github.com/${profile.github}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  `
            : ''}
              ${profile.website
            ? b `
                    <a
                      href="${profile.website}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Website"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  `
            : ''}
            </div>
          </div>
        </div>

        <div class="events-container">
          ${this.renderUpcomingEvents()}
          ${this.renderFooter()}
        </div>
      </div>
    `;
    }
    getEventInitial(name) {
        return name ? name.charAt(0).toUpperCase() : '?';
    }
    getEventBackground(event) {
        if (event.featured_background) {
            return event.featured_background;
        }
        return 'var(--rubyevents-primary-color)';
    }
    renderUpcomingEvents() {
        if (!this.data || this.data.upcoming_events.length === 0) {
            return b `<p class="text-muted text-sm">No upcoming events.</p>`;
        }
        const hasMore = this.data.upcoming_events_count > this.data.upcoming_events.length;
        return b `
      <div class="events-header">Upcoming Events (${this.data.upcoming_events_count})</div>
      <div class="list">
        ${this.data.upcoming_events.map(event => b `
            <a
              href="${this.buildUrl(`/events/${event.slug}`)}"
              class="list-item event-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${event.avatar_url
            ? b `<img
                    class="event-avatar"
                    src="${event.avatar_url}"
                    alt="${event.name}"
                    loading="lazy"
                  />`
            : b `<div
                    class="event-avatar-placeholder"
                    style="background: ${this.getEventBackground(event)}"
                  >
                    ${this.getEventInitial(event.name)}
                  </div>`}
              <div class="list-item-content">
                <h4 class="list-item-title">${event.name}</h4>
                <p class="list-item-subtitle">
                  ${event.date ? this.formatDate(event.date) : ''}
                  ${event.location
            ? b `
                        <span class="event-location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          ${event.location}
                        </span>
                      `
            : ''}
                  <span class="badge attended-badge"
                    >${this.formatAttendedAs(event.attended_as)}</span
                  >
                </p>
              </div>
            </a>
          `)}
      </div>
      ${hasMore
            ? b `
            <a
              href="${this.data.url}"
              class="view-all-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all ${this.data.upcoming_events_count} events on RubyEvents
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </a>
          `
            : ''}
    `;
    }
    renderLoading() {
        return b `
      <div class="profile-card card">
        <div class="profile-header">
          <div class="skeleton skeleton-avatar avatar-xl"></div>
          <div class="profile-info">
            <div class="skeleton skeleton-text" style="width: 150px"></div>
            <div class="skeleton skeleton-text" style="width: 100px"></div>
            <div class="skeleton skeleton-text" style="width: 100%"></div>
            <div class="skeleton skeleton-text" style="width: 80%"></div>
          </div>
        </div>
        <div class="events-container">
          <div class="skeleton skeleton-text" style="width: 100%"></div>
        </div>
      </div>
    `;
    }
};
RubyeventsProfile.styles = [
    ...BaseComponent.styles,
    cardStyles,
    avatarStyles,
    badgeStyles,
    listStyles,
    utilityStyles,
    i `
      .profile-card {
        max-width: 500px;
      }

      .profile-header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .profile-info {
        flex: 1;
        min-width: 0;
      }

      .profile-name {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .profile-name a {
        color: inherit;
        text-decoration: none;
      }

      .profile-name a:hover {
        color: var(--rubyevents-primary-color);
      }

      .profile-location {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        margin-bottom: 0.5rem;
      }

      .profile-location svg {
        width: 0.875rem;
        height: 0.875rem;
      }

      .profile-bio {
        margin: 0.5rem 0 0 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .profile-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 0.5rem;
      }

      .profile-links a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
      }

      .profile-links a:hover {
        color: var(--rubyevents-primary-color);
      }

      .profile-links svg {
        width: 1rem;
        height: 1rem;
      }

      .events-container {
        padding: 1rem;
      }

      .events-header {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--rubyevents-text-muted);
        margin-bottom: 0.75rem;
      }

      .event-item {
        text-decoration: none;
        color: inherit;
      }

      .attended-badge {
        text-transform: capitalize;
      }

      .event-location {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .event-location svg {
        width: 0.75rem;
        height: 0.75rem;
        flex-shrink: 0;
      }

      .event-avatar {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .event-avatar-placeholder {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }

      .view-all-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
        color: var(--rubyevents-primary-color);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: background-color 0.15s ease;
      }

      .view-all-card:hover {
        background: var(--rubyevents-border-color);
      }

      .view-all-card svg {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsProfile.prototype, "slug", void 0);
RubyeventsProfile = __decorate([
    t('rubyevents-profile')
], RubyeventsProfile);

// RubyEvents Event Component
// Displays a single event with details and participant avatars
let RubyeventsEvent = class RubyeventsEvent extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The event slug to fetch
         */
        this.slug = '';
        /**
         * Whether to show participant avatars
         */
        this.showParticipants = true;
        /**
         * Maximum number of participant avatars to show per category
         */
        this.maxAvatars = 8;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') || changedProperties.has('baseUrl')) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getEvent(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load event';
            this.loadingState = 'error';
        }
    }
    getEventInitial() {
        if (!this.data?.name)
            return '?';
        return this.data.name.charAt(0).toUpperCase();
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const event = this.data;
        return b `
      <div class="card event-card">
        <div class="event-header">
          ${event.banner_url
            ? b `<img
                class="event-banner"
                src="${event.banner_url}"
                alt=""
                loading="lazy"
                style="background: ${event.featured_background || 'var(--rubyevents-primary-color)'}"
              />`
            : b `<div
                class="event-banner"
                style="background: ${event.featured_background || 'var(--rubyevents-primary-color)'}"
              ></div>`}

          <div class="event-avatar-container">
            ${event.avatar_url
            ? b `<img
                  class="event-avatar"
                  src="${event.avatar_url}"
                  alt="${event.name}"
                  loading="lazy"
                />`
            : b `<div class="event-avatar-placeholder">
                  ${this.getEventInitial()}
                </div>`}
          </div>
        </div>

        <div class="event-body">
          <h3 class="event-title">
            <a href="${event.url}" target="_blank" rel="noopener noreferrer">
              ${event.name}
            </a>
          </h3>

          <div class="event-meta">
            ${event.location
            ? b `
                  <span class="event-meta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${event.location}
                  </span>
                `
            : ''}
            ${event.start_date
            ? b `
                  <span class="event-meta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${this.formatDate(event.start_date)}
                    ${event.end_date && event.end_date !== event.start_date
                ? ` - ${this.formatDate(event.end_date)}`
                : ''}
                  </span>
                `
            : ''}
          </div>

          ${event.description
            ? b `
                <p class="event-description line-clamp-2">
                  ${event.description}
                </p>
              `
            : ''}

          <div class="event-stats">
            <div class="event-stat">
              <span class="event-stat-value">${event.talks_count}</span>
              <span class="event-stat-label">Talks</span>
            </div>
            <div class="event-stat">
              <span class="event-stat-value">${event.speakers_count}</span>
              <span class="event-stat-label">Speakers</span>
            </div>
            <div class="event-stat">
              <span class="event-stat-value">${event.counts.total}</span>
              <span class="event-stat-label">Participants</span>
            </div>
          </div>

          ${this.showParticipants ? this.renderParticipants(event) : ''}

          <div class="event-links">
            <a
              class="event-link"
              href="${event.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Event
            </a>
            ${event.website
            ? b `
                  <a
                    class="event-link event-link-secondary"
                    href="${event.website}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website
                  </a>
                `
            : ''}
          </div>

          ${this.renderFooter()}
        </div>
      </div>
    `;
    }
    renderParticipants(event) {
        const hasParticipants = event.participants.keynote_speakers.length > 0 ||
            event.participants.speakers.length > 0 ||
            event.participants.attendees.length > 0;
        if (!hasParticipants) {
            return b ``;
        }
        return b `
      ${event.participants.keynote_speakers.length > 0
            ? this.renderParticipantGroup('Keynote Speakers', event.participants.keynote_speakers, event.counts.keynote_speakers)
            : ''}
      ${event.participants.speakers.length > 0
            ? this.renderParticipantGroup('Speakers', event.participants.speakers, event.counts.speakers)
            : ''}
      ${event.participants.attendees.length > 0
            ? this.renderParticipantGroup('Attendees', event.participants.attendees, event.counts.attendees)
            : ''}
    `;
    }
    renderParticipantGroup(label, participants, totalCount) {
        const displayParticipants = participants.slice(0, this.maxAvatars);
        const remainingCount = totalCount - displayParticipants.length;
        return b `
      <div class="participants-section">
        <div class="participants-label">${label}</div>
        <div class="participants-avatars">
          ${displayParticipants.map(participant => b `
              <a
                href="${this.baseUrl}/profiles/${participant.slug}"
                target="_blank"
                rel="noopener noreferrer"
                title="${participant.name}"
              >
                <img
                  class="avatar"
                  src="${participant.avatar_url ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(participant.name)}&size=64&background=dc143c&color=fff`}"
                  alt="${participant.name}"
                  loading="lazy"
                />
              </a>
            `)}
          ${remainingCount > 0
            ? b `<span class="more-participants">+${remainingCount}</span>`
            : ''}
        </div>
      </div>
    `;
    }
    renderLoading() {
        return b `
      <div class="card event-card">
        <div class="event-header">
          <div class="skeleton event-banner"></div>
          <div class="event-avatar-container">
            <div class="skeleton event-avatar"></div>
          </div>
        </div>
        <div class="event-body">
          <div class="skeleton skeleton-text" style="width: 60px"></div>
          <div
            class="skeleton skeleton-text"
            style="width: 80%; height: 1.5rem"
          ></div>
          <div class="skeleton skeleton-text" style="width: 60%"></div>
          <div class="skeleton skeleton-text" style="width: 50%"></div>
          <div
            class="skeleton"
            style="height: 60px; margin-top: 1rem; margin-bottom: 1rem"
          ></div>
          <div class="skeleton skeleton-text" style="width: 40%"></div>
        </div>
      </div>
    `;
    }
};
RubyeventsEvent.styles = [
    ...BaseComponent.styles,
    cardStyles,
    avatarStyles,
    badgeStyles,
    utilityStyles,
    footerStyles,
    i `
      .event-card {
        max-width: 400px;
      }

      .event-header {
        position: relative;
      }

      .event-banner {
        width: 100%;
        height: auto;
        display: block;
      }

      .event-avatar-container {
        position: absolute;
        bottom: -32px;
        left: 1rem;
        z-index: 1;
      }

      .event-avatar {
        width: 64px;
        height: 64px;
        border-radius: var(--rubyevents-border-radius);
        border: 3px solid var(--rubyevents-background);
        object-fit: cover;
        background: var(--rubyevents-background-alt);
      }

      .event-avatar-placeholder {
        width: 64px;
        height: 64px;
        border-radius: var(--rubyevents-border-radius);
        border: 3px solid var(--rubyevents-background);
        background: var(--rubyevents-primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .event-body {
        padding: 2.5rem 1rem 1rem 1rem;
      }

      .event-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.25;
      }

      .event-title a {
        color: inherit;
        text-decoration: none;
      }

      .event-title a:hover {
        color: var(--rubyevents-primary-color);
      }

      .event-meta {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .event-meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .event-meta-item svg {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }

      .event-description {
        margin: 0 0 1rem 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        line-height: 1.5;
      }

      .event-stats {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        padding: 0.75rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
      }

      .event-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
      }

      .event-stat-value {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--rubyevents-text-color);
      }

      .event-stat-label {
        font-size: 0.75rem;
        color: var(--rubyevents-text-muted);
      }

      .participants-section {
        margin-bottom: 1rem;
      }

      .participants-label {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--rubyevents-text-muted);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .participants-avatars {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
      }

      .participants-avatars .avatar {
        width: 2rem;
        height: 2rem;
        border: 2px solid var(--rubyevents-background);
      }

      .more-participants {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: var(--rubyevents-background-alt);
        border: 2px solid var(--rubyevents-background);
        font-size: 0.625rem;
        font-weight: 600;
        color: var(--rubyevents-text-muted);
      }

      .event-links {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .event-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.375rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: var(--rubyevents-border-radius);
        background: var(--rubyevents-primary-color);
        color: white;
        text-decoration: none;
        transition: opacity 0.15s ease;
      }

      .event-link:hover {
        opacity: 0.9;
        text-decoration: none;
      }

      .event-link-secondary {
        background: var(--rubyevents-background-alt);
        color: var(--rubyevents-text-color);
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsEvent.prototype, "slug", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-participants' })
], RubyeventsEvent.prototype, "showParticipants", void 0);
__decorate([
    n({ type: Number, attribute: 'max-avatars' })
], RubyeventsEvent.prototype, "maxAvatars", void 0);
RubyeventsEvent = __decorate([
    t('rubyevents-event')
], RubyeventsEvent);

// RubyEvents Event Card Component
// Displays a compact 16:9 event card with minimal details
let RubyeventsEventCard = class RubyeventsEventCard extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The event slug to fetch
         */
        this.slug = '';
        /**
         * Size variant: 'sm', 'md' (default), or 'lg'
         */
        this.size = 'md';
        /**
         * Whether to show the event kind badge
         */
        this.showKind = true;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') || changedProperties.has('baseUrl')) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getEvent(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load event';
            this.loadingState = 'error';
        }
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const event = this.data;
        const backgroundStyle = event.featured_background
            ? `background: ${event.featured_background}`
            : '';
        return b `
      <div class="event-card">
        <a
          class="event-card-link"
          href="${event.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="event-background" style=${backgroundStyle}>
            ${event.banner_url
            ? b `<img
                  class="event-background-image"
                  src="${event.banner_url}"
                  alt=""
                  loading="lazy"
                />`
            : ''}
          </div>
          <div class="event-overlay"></div>

          <div class="event-content">
            ${event.avatar_url
            ? b `<img
                  class="event-avatar"
                  src="${event.avatar_url}"
                  alt=""
                  loading="lazy"
                />`
            : ''}

            ${this.showKind && event.kind
            ? b `
                  <div class="event-kind">
                    <span class="badge">${event.kind}</span>
                  </div>
                `
            : ''}

            <h3 class="event-title">${event.name}</h3>

            <div class="event-meta">
              ${event.location
            ? b `
                    <span class="event-meta-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      ${event.location}
                    </span>
                  `
            : ''}
              ${event.start_date
            ? b `
                    <span class="event-meta-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      ${this.formatDate(event.start_date)}
                    </span>
                  `
            : ''}
            </div>
          </div>
        </a>
      </div>
    `;
    }
    renderLoading() {
        return b `<div class="skeleton-card"></div>`;
    }
};
RubyeventsEventCard.styles = [
    ...BaseComponent.styles,
    cardStyles,
    badgeStyles,
    i `
      .event-card {
        position: relative;
        aspect-ratio: 16 / 9;
        border-radius: var(--rubyevents-border-radius);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .event-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .event-card-link {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
      }

      .event-background {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          var(--rubyevents-primary-color) 0%,
          var(--rubyevents-secondary-color) 100%
        );
      }

      .event-background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .event-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.4) 50%,
          rgba(0, 0, 0, 0.1) 100%
        );
      }

      .event-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem;
        color: white;
      }

      .event-avatar {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
      }

      .event-kind {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
      }

      .event-kind .badge {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        backdrop-filter: blur(4px);
        font-size: 0.625rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .event-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.25;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      .event-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        font-size: 0.8125rem;
        opacity: 0.9;
      }

      .event-meta-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .event-meta-item svg {
        width: 0.875rem;
        height: 0.875rem;
        opacity: 0.8;
      }

      /* Size variants */
      :host([size='sm']) .event-card {
        max-width: 280px;
      }

      :host([size='sm']) .event-title {
        font-size: 0.9375rem;
      }

      :host([size='sm']) .event-meta {
        font-size: 0.75rem;
      }

      :host([size='sm']) .event-content {
        padding: 0.75rem;
      }

      :host([size='lg']) .event-card {
        max-width: 380px;
      }

      :host([size='lg']) .event-title {
        font-size: 1.375rem;
      }

      /* Loading skeleton */
      .skeleton-card {
        aspect-ratio: 16 / 9;
        border-radius: var(--rubyevents-border-radius);
        background: linear-gradient(
          90deg,
          var(--rubyevents-background-alt) 25%,
          var(--rubyevents-border-color) 50%,
          var(--rubyevents-background-alt) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsEventCard.prototype, "slug", void 0);
__decorate([
    n({ type: String, reflect: true })
], RubyeventsEventCard.prototype, "size", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-kind' })
], RubyeventsEventCard.prototype, "showKind", void 0);
RubyeventsEventCard = __decorate([
    t('rubyevents-event-card')
], RubyeventsEventCard);

// RubyEvents Events Component
// Displays a list of events with filtering options
let RubyeventsEvents = class RubyeventsEvents extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * Filter events by: 'upcoming', 'past', or 'all'
         */
        this.filter = 'upcoming';
        /**
         * Maximum number of events to display
         */
        this.limit = 10;
        /**
         * Whether to show the filter dropdown
         */
        this.showFilter = false;
        /**
         * Custom title for the events list
         */
        this.title = '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchData();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('filter') ||
            changedProperties.has('limit') ||
            changedProperties.has('baseUrl')) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getEvents(this.filter);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load events';
            this.loadingState = 'error';
        }
    }
    handleFilterChange(e) {
        const select = e.target;
        this.filter = select.value;
    }
    getTitle() {
        if (this.title)
            return this.title;
        switch (this.filter) {
            case 'upcoming':
                return 'Upcoming Events';
            case 'past':
                return 'Past Events';
            default:
                return 'Ruby Events';
        }
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const events = this.data.events.slice(0, this.limit);
        return b `
      <div class="events-container">
        <div class="events-header">
          <h3 class="events-title">${this.getTitle()}</h3>
          ${this.showFilter
            ? b `
                <select
                  class="filter-select"
                  @change=${this.handleFilterChange}
                  .value=${this.filter}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="all">All</option>
                </select>
              `
            : ''}
        </div>

        ${events.length > 0
            ? b `
              <div class="list">
                ${events.map(event => this.renderEvent(event))}
              </div>
            `
            : b `
              <div class="empty-state">
                <p>No ${this.filter === 'all' ? '' : this.filter} events found.</p>
              </div>
            `}
        ${this.renderFooter()}
      </div>
    `;
    }
    getEventInitial(name) {
        return name ? name.charAt(0).toUpperCase() : '?';
    }
    getEventBackground(event) {
        if (event.featured_background) {
            return event.featured_background;
        }
        return 'var(--rubyevents-primary-color)';
    }
    renderEvent(event) {
        return b `
      <a
        href="${event.url}"
        class="list-item event-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${event.avatar_url
            ? b `<img
              class="event-avatar"
              src="${event.avatar_url}"
              alt="${event.name}"
              loading="lazy"
            />`
            : b `<div
              class="event-avatar-placeholder"
              style="background: ${this.getEventBackground(event)}"
            >
              ${this.getEventInitial(event.name)}
            </div>`}
        <div class="list-item-content">
          <h4 class="list-item-title">${event.name}</h4>
          <p class="list-item-subtitle">${event.location}</p>
          ${event.start_date
            ? b `
                <div class="event-dates">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  ${this.formatDate(event.start_date)}
                  ${event.end_date && event.end_date !== event.start_date
                ? ` - ${this.formatDate(event.end_date)}`
                : ''}
                </div>
              `
            : ''}
        </div>
      </a>
    `;
    }
    renderLoading() {
        return b `
      <div class="events-container">
        <div class="events-header">
          <div class="skeleton skeleton-text" style="width: 150px"></div>
        </div>
        <div class="list">
          ${[1, 2, 3].map(() => b `
              <div class="list-item">
                <div
                  class="skeleton"
                  style="width: 48px; height: 48px; border-radius: var(--rubyevents-border-radius); flex-shrink: 0"
                ></div>
                <div class="list-item-content">
                  <div class="skeleton skeleton-text" style="width: 80%"></div>
                  <div class="skeleton skeleton-text" style="width: 50%"></div>
                  <div class="skeleton skeleton-text" style="width: 60%"></div>
                </div>
              </div>
            `)}
        </div>
      </div>
    `;
    }
};
RubyeventsEvents.styles = [
    ...BaseComponent.styles,
    cardStyles,
    listStyles,
    badgeStyles,
    utilityStyles,
    avatarStyles,
    i `
      .events-container {
        max-width: 600px;
      }

      .events-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }

      .events-title {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .filter-select {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        border: 1px solid var(--rubyevents-border-color);
        border-radius: var(--rubyevents-border-radius);
        background: var(--rubyevents-background);
        color: var(--rubyevents-text-color);
        cursor: pointer;
      }

      .filter-select:focus {
        outline: none;
        border-color: var(--rubyevents-primary-color);
      }

      .event-item {
        text-decoration: none;
        color: inherit;
      }

      .event-details {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 0.25rem;
      }

      .event-stat {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: var(--rubyevents-text-muted);
      }

      .event-stat svg {
        width: 0.875rem;
        height: 0.875rem;
      }

      .event-dates {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: var(--rubyevents-text-muted);
      }

      .event-dates svg {
        width: 0.875rem;
        height: 0.875rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--rubyevents-text-muted);
      }

      .event-card {
        display: block;
        text-decoration: none;
        color: inherit;
        border: 1px solid var(--rubyevents-border-color);
        border-radius: var(--rubyevents-border-radius);
        overflow: hidden;
        background: var(--rubyevents-background);
        transition: box-shadow 0.15s ease;
      }

      .event-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .event-banner {
        width: 100%;
        aspect-ratio: 16 / 6;
        object-fit: cover;
        display: block;
      }

      .event-banner-placeholder {
        width: 100%;
        aspect-ratio: 16 / 6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 600;
        color: white;
      }

      .event-card-content {
        padding: 1rem;
      }

      .event-card-title {
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 600;
      }

      .event-card-location {
        margin: 0 0 0.5rem 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .events-grid {
        display: grid;
        gap: 1rem;
      }

      .event-avatar {
        width: 48px;
        height: 48px;
        border-radius: var(--rubyevents-border-radius);
        object-fit: cover;
        flex-shrink: 0;
      }

      .event-avatar-placeholder {
        width: 48px;
        height: 48px;
        border-radius: var(--rubyevents-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsEvents.prototype, "filter", void 0);
__decorate([
    n({ type: Number })
], RubyeventsEvents.prototype, "limit", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-filter' })
], RubyeventsEvents.prototype, "showFilter", void 0);
__decorate([
    n({ type: String })
], RubyeventsEvents.prototype, "title", void 0);
RubyeventsEvents = __decorate([
    t('rubyevents-events')
], RubyeventsEvents);

// RubyEvents Participants Component
// Displays participants/attendees of an event
let RubyeventsParticipants = class RubyeventsParticipants extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The slug of the event to display participants for
         */
        this.slug = '';
        /**
         * Filter to show specific participant types
         */
        this.filter = 'all';
        /**
         * Whether to show tabs for filtering
         */
        this.showTabs = true;
        /**
         * Compact mode: small avatars in a dense grid, no names, no groups
         */
        this.compact = false;
        this.activeTab = 'all';
    }
    connectedCallback() {
        super.connectedCallback();
        this.activeTab = this.filter;
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') && this.slug) {
            this.fetchData();
        }
        if (changedProperties.has('filter')) {
            this.activeTab = this.filter;
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getParticipants(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            const message = err instanceof Error ? err.message : '';
            if (message === 'Not found') {
                this.error = `Event "${this.slug}" not found`;
            }
            else {
                this.error = 'Failed to load participants';
            }
            this.loadingState = 'error';
        }
    }
    setTab(tab) {
        this.activeTab = tab;
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const { event, counts } = this.data;
        return b `
      <div class="participants-container card">
        <div class="participants-header">
          <h3 class="event-name">
            <a href="${event.url}" target="_blank" rel="noopener noreferrer"
              >${event.name}</a
            >
          </h3>
          <span class="total-count">${counts.total} participants</span>
        </div>

        <div class="tab-container">
          ${this.showTabs && !this.compact ? this.renderTabs() : ''}
          ${this.renderParticipants()}
          ${this.renderFooter()}
        </div>
      </div>
    `;
    }
    renderTabs() {
        if (!this.data)
            return b ``;
        const { counts } = this.data;
        return b `
      <div class="tabs">
        <button
          class="tab ${this.activeTab === 'all' ? 'active' : ''}"
          @click=${() => this.setTab('all')}
        >
          All (${counts.total})
        </button>
        ${counts.keynote_speakers > 0
            ? b `
              <button
                class="tab ${this.activeTab === 'keynote_speakers'
                ? 'active'
                : ''}"
                @click=${() => this.setTab('keynote_speakers')}
              >
                Keynotes (${counts.keynote_speakers})
              </button>
            `
            : ''}
        ${counts.speakers > 0
            ? b `
              <button
                class="tab ${this.activeTab === 'speakers' ? 'active' : ''}"
                @click=${() => this.setTab('speakers')}
              >
                Speakers (${counts.speakers})
              </button>
            `
            : ''}
        ${counts.attendees > 0
            ? b `
              <button
                class="tab ${this.activeTab === 'attendees' ? 'active' : ''}"
                @click=${() => this.setTab('attendees')}
              >
                Attendees (${counts.attendees})
              </button>
            `
            : ''}
      </div>
    `;
    }
    renderParticipants() {
        if (!this.data)
            return b ``;
        const { participants, counts } = this.data;
        if (counts.total === 0) {
            return b `
        <div class="empty-state">
          <p>No participants found for this event.</p>
        </div>
      `;
        }
        // Compact mode: show all participants in a flat grid
        if (this.compact) {
            const allParticipants = [
                ...participants.keynote_speakers,
                ...participants.speakers,
                ...participants.attendees,
            ];
            return b `
        <div class="participants-grid">
          ${allParticipants.map(p => this.renderParticipant(p))}
        </div>
      `;
        }
        if (this.activeTab === 'all') {
            return this.renderAllParticipants();
        }
        const participantList = participants[this.activeTab] || [];
        if (participantList.length === 0) {
            return b `
        <div class="empty-state">
          <p>No ${this.activeTab.replace('_', ' ')} found.</p>
        </div>
      `;
        }
        return b `
      <div class="participants-grid">
        ${participantList.map(p => this.renderParticipant(p))}
      </div>
    `;
    }
    renderAllParticipants() {
        if (!this.data)
            return b ``;
        const { participants } = this.data;
        return b `
      ${participants.keynote_speakers.length > 0
            ? b `
            <h4 class="section-title">Keynote Speakers</h4>
            <div class="participants-grid">
              ${participants.keynote_speakers.map(p => this.renderParticipant(p))}
            </div>
          `
            : ''}
      ${participants.speakers.length > 0
            ? b `
            <h4 class="section-title">Speakers</h4>
            <div class="participants-grid">
              ${participants.speakers.map(p => this.renderParticipant(p))}
            </div>
          `
            : ''}
      ${participants.attendees.length > 0
            ? b `
            <h4 class="section-title">Attendees</h4>
            <div class="participants-grid">
              ${participants.attendees.map(p => this.renderParticipant(p))}
            </div>
          `
            : ''}
    `;
    }
    renderParticipant(participant) {
        return b `
      <a
        href="${this.buildUrl(`/profiles/${participant.slug}`)}"
        class="participant-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="avatar avatar-lg"
          src="${participant.avatar_url}"
          alt="${participant.name}"
          loading="lazy"
        />
        <span class="participant-name">${participant.name}</span>
      </a>
    `;
    }
    renderLoading() {
        return b `
      <div class="participants-container card">
        <div class="participants-header">
          <div class="skeleton skeleton-text" style="width: 200px"></div>
          <div class="skeleton skeleton-text" style="width: 100px"></div>
        </div>
        <div class="tab-container">
          <div class="participants-grid">
            ${[1, 2, 3, 4, 5, 6].map(() => b `
                <div class="participant-card">
                  <div class="skeleton skeleton-avatar avatar-lg"></div>
                  <div
                    class="skeleton skeleton-text"
                    style="width: 80px; margin-top: 0.5rem"
                  ></div>
                </div>
              `)}
          </div>
        </div>
      </div>
    `;
    }
};
RubyeventsParticipants.styles = [
    ...BaseComponent.styles,
    cardStyles,
    avatarStyles,
    badgeStyles,
    tabStyles,
    gridStyles,
    utilityStyles,
    i `
      .participants-container {
        max-width: 600px;
      }

      .participants-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .event-name {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .event-name a {
        color: inherit;
        text-decoration: none;
      }

      .event-name a:hover {
        color: var(--rubyevents-primary-color);
      }

      .total-count {
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .tab-container {
        padding: 1rem;
      }

      .participants-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;
      }

      .participant-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0.75rem;
        border-radius: var(--rubyevents-border-radius);
        text-decoration: none;
        color: inherit;
        transition: background-color 0.15s ease;
      }

      .participant-card:hover {
        background: var(--rubyevents-background-alt);
      }

      .participant-name {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        word-break: break-word;
      }

      .section-title {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--rubyevents-text-muted);
        margin: 1.5rem 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .section-title:first-child {
        margin-top: 0;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--rubyevents-text-muted);
      }

      /* Compact mode */
      :host([compact]) .participants-grid {
        grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
        gap: 0.375rem;
      }

      :host([compact]) .participant-card {
        padding: 0;
      }

      :host([compact]) .participant-card:hover {
        background: transparent;
      }

      :host([compact]) .avatar {
        width: 32px;
        height: 32px;
        transition: transform 0.15s ease;
      }

      :host([compact]) .participant-card:hover .avatar {
        transform: scale(1.15);
      }

      :host([compact]) .participant-name {
        display: none;
      }

      :host([compact]) .section-title {
        display: none;
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsParticipants.prototype, "slug", void 0);
__decorate([
    n({ type: String })
], RubyeventsParticipants.prototype, "filter", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-tabs' })
], RubyeventsParticipants.prototype, "showTabs", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], RubyeventsParticipants.prototype, "compact", void 0);
__decorate([
    r()
], RubyeventsParticipants.prototype, "activeTab", void 0);
RubyeventsParticipants = __decorate([
    t('rubyevents-participants')
], RubyeventsParticipants);

// RubyEvents Stickers Component
// Displays stickers on a MacBook-style laptop lid with random placement
let RubyeventsStickers = class RubyeventsStickers extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The user slug to fetch stickers for
         */
        this.slug = '';
        /**
         * Minimum sticker size in pixels
         */
        this.minSize = 60;
        /**
         * Maximum sticker size in pixels
         */
        this.maxSize = 100;
        /**
         * Seed for random placement (for consistent layouts)
         */
        this.seed = 0;
        this.placedStickers = [];
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') || changedProperties.has('baseUrl')) {
            this.fetchData();
        }
        if (changedProperties.has('data') ||
            changedProperties.has('minSize') ||
            changedProperties.has('maxSize') ||
            changedProperties.has('seed')) {
            this.placeStickers();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getStickers(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load stickers';
            this.loadingState = 'error';
        }
    }
    seededRandom(seed) {
        let s = seed || Date.now();
        return () => {
            s = (s * 1103515245 + 12345) & 0x7fffffff;
            return s / 0x7fffffff;
        };
    }
    checkOverlap(x, y, size, placed) {
        // Calculate the radius as percentage of container (size is in pixels, container ~= 460px)
        const radiusPercent = (size / 460) * 50; // Convert to percentage radius
        for (const existing of placed) {
            const existingRadius = (existing.scale * ((this.minSize + this.maxSize) / 2) / 460) * 50;
            const minDistance = radiusPercent + existingRadius;
            const dx = x - existing.x;
            const dy = y - existing.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < minDistance * 0.85) {
                // Allow slight overlap (15%)
                return true;
            }
        }
        return false;
    }
    findNonOverlappingPosition(size, placed, random) {
        // Calculate padding based on sticker size to prevent cutoff
        // Container is roughly 460px, sticker size is in pixels
        const stickerRadiusPercent = (size / 460) * 50 + 2; // Extra 2% buffer
        const minPadding = Math.max(12, stickerRadiusPercent);
        const maxPadding = 100 - minPadding;
        // Try grid-based positions first for better distribution
        const gridSize = 10;
        const gridPositions = [];
        const rangeX = maxPadding - minPadding;
        const rangeY = maxPadding - minPadding;
        for (let gx = 0; gx < gridSize; gx++) {
            for (let gy = 0; gy < gridSize; gy++) {
                const baseX = minPadding + (gx / (gridSize - 1)) * rangeX;
                const baseY = minPadding + (gy / (gridSize - 1)) * rangeY;
                // Add jitter but clamp to stay within bounds
                const jitterX = (random() - 0.5) * 6;
                const jitterY = (random() - 0.5) * 6;
                gridPositions.push({
                    x: Math.max(minPadding, Math.min(maxPadding, baseX + jitterX)),
                    y: Math.max(minPadding, Math.min(maxPadding, baseY + jitterY)),
                });
            }
        }
        // Shuffle grid positions
        for (let i = gridPositions.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [gridPositions[i], gridPositions[j]] = [gridPositions[j], gridPositions[i]];
        }
        // Try grid positions first
        for (const pos of gridPositions) {
            if (!this.checkOverlap(pos.x, pos.y, size, placed)) {
                return { x: pos.x, y: pos.y, foundSpace: true };
            }
        }
        // If grid positions all overlap, try random positions
        for (let attempt = 0; attempt < 50; attempt++) {
            const x = minPadding + random() * rangeX;
            const y = minPadding + random() * rangeY;
            if (!this.checkOverlap(x, y, size, placed)) {
                return { x, y, foundSpace: true };
            }
        }
        // No non-overlapping position found, return a random position anyway
        return {
            x: minPadding + random() * rangeX,
            y: minPadding + random() * rangeY,
            foundSpace: false,
        };
    }
    placeStickers() {
        if (!this.data?.stickers?.length) {
            this.placedStickers = [];
            return;
        }
        const random = this.seededRandom(this.seed || this.slug.length * 1000);
        const placed = [];
        // Sort stickers by size (larger first) for better packing
        const stickersToPlace = [...this.data.stickers].map((sticker, index) => ({
            sticker,
            originalIndex: index,
            scale: 0.8 + random() * 0.4, // 0.8 to 1.2
        }));
        // Place larger stickers first for better space utilization
        stickersToPlace.sort((a, b) => b.scale - a.scale);
        stickersToPlace.forEach(({ sticker, originalIndex, scale }) => {
            const size = this.minSize + scale * (this.maxSize - this.minSize);
            const rotation = (random() - 0.5) * 30; // -15 to +15 degrees
            const { x, y } = this.findNonOverlappingPosition(size, placed, random);
            placed.push({
                ...sticker,
                x,
                y,
                rotation,
                scale,
                zIndex: originalIndex + 1,
            });
        });
        this.placedStickers = placed;
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        return b `
      <div class="stickers-container">
        <div class="stickers-header">
          <h3 class="stickers-title">${this.data.user.name}'s Stickers</h3>
          <p class="stickers-subtitle">${this.data.count} stickers collected</p>
        </div>

        <div class="macbook">
          <div class="macbook-lid">
            <div class="stickers-area">
              ${this.placedStickers.length > 0
            ? this.placedStickers.map(sticker => this.renderSticker(sticker))
            : b `
                    <div class="empty-state">
                      <div class="empty-state-icon">🎨</div>
                      <div class="empty-state-text">No stickers yet</div>
                    </div>
                  `}
            </div>
          </div>
          <div class="macbook-base">
            <div class="macbook-notch"></div>
          </div>
        </div>

        ${this.showFooter
            ? b `
              <div class="powered-by">
                Powered by
                <a
                  href="${this.baseUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RubyEvents.org
                </a>
              </div>
            `
            : ''}
      </div>
    `;
    }
    renderSticker(sticker) {
        const size = this.minSize + (this.maxSize - this.minSize) * sticker.scale;
        const style = `
      left: ${sticker.x}%;
      top: ${sticker.y}%;
      width: ${size}px;
      height: ${size}px;
      transform: translate(-50%, -50%) rotate(${sticker.rotation}deg);
      z-index: ${sticker.zIndex};
    `;
        return b `
      <div
        class="sticker"
        style=${style}
        title="${sticker.name}"
      >
        <div class="sticker-inner">
          ${sticker.image_url
            ? b `<img
                src="${sticker.image_url}"
                alt="${sticker.name}"
                loading="lazy"
              />`
            : b `<div style="width: 100%; height: 100%; background: #ccc; border-radius: 4px;"></div>`}
        </div>
      </div>
    `;
    }
    renderLoading() {
        return b `
      <div class="stickers-container">
        <div class="stickers-header">
          <div class="skeleton skeleton-text" style="width: 150px; margin: 0 auto;"></div>
          <div class="skeleton skeleton-text" style="width: 100px; margin: 0.5rem auto 0;"></div>
        </div>
        <div class="macbook">
          <div class="skeleton-lid"></div>
          <div class="macbook-base">
            <div class="macbook-notch"></div>
          </div>
        </div>
      </div>
    `;
    }
};
RubyeventsStickers.styles = [
    ...BaseComponent.styles,
    footerStyles,
    i `
      .stickers-container {
        max-width: 600px;
        margin: 0 auto;
      }

      .stickers-header {
        text-align: center;
        margin-bottom: 1rem;
      }

      .stickers-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .stickers-subtitle {
        margin: 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .macbook {
        position: relative;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      .macbook-lid {
        position: relative;
        aspect-ratio: 16 / 10;
        background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%);
        border-radius: 16px 16px 0 0;
        box-shadow:
          inset 0 0 0 2px #3a3a3a,
          inset 0 0 20px rgba(0, 0, 0, 0.5),
          0 -2px 10px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }

      .macbook-lid::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 60px;
        background: linear-gradient(145deg, #4a4a4a 0%, #3a3a3a 100%);
        border-radius: 8px;
        opacity: 0.3;
      }

      .macbook-lid::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05) 0%,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 100%
        );
        pointer-events: none;
      }

      .stickers-area {
        position: absolute;
        /* Extra padding to account for hover scale effect */
        inset: 30px;
      }

      .sticker {
        position: absolute;
        cursor: pointer;
        transition: filter 0.2s ease, z-index 0s;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
      }

      .sticker:hover {
        filter: drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5)) brightness(1.05);
        z-index: 100 !important;
      }

      .sticker-inner {
        width: 100%;
        height: 100%;
        transition: transform 0.15s ease;
      }

      .sticker:hover .sticker-inner {
        transform: scale(1.08);
      }

      .sticker img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
      }

      .macbook-base {
        height: 12px;
        background: linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 100%);
        border-radius: 0 0 4px 4px;
        box-shadow:
          0 2px 8px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }

      .macbook-notch {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: #1a1a1a;
        border-radius: 0 0 4px 4px;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-height: 150px;
        color: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 2rem;
      }

      .empty-state-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .empty-state-text {
        font-size: 0.875rem;
      }

      /* Loading skeleton */
      .skeleton-lid {
        position: relative;
        aspect-ratio: 16 / 10;
        background: linear-gradient(
          90deg,
          var(--rubyevents-background-alt) 25%,
          var(--rubyevents-border-color) 50%,
          var(--rubyevents-background-alt) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 16px 16px 0 0;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsStickers.prototype, "slug", void 0);
__decorate([
    n({ type: Number, attribute: 'min-size' })
], RubyeventsStickers.prototype, "minSize", void 0);
__decorate([
    n({ type: Number, attribute: 'max-size' })
], RubyeventsStickers.prototype, "maxSize", void 0);
__decorate([
    n({ type: Number })
], RubyeventsStickers.prototype, "seed", void 0);
__decorate([
    r()
], RubyeventsStickers.prototype, "placedStickers", void 0);
RubyeventsStickers = __decorate([
    t('rubyevents-stickers')
], RubyeventsStickers);

// RubyEvents Passport Component
// Displays stamps in a passport/stamp book style layout
let RubyeventsPassport = class RubyeventsPassport extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The user slug to fetch stamps for
         */
        this.slug = '';
        /**
         * The active tab
         */
        this.tab = 'all';
        /**
         * Whether to show section headers in 'all' view
         */
        this.showSections = true;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') || changedProperties.has('baseUrl')) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getStamps(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            this.error =
                err instanceof Error ? err.message : 'Failed to load stamps';
            this.loadingState = 'error';
        }
    }
    handleTabClick(tab) {
        this.tab = tab;
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const { grouped } = this.data;
        return b `
      <div class="passport-container">
        <div class="passport">
          <div class="passport-header">
            <div class="passport-emblem">💎</div>
            <h3 class="passport-title">Ruby Passport</h3>
            <p class="passport-subtitle">Conference Collection</p>
          </div>

          <div class="passport-owner">
            <div class="passport-owner-label">Passport Holder</div>
            <div class="passport-owner-name">${this.data.user.name}</div>
          </div>

          <div class="passport-stats">
            <div class="passport-stat">
              <div class="passport-stat-value">${grouped.countries.length}</div>
              <div class="passport-stat-label">Countries</div>
            </div>
            <div class="passport-stat">
              <div class="passport-stat-value">${grouped.events.length}</div>
              <div class="passport-stat-label">Events</div>
            </div>
            <div class="passport-stat">
              <div class="passport-stat-value">${grouped.achievements.length}</div>
              <div class="passport-stat-label">Badges</div>
            </div>
          </div>

          <div class="passport-tabs">
            <button
              class="passport-tab ${this.tab === 'all' ? 'active' : ''}"
              @click=${() => this.handleTabClick('all')}
            >
              All
            </button>
            <button
              class="passport-tab ${this.tab === 'countries' ? 'active' : ''}"
              @click=${() => this.handleTabClick('countries')}
            >
              Countries
            </button>
            <button
              class="passport-tab ${this.tab === 'events' ? 'active' : ''}"
              @click=${() => this.handleTabClick('events')}
            >
              Events
            </button>
            <button
              class="passport-tab ${this.tab === 'achievements' ? 'active' : ''}"
              @click=${() => this.handleTabClick('achievements')}
            >
              Badges
            </button>
          </div>

          <div class="stamps-page">
            ${this.renderStampsContent()}
          </div>

          ${this.showFooter
            ? b `
                <div class="powered-by">
                  Powered by
                  <a
                    href="${this.baseUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RubyEvents.org
                  </a>
                </div>
              `
            : ''}
        </div>
      </div>
    `;
    }
    renderStampsContent() {
        if (!this.data)
            return b ``;
        const { grouped } = this.data;
        switch (this.tab) {
            case 'countries':
                return this.renderStampSection(grouped.countries, 'No countries visited yet');
            case 'events':
                return this.renderStampSection(grouped.events, 'No event stamps collected yet');
            case 'achievements':
                return this.renderStampSection(grouped.achievements, 'No badges earned yet');
            default:
                return this.renderAllStamps();
        }
    }
    renderAllStamps() {
        if (!this.data)
            return b ``;
        const { grouped } = this.data;
        const hasAnyStamps = grouped.countries.length > 0 ||
            grouped.events.length > 0 ||
            grouped.achievements.length > 0;
        if (!hasAnyStamps) {
            return b `
        <div class="empty-page">
          <div class="empty-page-icon">📭</div>
          <div class="empty-page-text">No stamps collected yet</div>
        </div>
      `;
        }
        return b `
      ${grouped.countries.length > 0
            ? b `
            <div class="stamps-section">
              ${this.showSections
                ? b `<div class="section-label">Countries Visited</div>`
                : ''}
              <div class="stamps-grid">
                ${grouped.countries.map(stamp => this.renderStamp(stamp))}
              </div>
            </div>
          `
            : ''}
      ${grouped.events.length > 0
            ? b `
            <div class="stamps-section">
              ${this.showSections
                ? b `<div class="section-label">Event Stamps</div>`
                : ''}
              <div class="stamps-grid">
                ${grouped.events.map(stamp => this.renderStamp(stamp))}
              </div>
            </div>
          `
            : ''}
      ${grouped.achievements.length > 0
            ? b `
            <div class="stamps-section">
              ${this.showSections
                ? b `<div class="section-label">Achievement Badges</div>`
                : ''}
              <div class="stamps-grid">
                ${grouped.achievements.map(stamp => this.renderStamp(stamp))}
              </div>
            </div>
          `
            : ''}
    `;
    }
    renderStampSection(stamps, emptyMessage) {
        if (stamps.length === 0) {
            return b `
        <div class="empty-page">
          <div class="empty-page-icon">📭</div>
          <div class="empty-page-text">${emptyMessage}</div>
        </div>
      `;
        }
        return b `
      <div class="stamps-grid">
        ${stamps.map(stamp => this.renderStamp(stamp))}
      </div>
    `;
    }
    getStampRotation(stamp) {
        // Generate a consistent random rotation based on the stamp code
        let hash = 0;
        const str = stamp.code || stamp.name;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        // Return a rotation between -12 and 12 degrees
        return (Math.abs(hash) % 25) - 12;
    }
    renderStamp(stamp) {
        const rotation = this.getStampRotation(stamp);
        return b `
      <div class="stamp" title="${stamp.name}" style="transform: rotate(${rotation}deg)">
        ${stamp.image_url
            ? b `<img
              src="${stamp.image_url}"
              alt="${stamp.name}"
              loading="lazy"
            />`
            : b `<div class="stamp-placeholder">?</div>`}
      </div>
    `;
    }
    renderLoading() {
        return b `
      <div class="passport-container">
        <div class="skeleton-passport"></div>
      </div>
    `;
    }
};
RubyeventsPassport.styles = [
    ...BaseComponent.styles,
    footerStyles,
    tabStyles,
    i `
      .passport-container {
        max-width: 500px;
        margin: 0 auto;
      }

      .passport {
        position: relative;
        background: linear-gradient(145deg, #1a3a52 0%, #0d2233 100%);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow:
          0 10px 40px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        overflow: hidden;
      }

      .passport::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #c9a227 0%, #f4d35e 50%, #c9a227 100%);
      }

      .passport::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #c9a227 0%, #f4d35e 50%, #c9a227 100%);
      }

      .passport-header {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #f4d35e;
      }

      .passport-emblem {
        width: 48px;
        height: 48px;
        margin: 0 auto 0.5rem;
        background: linear-gradient(145deg, #f4d35e 0%, #c9a227 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      .passport-title {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #f4d35e;
      }

      .passport-subtitle {
        margin: 0.25rem 0 0;
        font-size: 0.75rem;
        color: rgba(244, 211, 94, 0.7);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .passport-owner {
        text-align: center;
        margin-bottom: 1rem;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
        border: 1px solid rgba(244, 211, 94, 0.2);
      }

      .passport-owner-label {
        font-size: 0.625rem;
        color: rgba(244, 211, 94, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.25rem;
      }

      .passport-owner-name {
        font-size: 1rem;
        font-weight: 600;
        color: white;
      }

      .passport-stats {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(244, 211, 94, 0.2);
      }

      .passport-stat {
        text-align: center;
      }

      .passport-stat-value {
        font-size: 1.25rem;
        font-weight: 700;
        color: #f4d35e;
      }

      .passport-stat-label {
        font-size: 0.625rem;
        color: rgba(244, 211, 94, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .passport-tabs {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid rgba(244, 211, 94, 0.2);
      }

      .passport-tab {
        flex: 1;
        padding: 0.5rem 0.25rem;
        font-size: 0.6875rem;
        font-weight: 500;
        color: rgba(244, 211, 94, 0.6);
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: color 0.15s ease, border-color 0.15s ease;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .passport-tab:hover {
        color: rgba(244, 211, 94, 0.9);
      }

      .passport-tab.active {
        color: #f4d35e;
        border-bottom-color: #f4d35e;
      }

      .stamps-page {
        background: #f5f0e1;
        border-radius: 4px;
        padding: 1rem;
        min-height: 200px;
        position: relative;
        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .stamps-page::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        bottom: 0;
        width: 1px;
        background: rgba(0, 0, 0, 0.1);
      }

      .stamps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 0.75rem;
      }

      .stamp {
        position: relative;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.2s ease, filter 0.2s ease;
      }

      .stamp:hover {
        transform: scale(1.15) rotate(0deg) !important;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        z-index: 1;
      }

      .stamp img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .stamp-placeholder {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.05);
        border: 2px dashed rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.2);
        font-size: 1.5rem;
      }

      .empty-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150px;
        color: rgba(0, 0, 0, 0.3);
        text-align: center;
      }

      .empty-page-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .empty-page-text {
        font-size: 0.875rem;
      }

      .section-label {
        font-size: 0.6875rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .stamps-section {
        margin-bottom: 1.5rem;
      }

      .stamps-section:last-child {
        margin-bottom: 0;
      }

      /* Loading skeleton */
      .skeleton-passport {
        background: linear-gradient(
          90deg,
          var(--rubyevents-background-alt) 25%,
          var(--rubyevents-border-color) 50%,
          var(--rubyevents-background-alt) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 8px;
        height: 400px;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      .powered-by {
        color: rgba(244, 211, 94, 0.6);
        border-top-color: rgba(244, 211, 94, 0.2);
      }

      .powered-by a {
        color: #f4d35e;
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsPassport.prototype, "slug", void 0);
__decorate([
    n({ type: String })
], RubyeventsPassport.prototype, "tab", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-sections' })
], RubyeventsPassport.prototype, "showSections", void 0);
RubyeventsPassport = __decorate([
    t('rubyevents-passport')
], RubyeventsPassport);

// RubyEvents Topic Component
// Displays talks for a specific topic
let RubyeventsTopic = class RubyeventsTopic extends BaseComponent {
    constructor() {
        super(...arguments);
        /**
         * The slug of the topic to display
         */
        this.slug = '';
        /**
         * Maximum number of talks to display
         */
        this.limit = 5;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.slug) {
            this.fetchData();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('slug') && this.slug) {
            this.fetchData();
        }
    }
    async fetchData() {
        if (!this.slug || !this.api)
            return;
        this.loadingState = 'loading';
        this.error = null;
        try {
            this.data = await this.api.getTopic(this.slug);
            this.loadingState = 'success';
        }
        catch (err) {
            const message = err instanceof Error ? err.message : '';
            if (message === 'Not found') {
                this.error = `Topic "${this.slug}" not found`;
            }
            else {
                this.error = 'Failed to load topic';
            }
            this.loadingState = 'error';
        }
    }
    renderContent() {
        if (!this.data) {
            return b ``;
        }
        const topic = this.data;
        const talks = topic.talks.slice(0, this.limit);
        const hasMore = topic.talks_count > talks.length;
        return b `
      <div class="topic-container card">
        <div class="topic-header">
          <h3 class="topic-title">
            <a href="${topic.url}" target="_blank" rel="noopener noreferrer">
              ${topic.name}
            </a>
          </h3>
          <div class="topic-meta">
            <span class="badge">${topic.talks_count} talks</span>
          </div>
          ${topic.description
            ? b `<p class="topic-description line-clamp-2">
                ${topic.description}
              </p>`
            : ''}
        </div>

        <div class="tab-container">
          ${talks.length > 0
            ? b `
                <div class="list">
                  ${talks.map(talk => this.renderTalk(talk))}
                </div>
                ${hasMore
                ? b `
                      <a
                        href="${topic.url}"
                        class="view-all-card"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View all ${topic.talks_count} talks on RubyEvents
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    `
                : ''}
              `
            : b `
                <div class="empty-state">
                  <p>No talks found for this topic.</p>
                </div>
              `}
          ${this.renderFooter()}
        </div>
      </div>
    `;
    }
    renderTalk(talk) {
        const speakerNames = talk.speakers.map(s => s.name).join(', ');
        return b `
      <a
        href="${talk.url}"
        class="list-item talk-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${talk.thumbnail_url
            ? b `<img
              class="talk-thumbnail"
              src="${talk.thumbnail_url}"
              alt="${talk.title}"
              loading="lazy"
            />`
            : b `<div class="talk-thumbnail skeleton"></div>`}
        <div class="list-item-content">
          <h4 class="list-item-title line-clamp-2">${talk.title}</h4>
          <p class="list-item-subtitle">
            ${speakerNames}${talk.event ? ` · ${talk.event.name}` : ''}
          </p>
        </div>
      </a>
    `;
    }
    renderLoading() {
        return b `
      <div class="topic-container card">
        <div class="topic-header">
          <div class="skeleton skeleton-text" style="width: 60%"></div>
          <div class="skeleton skeleton-text" style="width: 80px"></div>
        </div>
        <div class="tab-container">
          <div class="list">
            ${[1, 2, 3].map(() => b `
                <div class="list-item talk-item">
                  <div class="talk-thumbnail skeleton"></div>
                  <div class="list-item-content">
                    <div class="skeleton skeleton-text" style="width: 90%"></div>
                    <div class="skeleton skeleton-text" style="width: 60%"></div>
                  </div>
                </div>
              `)}
          </div>
        </div>
      </div>
    `;
    }
};
RubyeventsTopic.styles = [
    ...BaseComponent.styles,
    cardStyles,
    thumbnailStyles,
    avatarStyles,
    badgeStyles,
    listStyles,
    utilityStyles,
    footerStyles,
    i `
      .topic-container {
        max-width: 500px;
      }

      .topic-header {
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .topic-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .topic-title a {
        color: inherit;
        text-decoration: none;
      }

      .topic-title a:hover {
        color: var(--rubyevents-primary-color);
      }

      .topic-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .topic-description {
        margin: 0.75rem 0 0 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        line-height: 1.5;
      }

      .tab-container {
        padding: 1rem;
      }

      .talk-item {
        display: flex;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
      }

      .talk-item:hover {
        background: var(--rubyevents-background-alt);
      }

      .talk-thumbnail {
        width: 80px;
        aspect-ratio: 16 / 9;
        border-radius: 4px;
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .view-all-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
        color: var(--rubyevents-primary-color);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: background-color 0.15s ease;
      }

      .view-all-card:hover {
        background: var(--rubyevents-border-color);
      }

      .view-all-card svg {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--rubyevents-text-muted);
      }
    `,
];
__decorate([
    n({ type: String })
], RubyeventsTopic.prototype, "slug", void 0);
__decorate([
    n({ type: Number })
], RubyeventsTopic.prototype, "limit", void 0);
RubyeventsTopic = __decorate([
    t('rubyevents-topic')
], RubyeventsTopic);

// Dynamic slug fetching for Storybook controls
// Automatically use rubyevents.org when not on localhost
function getBaseUrl() {
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
async function getTalkSlugs() {
    if (talkSlugs === null) {
        talkSlugs = await fetchSlugs('talks');
    }
    return talkSlugs;
}
async function getEventSlugs() {
    if (eventSlugs === null) {
        eventSlugs = await fetchSlugs('events?slugs_only=true');
    }
    return eventSlugs;
}
async function getSpeakerSlugs() {
    if (speakerSlugs === null) {
        speakerSlugs = await fetchSlugs('speakers');
    }
    return speakerSlugs;
}
async function getUserSlugs() {
    if (userSlugs === null) {
        userSlugs = await fetchSlugs('profiles');
    }
    return userSlugs;
}
// Fallback slugs in case API is not available
const FALLBACK_TALK_SLUGS = [
    'keynote-rubyllm',
    'opening-keynote-rails-world-2024',
];
const FALLBACK_EVENT_SLUGS = [
    'sfruby-2025',
    'rails-world-2024',
    'railsconf-2024',
];
const FALLBACK_SPEAKER_SLUGS = [
    'tenderlove',
    'matz',
];
const FALLBACK_USER_SLUGS = [
    'marcoroth',
    'chaelcodes',
];
const FALLBACK_TOPIC_SLUGS = [
    'truffleruby',
    'ruby-on-rails',
    'hotwire',
    'testing',
];
// Initialize and export promises for preloading
Promise.all([
    getTalkSlugs(),
    getEventSlugs(),
    getSpeakerSlugs(),
    getUserSlugs(),
]);

export { FALLBACK_EVENT_SLUGS as F, FALLBACK_TALK_SLUGS as a, FALLBACK_USER_SLUGS as b, FALLBACK_SPEAKER_SLUGS as c, FALLBACK_TOPIC_SLUGS as d, getBaseUrl as g };
