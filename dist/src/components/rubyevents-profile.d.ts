import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { Profile } from '../types/api.js';
export declare class RubyeventsProfile extends BaseComponent<Profile> {
    static styles: import("lit").CSSResult[];
    /**
     * The slug of the profile to display
     */
    slug: string;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private formatAttendedAs;
    protected renderContent(): TemplateResult;
    private getEventInitial;
    private getEventBackground;
    private renderUpcomingEvents;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-profile': RubyeventsProfile;
    }
}
