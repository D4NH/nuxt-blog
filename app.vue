<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
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

    <Footer />
</template>

<style lang="scss">
body {
    font-family: 'Figtree', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
}

.line {
    border-bottom: 1px solid gray;
    width: 20px;
    height: 1px;
    display: block;
    padding-top: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.list {
    &--info {
        color: grey;
        font-size: 0.813rem;
    }
}

.nav-link {
    color: #88c441;

    &:hover {
        .post-title {
            text-decoration: underline;
        }
    }
}

a {
    color: #88c441;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.post {
    &-title {
        color: #88c441;
    }

    &-category {
        font-size: 0.75rem;
    }

    &-intro {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    &-date {
        font-size: 0.65rem;
        text-transform: uppercase;
    }

    &-content {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>
