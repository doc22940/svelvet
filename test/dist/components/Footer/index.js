/* generated by Svelte v3.17.1 */
import {
    SvelteComponent,
    append,
    create_component,
    destroy_component,
    detach,
    element,
    init,
    insert,
    mount_component,
    noop,
    safe_not_equal,
    space,
    transition_in,
    transition_out,
} from '/web_modules/svelte/internal.js';
import Links from './Links.js';

function create_fragment(ctx) {
    let footer;
    let p;
    let t1;
    let current;
    const links = new Links({});
    return {
        c() {
            footer = element('footer');
            p = element('p');
            p.textContent = `${FOOTER_TEXT}`;
            t1 = space();
            create_component(links.$$.fragment);
        },

        m(target, anchor) {
            insert(target, footer, anchor);
            append(footer, p);
            append(footer, t1);
            mount_component(links, footer, null);
            current = true;
        },

        p: noop,

        i(local) {
            if (current) return;
            transition_in(links.$$.fragment, local);
            current = true;
        },

        o(local) {
            transition_out(links.$$.fragment, local);
            current = false;
        },

        d(detaching) {
            if (detaching) detach(footer);
            destroy_component(links);
        },
    };
}

const FOOTER_TEXT = 'dis is svelte';

class Component extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, null, create_fragment, safe_not_equal, {});
    }
}

export default Component;
