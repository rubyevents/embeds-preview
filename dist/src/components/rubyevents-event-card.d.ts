import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { EventDetail } from '../types/api.js';
export declare class RubyeventsEventCard extends BaseComponent<EventDetail> {
    static styles: import("lit").CSSResult[];
    /**
     * The event slug to fetch
     */
    slug: string;
    /**
     * Size variant: 'sm', 'md' (default), or 'lg'
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * Whether to show the event kind badge
     */
    showKind: boolean;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    protected renderContent(): TemplateResult;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-event-card': RubyeventsEventCard;
    }
}
