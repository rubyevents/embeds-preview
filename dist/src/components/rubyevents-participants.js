// RubyEvents Participants Component
// Displays participants/attendees of an event
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { cardStyles, avatarStyles, badgeStyles, tabStyles, gridStyles, utilityStyles, } from '../base/styles.js';
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
            return html ``;
        }
        const { event, counts } = this.data;
        return html `
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
            return html ``;
        const { counts } = this.data;
        return html `
      <div class="tabs">
        <button
          class="tab ${this.activeTab === 'all' ? 'active' : ''}"
          @click=${() => this.setTab('all')}
        >
          All (${counts.total})
        </button>
        ${counts.keynote_speakers > 0
            ? html `
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
            ? html `
              <button
                class="tab ${this.activeTab === 'speakers' ? 'active' : ''}"
                @click=${() => this.setTab('speakers')}
              >
                Speakers (${counts.speakers})
              </button>
            `
            : ''}
        ${counts.attendees > 0
            ? html `
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
            return html ``;
        const { participants, counts } = this.data;
        if (counts.total === 0) {
            return html `
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
            return html `
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
            return html `
        <div class="empty-state">
          <p>No ${this.activeTab.replace('_', ' ')} found.</p>
        </div>
      `;
        }
        return html `
      <div class="participants-grid">
        ${participantList.map(p => this.renderParticipant(p))}
      </div>
    `;
    }
    renderAllParticipants() {
        if (!this.data)
            return html ``;
        const { participants } = this.data;
        return html `
      ${participants.keynote_speakers.length > 0
            ? html `
            <h4 class="section-title">Keynote Speakers</h4>
            <div class="participants-grid">
              ${participants.keynote_speakers.map(p => this.renderParticipant(p))}
            </div>
          `
            : ''}
      ${participants.speakers.length > 0
            ? html `
            <h4 class="section-title">Speakers</h4>
            <div class="participants-grid">
              ${participants.speakers.map(p => this.renderParticipant(p))}
            </div>
          `
            : ''}
      ${participants.attendees.length > 0
            ? html `
            <h4 class="section-title">Attendees</h4>
            <div class="participants-grid">
              ${participants.attendees.map(p => this.renderParticipant(p))}
            </div>
          `
            : ''}
    `;
    }
    renderParticipant(participant) {
        return html `
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
        return html `
      <div class="participants-container card">
        <div class="participants-header">
          <div class="skeleton skeleton-text" style="width: 200px"></div>
          <div class="skeleton skeleton-text" style="width: 100px"></div>
        </div>
        <div class="tab-container">
          <div class="participants-grid">
            ${[1, 2, 3, 4, 5, 6].map(() => html `
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
    css `
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
    property({ type: String })
], RubyeventsParticipants.prototype, "slug", void 0);
__decorate([
    property({ type: String })
], RubyeventsParticipants.prototype, "filter", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-tabs' })
], RubyeventsParticipants.prototype, "showTabs", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RubyeventsParticipants.prototype, "compact", void 0);
__decorate([
    state()
], RubyeventsParticipants.prototype, "activeTab", void 0);
RubyeventsParticipants = __decorate([
    customElement('rubyevents-participants')
], RubyeventsParticipants);
export { RubyeventsParticipants };
//# sourceMappingURL=rubyevents-participants.js.map