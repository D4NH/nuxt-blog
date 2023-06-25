<script setup>
import Header from './components/header.vue';

useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
            crossorigin: ''
        }
    ]
});
</script>

<template>
    <div class="container">
        <Header />

        <div class="row">
            <div class="col">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
}

.list {
    &--info {
        color: grey;
        font-size: 13px;
    }
}

.line {
    border-bottom: 1px solid gray;
    width: 20px;
    height: 1px;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
