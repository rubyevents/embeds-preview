// RubyEvents Topic Component
// Displays talks for a specific topic
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, thumbnailStyles, avatarStyles, badgeStyles, listStyles, utilityStyles, footerStyles, } from '../base/styles.js';
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
            return html ``;
        }
        const topic = this.data;
        const talks = topic.talks.slice(0, this.limit);
        const hasMore = topic.talks_count > talks.length;
        return html `
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
            ? html `<p class="topic-description line-clamp-2">
                ${topic.description}
              </p>`
            : ''}
        </div>

        <div class="tab-container">
          ${talks.length > 0
            ? html `
                <div class="list">
                  ${talks.map(talk => this.renderTalk(talk))}
                </div>
                ${hasMore
                ? html `
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
            : html `
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
        return html `
      <a
        href="${talk.url}"
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
            ${speakerNames}${talk.event ? ` · ${talk.event.name}` : ''}
          </p>
        </div>
      </a>
    `;
    }
    renderLoading() {
        return html `
      <div class="topic-container card">
        <div class="topic-header">
          <div class="skeleton skeleton-text" style="width: 60%"></div>
          <div class="skeleton skeleton-text" style="width: 80px"></div>
        </div>
        <div class="tab-container">
          <div class="list">
            ${[1, 2, 3].map(() => html `
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
    css `
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
    property({ type: String })
], RubyeventsTopic.prototype, "slug", void 0);
__decorate([
    property({ type: Number })
], RubyeventsTopic.prototype, "limit", void 0);
RubyeventsTopic = __decorate([
    customElement('rubyevents-topic')
], RubyeventsTopic);
export { RubyeventsTopic };
//# sourceMappingURL=rubyevents-topic.js.map