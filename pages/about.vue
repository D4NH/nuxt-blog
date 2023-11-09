<script setup>
import Intro from '../components/intro.vue';

useHead({
    title: 'Over mij | Danh Nguyen'
});

const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};
</script>

<template>
    <Intro img="/img/overmij.jpg">
        <h1 class="fs-4">Over mij</h1>
        <p>
            Frontend Developer bij
            <NuxtLink to="https://www.zilverenkruis.nl/">
                Zilveren Kruis
            </NuxtLink>
        </p>

        <ul class="list--info list-inline my-4">
            <li class="list-inline-item">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'envelope-open-text']"
                />
                nguyen.dtd@gmail.com
            </li>
            <li class="list-inline-item px-2">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'birthday-cake']"
                />
                {{ formatDate('1987-02-27') }}
            </li>
            <li class="list-inline-item">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'map-marker-alt']"
                />
                Capelle aan den IJssel
            </li>
        </ul>
        <p class="w-75 mx-auto mt-4 mb-0">
            Mijn naam is Danh (Jan) Nguyen. Ik ben Frontend Developer en dit is
            mijn portfolio. Ik hou mij bezig met het omzetten van grafische
            ontwerpen naar volledig functionele websites welke geschikt zijn
            voor mobiele en desktop apparaten.
        </p>
    </Intro>

    <div class="row justify-content-center mb-5">
        <div class="col-md-8">
            <h2 class="text-center mb-5 fs-5 fw-medium">Werkervaring</h2>

            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Zilveren Kruis</div>
                        Frontend Developer
                    </div>
                    <span>2020 - heden</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Developers</div>
                        <p>Frontend Developer</p>
                        <p class="mb-0">Projecten</p>
                        <ul>
                            <li>Websight</li>
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
                        <p>Frontend Developer</p>
                        <p class="mb-0">Projecten</p>
                        <ul>
                            <li>Rabobank</li>
                            <li>Monuta</li>
                            <li>Van Dijk Educatie</li>
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
                        Frontend Developer & Webmaster
                    </div>
                    <span>2012 - 2014</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">
                            Hogeschool van Arnhem en Nijmegen
                        </div>
                        Interaction Designer
                    </div>
                    <span>2011 - 2012</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">LUKKIEN</div>
                        Trainee Interactive
                    </div>
                    <span>2010 - 2011</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Philips</div>
                        Online Service Expert
                    </div>
                    <span>2007 - 2011</span>
                </li>
            </ul>

            <h2 class="text-center my-5 fs-5 fw-medium">Opleidingen</h2>

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
                        MBO ICT Systeem-beheerder
                    </div>

                    <span>2006</span>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Valuas College</div>
                        Administratie
                    </div>

                    <span>2002</span>
                </li>
            </ul>
        </div>
    </div>
</template>
