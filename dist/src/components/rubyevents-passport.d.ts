import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { StampsResponse } from '../types/api.js';
type PassportTab = 'all' | 'countries' | 'events' | 'achievements';
export declare class RubyeventsPassport extends BaseComponent<StampsResponse> {
    static styles: import("lit").CSSResult[];
    /**
     * The user slug to fetch stamps for
     */
    slug: string;
    /**
     * The active tab
     */
    tab: PassportTab;
    /**
     * Whether to show section headers in 'all' view
     */
    showSections: boolean;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private handleTabClick;
    protected renderContent(): TemplateResult;
    private renderStampsContent;
    private renderAllStamps;
    private renderStampSection;
    private getStampRotation;
    private renderStamp;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-passport': RubyeventsPassport;
    }
}
export {};
