import { css } from 'lit';
export const baseStyles = css `
  :host {
    --rubyevents-primary-color: var(--rubyevents-primary, #dc143c);
    --rubyevents-secondary-color: var(--rubyevents-secondary, #7a4ec2);
    --rubyevents-text-color: var(--rubyevents-text, #261b23);
    --rubyevents-text-muted: var(--rubyevents-muted, #6b7280);
    --rubyevents-background: var(--rubyevents-bg, #ffffff);
    --rubyevents-background-alt: var(--rubyevents-bg-alt, #f8f9fa);
    --rubyevents-border-color: var(--rubyevents-border, #e5e7eb);
    --rubyevents-border-radius: var(--rubyevents-radius, 8px);
    --rubyevents-font-family: var(
      --rubyevents-font,
      Inter,
      system-ui,
      -apple-system,
      sans-serif
    );

    display: block;
    font-family: var(--rubyevents-font-family);
    color: var(--rubyevents-text-color);
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: var(--rubyevents-primary-color);
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
export const cardStyles = css `
  .card {
    background: var(--rubyevents-background);
    border: 1px solid var(--rubyevents-border-color);
    border-radius: var(--rubyevents-border-radius);
    overflow: hidden;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .card-subtitle {
    margin: 0;
    font-size: 0.875rem;
    color: var(--rubyevents-text-muted);
  }
`;
export const thumbnailStyles = css `
  .thumbnail {
    position: relative;
    aspect-ratio: 16 / 9;
    background: var(--rubyevents-background-alt);
    overflow: hidden;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
  }

  .duration {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.125rem 0.375rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.75rem;
    border-radius: 4px;
  }
`;
export const avatarStyles = css `
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    background: var(--rubyevents-background-alt);
  }

  .avatar-sm {
    width: 2rem;
    height: 2rem;
  }

  .avatar-lg {
    width: 4rem;
    height: 4rem;
  }

  .avatar-xl {
    width: 6rem;
    height: 6rem;
  }

  .avatar-group {
    display: flex;
    flex-direction: row;
  }

  .avatar-group .avatar {
    margin-left: -0.5rem;
    border: 2px solid var(--rubyevents-background);
  }

  .avatar-group .avatar:first-child {
    margin-left: 0;
  }
`;
export const badgeStyles = css `
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    background: var(--rubyevents-background-alt);
    color: var(--rubyevents-text-muted);
  }

  .badge-primary {
    background: var(--rubyevents-primary-color);
    color: white;
  }

  .badge-secondary {
    background: var(--rubyevents-secondary-color);
    color: white;
  }
`;
export const listStyles = css `
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--rubyevents-background);
    border: 1px solid var(--rubyevents-border-color);
    border-radius: var(--rubyevents-border-radius);
    transition: background-color 0.15s ease;
  }

  .list-item:hover {
    background: var(--rubyevents-background-alt);
  }

  .list-item-content {
    flex: 1;
    min-width: 0;
  }

  .list-item-title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-item-subtitle {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--rubyevents-text-muted);
  }
`;
export const tabStyles = css `
  .tabs {
    display: flex;
    gap: 0.25rem;
    border-bottom: 1px solid var(--rubyevents-border-color);
    margin-bottom: 1rem;
  }

  .tab {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--rubyevents-text-muted);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .tab:hover {
    color: var(--rubyevents-text-color);
  }

  .tab.active {
    color: var(--rubyevents-primary-color);
    border-bottom-color: var(--rubyevents-primary-color);
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }
`;
export const loadingStyles = css `
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: var(--rubyevents-text-muted);
  }

  .loading-spinner {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid var(--rubyevents-border-color);
    border-top-color: var(--rubyevents-primary-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .skeleton {
    background: linear-gradient(
      90deg,
      var(--rubyevents-background-alt) 25%,
      var(--rubyevents-border-color) 50%,
      var(--rubyevents-background-alt) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .skeleton-text {
    height: 1rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-text:last-child {
    width: 60%;
  }

  .skeleton-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .skeleton-thumbnail {
    aspect-ratio: 16 / 9;
  }
`;
export const errorStyles = css `
  .error {
    padding: 1rem;
    text-align: center;
    color: var(--rubyevents-text-muted);
  }

  .error-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .error-message {
    font-size: 0.875rem;
  }
`;
export const gridStyles = css `
  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    .grid-2,
    .grid-3 {
      grid-template-columns: 1fr;
    }
  }
`;
export const utilityStyles = css `
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-xs {
    font-size: 0.75rem;
  }

  .text-muted {
    color: var(--rubyevents-text-muted);
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
// Footer with "Powered by" attribution
export const footerStyles = css `
  .powered-by {
    margin-top: 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: right;
    font-size: 0.6875rem;
    color: var(--rubyevents-text-muted);
    opacity: 0.7;
  }

  .powered-by a {
    color: inherit;
  }

  .powered-by a:hover {
    color: var(--rubyevents-primary-color);
  }
`;
//# sourceMappingURL=styles.js.map