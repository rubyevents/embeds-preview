import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { EventsResponse } from '../types/api.js';
type EventFilter = 'upcoming' | 'past' | 'all';
export declare class RubyeventsEvents extends BaseComponent<EventsResponse> {
    static styles: import("lit").CSSResult[];
    /**
     * Filter events by: 'upcoming', 'past', or 'all'
     */
    filter: EventFilter;
    /**
     * Maximum number of events to display
     */
    limit: number;
    /**
     * Whether to show the filter dropdown
     */
    showFilter: boolean;
    /**
     * Custom title for the events list
     */
    title: string;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    private handleFilterChange;
    private getTitle;
    protected renderContent(): TemplateResult;
    private getEventInitial;
    private getEventBackground;
    private renderEvent;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-events': RubyeventsEvents;
    }
}
export {};
