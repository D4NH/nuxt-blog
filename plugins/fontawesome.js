import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faGithub,
    faInstagram,
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons';
import {
    faBirthdayCake,
    faMapMarkerAlt,
    faEnvelopeOpenText,
    faCalendarDay,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faFilePdf } from '@fortawesome/free-regular-svg-icons';

library.add(
    faBirthdayCake,
    faMapMarkerAlt,
    faEnvelopeOpenText,
    faCalendarDay,
    faBars,
    faCalendar,
    faGithub,
    faInstagram,
    faGithubSquare,
    faFilePdf
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon, {});
});
