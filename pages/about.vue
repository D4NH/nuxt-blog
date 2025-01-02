<script setup lang="ts">
import Intro from '../components/intro.vue';

const formatDate = (date: string) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};

useHead({
    title: 'About me | Danh Nguyen'
});
</script>

<template>
    <Intro img="/img/overmij.jpg">
        <h1 class="fs-4">About me</h1>
        <p>
            Frontend Developer at
            <NuxtLink to="https://www.zilverenkruis.nl/">
                Zilveren Kruis
            </NuxtLink>
        </p>

        <ul class="list--info list-inline my-4">
            <li class="list-inline-item px-1">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'envelope-open-text']"
                />
                nguyen.dtd@gmail.com
            </li>
            <li class="list-inline-item px-1">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'birthday-cake']"
                />
                {{ formatDate('1987-02-27') }}
            </li>
            <li class="list-inline-item px-1">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'map-marker-alt']"
                />
                The Netherlands
            </li>
            <li class="list-inline-item px-1">
                <fa-icon
                    class="mr-1"
                    :icon="['far', 'fa-file-pdf']"
                />
                <NuxtLink
                    to="/danhnguyen_cv.pdf"
                    external
                    target="_blank"
                >
                    Resume
                </NuxtLink>
            </li>
        </ul>
        <p class="w-75 mx-auto mb-0">
            My journey in web development began in 2007, and since then, I've
            had the opportunity to work on a diverse range of projects, from
            managing online content platforms at Philips to leading frontend
            development for complex applications in the public broadcasting and
            healthcare sectors.
        </p>
    </Intro>

    <div class="row justify-content-center mb-5">
        <div class="col-md-8">
            <h2 class="text-center mb-5 fs-5 fw-medium">Experience</h2>

            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Achmea - Zilveren Kruis</div>
                        <p class="mb-0">Frontend Developer</p>
                        <small class="d-block mb-2">Vue</small>
                        <p class="mb-0">Projects</p>
                        <ul>
                            <li>
                                Zilveren Kruis -
                                <a
                                    href="https://www.zilverenkruis.nl/consumenten"
                                >
                                    zilverenkruis.nl
                                </a>
                            </li>
                            <li>
                                Salesfunnel -
                                <a
                                    href="https://www.zilverenkruis.nl/consumenten/zorgverzekering/premie-berekenen"
                                >
                                    premie-berekenen
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span>2020 - current</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Developers</div>
                        <p class="mb-0">Frontend Developer</p>
                        <small class="d-block mb-2">React & Vue</small>
                        <p class="mb-0">Contracts</p>
                        <ul>
                            <li>
                                Websight
                                <a href="https://websight.nl/ons-werk/">
                                    websight.nl
                                </a>
                            </li>
                            <li>
                                Logius -
                                <a href="https://mijn.overheid.nl">
                                    mijn.overheid.nl
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span>2016 - 2020</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Luminis</div>
                        <p class="mb-0">Frontend Developer</p>
                        <small class="d-block mb-2">AngularJS</small>
                        <p class="mb-0">Contracts</p>
                        <ul>
                            <li>
                                Rabobank -
                                <a
                                    href="https://www.rabobank.nl/particulieren/"
                                >
                                    rabobank.nl
                                </a>
                            </li>
                            <li>
                                Monuta -
                                <a
                                    href="https://www.monuta.nl/uitvaartverzekering-afsluiten/"
                                >
                                    monuta.nl
                                </a>
                            </li>
                            <li>
                                Van Dijk Educatie -
                                <a href="https://vandijk.nl/">vandijk.nl</a>
                            </li>
                            <li>PulseOn</li>
                        </ul>
                    </div>
                    <span>2012 - 2016</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Essent</div>
                        <p class="mb-0">Frontend Developer & Webmaster</p>
                        <small class="d-block mb-2">HTML, CSS, JQuery</small>
                        <p class="mb-0">Projects</p>
                        <ul>
                            <li>
                                Essent.nl -
                                <a href="https://www.essent.nl/"> essent.nl </a>
                            </li>
                        </ul>
                    </div>
                    <span>2012 - 2014</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Philips</div>
                        <p class="mb-0">Online Service Expert</p>
                        <small class="d-block mb-2">
                            HTML, CSS, Javascript
                        </small>
                        <p class="mb-0">Projects</p>
                        <ul>
                            <li>
                                Philips.nl -
                                <a href="https://www.philips.nl/">
                                    philips.nl
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span>2007 - 2011</span>
                </li>
            </ul>

            <h2 class="text-center my-5 fs-5 fw-medium">Skills</h2>
            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Languages</div>
                        HTML5, CSS3 (BEM), JavaScript (ES6+), TypeScript
                    </div>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Frameworks</div>
                        Vue.js (Vuex, Pinia), React (Redux), AngularJS
                    </div>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Tools</div>
                        Webpack, Rollup, Vite, Cypress, Jest, Git
                    </div>
                </li>
            </ul>

            <h2 class="text-center my-5 fs-5 fw-medium">Education</h2>

            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">
                            Hogeschool van Arnhem en Nijmegen
                        </div>
                        Communication and Multimedia Design
                    </div>

                    <span>2011</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Gilde Opleidingen</div>
                        IT Administrator
                    </div>

                    <span>2006</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Valuas College</div>
                        Administration and Economics
                    </div>

                    <span>2002</span>
                </li>
            </ul>
        </div>
    </div>
</template>
