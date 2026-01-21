// RubyEvents Speaker Component
// Displays a speaker profile with tabs for talks and events
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, thumbnailStyles, avatarStyles, badgeStyles, listStyles, tabStyles, utilityStyles, } from '../base/styles.js';
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
            return html ``;
        }
        const speaker = this.data;
        return html `
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
            ? html `<p class="speaker-bio">${speaker.bio}</p>`
            : ''}
            <div class="speaker-links">
              ${speaker.twitter
            ? html `
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
            ? html `
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
            ? html `
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
            return html `<p class="text-muted text-sm">No talks found.</p>`;
        }
        const hasMore = this.data.talks_count > this.data.talks.length;
        return html `
      <div class="list">
        ${this.data.talks.map(talk => html `
            <a
              href="${this.buildUrl(`/talks/${talk.slug}`)}"
              class="list-item talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${talk.thumbnail_url
            ? html `<img
                    class="talk-thumbnail"
                    src="${talk.thumbnail_url}"
                    alt="${talk.title}"
                    loading="lazy"
                  />`
            : html `<div class="talk-thumbnail skeleton"></div>`}
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
            ? html `
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
            return html `<p class="text-muted text-sm">No events found.</p>`;
        }
        const hasMore = this.data.events_count > this.data.events.length;
        return html `
      <div class="list">
        ${this.data.events.map(event => html `
            <a
              href="${this.buildUrl(`/events/${event.slug}`)}"
              class="list-item event-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${event.avatar_url
            ? html `<img
                    class="event-avatar"
                    src="${event.avatar_url}"
                    alt="${event.name}"
                    loading="lazy"
                  />`
            : html `<div
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
            ? html `
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
        return html `
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
    css `
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
    property({ type: String })
], RubyeventsSpeaker.prototype, "slug", void 0);
__decorate([
    property({ type: String })
], RubyeventsSpeaker.prototype, "tab", void 0);
__decorate([
    state()
], RubyeventsSpeaker.prototype, "activeTab", void 0);
RubyeventsSpeaker = __decorate([
    customElement('rubyevents-speaker')
], RubyeventsSpeaker);
export { RubyeventsSpeaker };
//# sourceMappingURL=rubyevents-speaker.js.map