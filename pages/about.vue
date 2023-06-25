<script setup>
import Intro from '../components/intro.vue';

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
        <h2 class="mb-3">Over mij</h2>
        <p>
            Ik ben Frontend Developer en dit is mijn portfolio. Op deze site neem ik jullie graag mee met mijn reizen.
            Verder hou ik me bezig met het omzetten van grafische ontwerpen naar volledig functionele websites welke
            geschikt zijn voor mobiele en desktop apparaten. Ik ben verder te vinden op
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

    <h1>About</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sapiente accusantium, itaque consequatur aperiam
        illo numquam laudantium. Praesentium, itaque dolor exercitationem expedita totam ducimus neque veritatis,
        eligendi voluptates optio reprehenderit.
    </p>
</template>
