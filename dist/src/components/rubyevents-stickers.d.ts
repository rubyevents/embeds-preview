import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { StickersResponse } from '../types/api.js';
export declare class RubyeventsStickers extends BaseComponent<StickersResponse> {
    static styles: import("lit").CSSResult[];
    /**
     * The user slug to fetch stickers for
     */
    slug: string;
    /**
     * Minimum sticker size in pixels
     */
    minSize: number;
    /**
     * Maximum sticker size in pixels
     */
    maxSize: number;
    /**
     * Seed for random placement (for consistent layouts)
     */
    seed: number;
    private placedStickers;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private seededRandom;
    private checkOverlap;
    private findNonOverlappingPosition;
    private placeStickers;
    protected renderContent(): TemplateResult;
    private renderSticker;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-stickers': RubyeventsStickers;
    }
}
