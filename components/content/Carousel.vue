<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};

defineProps(['data']);
// console.log('props.data', props.data);
</script>

<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8">
                <Splide
                    :options="{ rewind: true, heightRatio: 0.8 }"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide v-for="image in data.images">
                        <img :src="image" />
                    </SplideSlide>
                </Splide>
            </div>
            <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ data.category.split('-')[0] }}
                    </h5>
                    <p
                        class="post-category fw-bold text-uppercase text-body-secondary my-2"
                    >
                        <fa-icon
                            class="mr-1"
                            :icon="['fas', 'map-marker-alt']"
                        />
                        {{ data.category.split('-')[1] }}
                    </p>
                    <p class="post-intro mt-2">{{ data.intro }}</p>
                    <span class="mt-auto line" />
                    <p class="post-date mb-0 fw-bold text-body-secondary">
                        <fa-icon
                            class="mr-1"
                            :icon="['far', 'calendar']"
                        />
                        {{ formatDate(data.date) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bg {
    background-color: #ccc;
}
</style>
