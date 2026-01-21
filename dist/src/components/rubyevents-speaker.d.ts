import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { SpeakerDetail } from '../types/api.js';
type SpeakerTab = 'talks' | 'events';
export declare class RubyeventsSpeaker extends BaseComponent<SpeakerDetail> {
    static styles: import("lit").CSSResult[];
    /**
     * The slug of the speaker to display
     */
    slug: string;
    /**
     * The active tab to display
     */
    tab: SpeakerTab;
    private activeTab;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private setTab;
    protected renderContent(): TemplateResult;
    private renderTalks;
    private getEventInitial;
    private getEventBackground;
    private renderEvents;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-speaker': RubyeventsSpeaker;
    }
}
export {};
