import {withPluginApi} from 'discourse/lib/plugin-api';

export default {
    name: 'Discourse-Themes',

    initialize() {
        withPluginApi('0.1' api => {
            api.decorateWidget('hamburger-menu:generalLinks', () => {
                return { href: 'https://eviltrout.com', rawLabel: 'Change Theme' };
            })
        });
    }
}
