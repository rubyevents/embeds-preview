// RubyEvents Passport Component
// Displays stamps in a passport/stamp book style layout
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { footerStyles, tabStyles } from '../base/styles.js';
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
            return html ``;
        }
        const { grouped } = this.data;
        return html `
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
            ? html `
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
            return html ``;
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
            return html ``;
        const { grouped } = this.data;
        const hasAnyStamps = grouped.countries.length > 0 ||
            grouped.events.length > 0 ||
            grouped.achievements.length > 0;
        if (!hasAnyStamps) {
            return html `
        <div class="empty-page">
          <div class="empty-page-icon">📭</div>
          <div class="empty-page-text">No stamps collected yet</div>
        </div>
      `;
        }
        return html `
      ${grouped.countries.length > 0
            ? html `
            <div class="stamps-section">
              ${this.showSections
                ? html `<div class="section-label">Countries Visited</div>`
                : ''}
              <div class="stamps-grid">
                ${grouped.countries.map(stamp => this.renderStamp(stamp))}
              </div>
            </div>
          `
            : ''}
      ${grouped.events.length > 0
            ? html `
            <div class="stamps-section">
              ${this.showSections
                ? html `<div class="section-label">Event Stamps</div>`
                : ''}
              <div class="stamps-grid">
                ${grouped.events.map(stamp => this.renderStamp(stamp))}
              </div>
            </div>
          `
            : ''}
      ${grouped.achievements.length > 0
            ? html `
            <div class="stamps-section">
              ${this.showSections
                ? html `<div class="section-label">Achievement Badges</div>`
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
            return html `
        <div class="empty-page">
          <div class="empty-page-icon">📭</div>
          <div class="empty-page-text">${emptyMessage}</div>
        </div>
      `;
        }
        return html `
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
        return html `
      <div class="stamp" title="${stamp.name}" style="transform: rotate(${rotation}deg)">
        ${stamp.image_url
            ? html `<img
              src="${stamp.image_url}"
              alt="${stamp.name}"
              loading="lazy"
            />`
            : html `<div class="stamp-placeholder">?</div>`}
      </div>
    `;
    }
    renderLoading() {
        return html `
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
    css `
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
    property({ type: String })
], RubyeventsPassport.prototype, "slug", void 0);
__decorate([
    property({ type: String })
], RubyeventsPassport.prototype, "tab", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-sections' })
], RubyeventsPassport.prototype, "showSections", void 0);
RubyeventsPassport = __decorate([
    customElement('rubyevents-passport')
], RubyeventsPassport);
export { RubyeventsPassport };
//# sourceMappingURL=rubyevents-passport.js.map