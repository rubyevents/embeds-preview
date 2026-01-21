// RubyEvents Event Card Component
// Displays a compact 16:9 event card with minimal details
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, badgeStyles } from '../base/styles.js';
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
            return html ``;
        }
        const event = this.data;
        const backgroundStyle = event.featured_background
            ? `background: ${event.featured_background}`
            : '';
        return html `
      <div class="event-card">
        <a
          class="event-card-link"
          href="${event.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="event-background" style=${backgroundStyle}>
            ${event.banner_url
            ? html `<img
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
            ? html `<img
                  class="event-avatar"
                  src="${event.avatar_url}"
                  alt=""
                  loading="lazy"
                />`
            : ''}

            ${this.showKind && event.kind
            ? html `
                  <div class="event-kind">
                    <span class="badge">${event.kind}</span>
                  </div>
                `
            : ''}

            <h3 class="event-title">${event.name}</h3>

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
        return html `<div class="skeleton-card"></div>`;
    }
};
RubyeventsEventCard.styles = [
    ...BaseComponent.styles,
    cardStyles,
    badgeStyles,
    css `
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
    property({ type: String })
], RubyeventsEventCard.prototype, "slug", void 0);
__decorate([
    property({ type: String, reflect: true })
], RubyeventsEventCard.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-kind' })
], RubyeventsEventCard.prototype, "showKind", void 0);
RubyeventsEventCard = __decorate([
    customElement('rubyevents-event-card')
], RubyeventsEventCard);
export { RubyeventsEventCard };
//# sourceMappingURL=rubyevents-event-card.js.map