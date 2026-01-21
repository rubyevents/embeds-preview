import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { TopicResponse } from '../types/api.js';
export declare class RubyeventsTopic extends BaseComponent<TopicResponse> {
    static styles: import("lit").CSSResult[];
    /**
     * The slug of the topic to display
     */
    slug: string;
    /**
     * Maximum number of talks to display
     */
    limit: number;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    protected renderContent(): TemplateResult;
    private renderTalk;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-topic': RubyeventsTopic;
    }
}
