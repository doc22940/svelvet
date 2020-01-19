/* generated by Svelte v3.17.1 */
import {
    SvelteComponent,
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
import Header from './components/Header.js';
import Footer from './components/Footer/index.js';

function create_fragment(ctx) {
    let div;
    let t1;
    let t2;
    let current;
    const header = new Header({});
    const footer = new Footer({});
    return {
        c() {
            div = element('div');
            div.textContent = 'HEY';
            t1 = space();
            create_component(header.$$.fragment);
            t2 = space();
            create_component(footer.$$.fragment);
        },

        m(target, anchor) {
            insert(target, div, anchor);
            insert(target, t1, anchor);
            mount_component(header, target, anchor);
            insert(target, t2, anchor);
            mount_component(footer, target, anchor);
            current = true;
        },

        p: noop,

        i(local) {
            if (current) return;
            transition_in(header.$$.fragment, local);
            transition_in(footer.$$.fragment, local);
            current = true;
        },

        o(local) {
            transition_out(header.$$.fragment, local);
            transition_out(footer.$$.fragment, local);
            current = false;
        },

        d(detaching) {
            if (detaching) detach(div);
            if (detaching) detach(t1);
            destroy_component(header, detaching);
            if (detaching) detach(t2);
            destroy_component(footer, detaching);
        },
    };
}

class Component extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, null, create_fragment, safe_not_equal, {});
    }
}

export default Component;