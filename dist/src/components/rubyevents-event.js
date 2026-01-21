// RubyEvents Event Component
// Displays a single event with details and participant avatars
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, avatarStyles, badgeStyles, utilityStyles, footerStyles, } from '../base/styles.js';
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
            return html ``;
        }
        const event = this.data;
        return html `
      <div class="card event-card">
        <div class="event-header">
          ${event.banner_url
            ? html `<img
                class="event-banner"
                src="${event.banner_url}"
                alt=""
                loading="lazy"
                style="background: ${event.featured_background || 'var(--rubyevents-primary-color)'}"
              />`
            : html `<div
                class="event-banner"
                style="background: ${event.featured_background || 'var(--rubyevents-primary-color)'}"
              ></div>`}

          <div class="event-avatar-container">
            ${event.avatar_url
            ? html `<img
                  class="event-avatar"
                  src="${event.avatar_url}"
                  alt="${event.name}"
                  loading="lazy"
                />`
            : html `<div class="event-avatar-placeholder">
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
            ? html `
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
            ? html `
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
            ? html `
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
            ? html `
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
            return html ``;
        }
        return html `
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
        return html `
      <div class="participants-section">
        <div class="participants-label">${label}</div>
        <div class="participants-avatars">
          ${displayParticipants.map(participant => html `
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
            ? html `<span class="more-participants">+${remainingCount}</span>`
            : ''}
        </div>
      </div>
    `;
    }
    renderLoading() {
        return html `
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
    css `
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
    property({ type: String })
], RubyeventsEvent.prototype, "slug", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-participants' })
], RubyeventsEvent.prototype, "showParticipants", void 0);
__decorate([
    property({ type: Number, attribute: 'max-avatars' })
], RubyeventsEvent.prototype, "maxAvatars", void 0);
RubyeventsEvent = __decorate([
    customElement('rubyevents-event')
], RubyeventsEvent);
export { RubyeventsEvent };
//# sourceMappingURL=rubyevents-event.js.map