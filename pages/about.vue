<script setup>
import Intro from '../components/intro.vue';

useHead({
    title: 'Over mij | Danh Nguyen'
});
</script>

<template>
    <Intro img="/img/overmij.jpg">
        <h1 class="fs-4">Over mij</h1>
        <p class="w-75 mx-auto mt-4 mb-0">
            Mijn naam is Danh (Jan) Nguyen. Ik ben Frontend Developer en dit is
            mijn portfolio. Ik hou mij bezig met het omzetten van grafische
            ontwerpen naar volledig functionele websites welke geschikt zijn
            voor mobiele en desktop apparaten. Ik ben verder te vinden op
            <a
                href="https:/www.facebook.com/nguyendtd"
                target="_blank"
            >
                Facebook
            </a>
            ,
            <a
                href="https://www.instagram.com/danhnguyen_nl"
                target="_blank"
            >
                Instagram
            </a>
            en
            <a
                href="https://twitter.com/nguyendanh_/"
                target="_blank"
            >
                Twitter
            </a>
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
                            <li>Logius</li>
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
