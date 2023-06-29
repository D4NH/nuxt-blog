<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Intro from './components/intro.vue';
</script>

<template>
    <div class="container">
        <Header />

        <Intro>
            <h1 class="fs-4">Danh Nguyen</h1>
            <p>
                Frontend Developer bij
                <NuxtLink to="https://www.zilverenkruis.nl/">
                    Zilveren Kruis
                </NuxtLink>
            </p>
        </Intro>

        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <h1>Oei, deze pagina bestaat niet!</h1>
                <p>Ga terug naar de <NuxtLink to="/">homepage</NuxtLink></p>
            </div>
        </div>
    </div>

    <Footer class="fixed-bottom" />
</template>

<style lang="scss"></style>
