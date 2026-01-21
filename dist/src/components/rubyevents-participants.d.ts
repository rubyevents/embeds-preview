import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { ParticipantsResponse } from '../types/api.js';
type ParticipantTab = 'all' | 'keynote_speakers' | 'speakers' | 'attendees';
export declare class RubyeventsParticipants extends BaseComponent<ParticipantsResponse> {
    static styles: import("lit").CSSResult[];
    /**
     * The slug of the event to display participants for
     */
    slug: string;
    /**
     * Filter to show specific participant types
     */
    filter: ParticipantTab;
    /**
     * Whether to show tabs for filtering
     */
    showTabs: boolean;
    /**
     * Compact mode: small avatars in a dense grid, no names, no groups
     */
    compact: boolean;
    private activeTab;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private setTab;
    protected renderContent(): TemplateResult;
    private renderTabs;
    private renderParticipants;
    private renderAllParticipants;
    private renderParticipant;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-participants': RubyeventsParticipants;
    }
}
export {};
