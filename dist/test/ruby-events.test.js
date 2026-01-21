import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/ruby-events.js';
describe('RubyeventsTalk', () => {
    it('has a default slug of empty string', async () => {
        const el = await fixture(html `<rubyevents-talk></rubyevents-talk>`);
        expect(el.slug).to.equal('');
    });
    it('can set the slug via attribute', async () => {
        const el = await fixture(html `<rubyevents-talk slug="my-talk"></rubyevents-talk>`);
        expect(el.slug).to.equal('my-talk');
    });
    it('can set the base-url via attribute', async () => {
        const el = await fixture(html `<rubyevents-talk
        base-url="https://example.com"
      ></rubyevents-talk>`);
        expect(el.baseUrl).to.equal('https://example.com');
    });
    it('has a default showFooter of true', async () => {
        const el = await fixture(html `<rubyevents-talk></rubyevents-talk>`);
        expect(el.showFooter).to.equal(true);
    });
    it('can disable footer via attribute', async () => {
        const el = await fixture(html `<rubyevents-talk .showFooter=${false}></rubyevents-talk>`);
        expect(el.showFooter).to.equal(false);
    });
});
//# sourceMappingURL=ruby-events.test.js.map