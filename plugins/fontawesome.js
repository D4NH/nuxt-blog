import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faTwitterSquare,
    faTwitch,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons';
import {
    faBirthdayCake,
    faMapMarkerAlt,
    faEnvelopeOpenText,
    faCalendarDay,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

library.add(
    faBirthdayCake,
    faMapMarkerAlt,
    faEnvelopeOpenText,
    faCalendarDay,
    faBars,
    faCalendar,
    faTwitterSquare,
    faTwitch,
    faGithubSquare
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon, {});
});
