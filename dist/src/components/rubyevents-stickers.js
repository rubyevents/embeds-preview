// RubyEvents Stickers Component
// Displays stickers on a MacBook-style laptop lid with random placement
import { __decorate } from "tslib";
import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '../base/BaseComponent.js';
import { footerStyles } from '../base/styles.js';
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
            return html ``;
        }
        return html `
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
            : html `
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
        return html `
      <div
        class="sticker"
        style=${style}
        title="${sticker.name}"
      >
        <div class="sticker-inner">
          ${sticker.image_url
            ? html `<img
                src="${sticker.image_url}"
                alt="${sticker.name}"
                loading="lazy"
              />`
            : html `<div style="width: 100%; height: 100%; background: #ccc; border-radius: 4px;"></div>`}
        </div>
      </div>
    `;
    }
    renderLoading() {
        return html `
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
    css `
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
    property({ type: String })
], RubyeventsStickers.prototype, "slug", void 0);
__decorate([
    property({ type: Number, attribute: 'min-size' })
], RubyeventsStickers.prototype, "minSize", void 0);
__decorate([
    property({ type: Number, attribute: 'max-size' })
], RubyeventsStickers.prototype, "maxSize", void 0);
__decorate([
    property({ type: Number })
], RubyeventsStickers.prototype, "seed", void 0);
__decorate([
    state()
], RubyeventsStickers.prototype, "placedStickers", void 0);
RubyeventsStickers = __decorate([
    customElement('rubyevents-stickers')
], RubyeventsStickers);
export { RubyeventsStickers };
//# sourceMappingURL=rubyevents-stickers.js.map