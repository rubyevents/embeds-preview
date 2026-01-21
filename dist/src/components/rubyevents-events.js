// RubyEvents Events Component
// Displays a list of events with filtering options
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, listStyles, badgeStyles, utilityStyles, avatarStyles, } from '../base/styles.js';
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
            return html ``;
        }
        const events = this.data.events.slice(0, this.limit);
        return html `
      <div class="events-container">
        <div class="events-header">
          <h3 class="events-title">${this.getTitle()}</h3>
          ${this.showFilter
            ? html `
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
            ? html `
              <div class="list">
                ${events.map(event => this.renderEvent(event))}
              </div>
            `
            : html `
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
        return html `
      <a
        href="${event.url}"
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
          <p class="list-item-subtitle">${event.location}</p>
          ${event.start_date
            ? html `
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
        return html `
      <div class="events-container">
        <div class="events-header">
          <div class="skeleton skeleton-text" style="width: 150px"></div>
        </div>
        <div class="list">
          ${[1, 2, 3].map(() => html `
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
    css `
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
    property({ type: String })
], RubyeventsEvents.prototype, "filter", void 0);
__decorate([
    property({ type: Number })
], RubyeventsEvents.prototype, "limit", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-filter' })
], RubyeventsEvents.prototype, "showFilter", void 0);
__decorate([
    property({ type: String })
], RubyeventsEvents.prototype, "title", void 0);
RubyeventsEvents = __decorate([
    customElement('rubyevents-events')
], RubyeventsEvents);
export { RubyeventsEvents };
//# sourceMappingURL=rubyevents-events.js.map