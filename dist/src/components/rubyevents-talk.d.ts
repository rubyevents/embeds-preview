import { TemplateResult } from 'lit';
import { BaseComponent } from '../base/BaseComponent.js';
import type { Talk } from '../types/api.js';
export declare class RubyeventsTalk extends BaseComponent<Talk> {
    static styles: import("lit").CSSResult[];
    /**
     * The slug of the talk to display
     */
    slug: string;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected fetchData(): Promise<void>;
    protected renderContent(): TemplateResult;
    protected renderLoading(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rubyevents-talk': RubyeventsTalk;
    }
}
