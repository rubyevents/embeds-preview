// RubyEvents Talk Component
// Displays a single talk card with video thumbnail, title, speakers, and event info
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, thumbnailStyles, avatarStyles, badgeStyles, utilityStyles, } from '../base/styles.js';
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
            return html ``;
        }
        const talk = this.data;
        const speakerNames = talk.speakers.map(s => s.name).join(', ');
        return html `
      <div class="talk-card card">
        <a
          href="${talk.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${talk.title}"
        >
          <div class="thumbnail">
            ${talk.thumbnail_url
            ? html `<img
                  src="${talk.thumbnail_url}"
                  alt="${talk.title}"
                  loading="lazy"
                />`
            : html `<div class="skeleton skeleton-thumbnail"></div>`}
            ${talk.duration_in_seconds
            ? html `<span class="duration"
                  >${this.formatDuration(talk.duration_in_seconds)}</span
                >`
            : ''}
          </div>
          <div class="card-body">
            <h3 class="card-title line-clamp-2">${talk.title}</h3>

            ${talk.speakers.length > 0
            ? html `
                  <div class="speakers">
                    <div class="avatar-group">
                      ${talk.speakers.slice(0, 3).map(speaker => html `
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
            ? html `
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
                ? html `
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
            ? html `
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
        return html `
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
    css `
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
    property({ type: String })
], RubyeventsTalk.prototype, "slug", void 0);
RubyeventsTalk = __decorate([
    customElement('rubyevents-talk')
], RubyeventsTalk);
export { RubyeventsTalk };
//# sourceMappingURL=rubyevents-talk.js.map