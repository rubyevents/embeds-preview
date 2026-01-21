import { LitElement, TemplateResult } from 'lit';
import { ApiClient } from '../utils/api.js';
import type { LoadingState } from '../types/api.js';
export declare abstract class BaseComponent<T> extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * Base URL for the RubyEvents API.
     * Defaults to https://rubyevents.org
     */
    baseUrl: string;
    /**
     * Whether to show the "Powered by RubyEvents" footer.
     * Add the `show-footer` attribute to display the footer.
     */
    showFooter: boolean;
    protected loadingState: LoadingState;
    protected data: T | null;
    protected error: string | null;
    protected api: ApiClient | null;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    protected abstract fetchData(): Promise<void>;
    protected abstract renderContent(): TemplateResult;
    protected renderLoading(): TemplateResult;
    protected renderError(): TemplateResult;
    protected renderFooter(): TemplateResult;
    protected formatDuration(seconds: number): string;
    protected formatDate(dateString: string): string;
    protected buildUrl(path: string): string;
    render(): TemplateResult;
}
export declare const skeletonCard: import("lit").CSSResult;
