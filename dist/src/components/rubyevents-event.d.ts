import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { EventDetail } from '../types/api.js';
export declare class RubyeventsEvent extends BaseComponent<EventDetail> {
    static styles: import("lit").CSSResult[];
    /**
     * The event slug to fetch
     */
    slug: string;
    /**
     * Whether to show participant avatars
     */
    showParticipants: boolean;
    /**
     * Maximum number of participant avatars to show per category
     */
    maxAvatars: number;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private getEventInitial;
    protected renderContent(): TemplateResult;
    private renderParticipants;
    private renderParticipantGroup;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-event': RubyeventsEvent;
    }
}
