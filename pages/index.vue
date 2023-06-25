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
    <Intro img="/img/home.jpg">
        <h2 class="mb-3">Danh Nguyen | Frontend Developer</h2>
        <ul class="list--info list-inline">
            <li class="list-inline-item">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'envelope-open-text']"
                />
                nguyen.dtd@gmail.com
            </li>
            <li class="list-inline-item ml-3">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'birthday-cake']"
                />
                {{ formatDate('1987-02-27') }}
            </li>
            <li class="list-inline-item ml-3">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'map-marker-alt']"
                />
                Nederland
            </li>
        </ul>
        <p>
            Mijn naam is Danh (Jan) Nguyen. Ik hou van de laatste gadgets en wil ze dan ook graag altijd uitproberen. In
            mijn vrijetijd speel ik badminton, games en lees ik japanse manga's. Verder hou ik van reizen die je op deze
            pagina kan vinden.
        </p>
        <p>Waar gaan we dit keer naartoe?</p>
    </Intro>

    <h1>Index</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sapiente accusantium, itaque consequatur aperiam
        illo numquam laudantium. Praesentium, itaque dolor exercitationem expedita totam ducimus neque veritatis,
        eligendi voluptates optio reprehenderit.
    </p>
</template>

<style lang="scss" scoped></style>
