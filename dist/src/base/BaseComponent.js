// Base Component for RubyEvents Embed Components
import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { getApiClient } from '../utils/api.js';
import { baseStyles, loadingStyles, errorStyles, footerStyles, } from './styles.js';
export class BaseComponent extends LitElement {
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
        return html `
      <div class="loading">
        <div class="loading-spinner"></div>
      </div>
    `;
    }
    renderError() {
        return html `
      <div class="error">
        <div class="error-icon">!</div>
        <p class="error-message">${this.error || 'Something went wrong'}</p>
      </div>
    `;
    }
    renderFooter() {
        if (!this.showFooter) {
            return html ``;
        }
        return html `
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
                return html ``;
        }
    }
}
BaseComponent.styles = [baseStyles, loadingStyles, errorStyles, footerStyles];
__decorate([
    property({ type: String, attribute: 'base-url' })
], BaseComponent.prototype, "baseUrl", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-footer' })
], BaseComponent.prototype, "showFooter", void 0);
__decorate([
    state()
], BaseComponent.prototype, "loadingState", void 0);
__decorate([
    state()
], BaseComponent.prototype, "data", void 0);
__decorate([
    state()
], BaseComponent.prototype, "error", void 0);
// Skeleton components for loading states
export const skeletonCard = css `
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
//# sourceMappingURL=BaseComponent.js.map