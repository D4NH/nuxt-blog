<script setup>
defineProps(['imgSrc']);
</script>

<template>
    <nuxt-img
        format="webp"
        loading="lazy"
        :src="imgSrc"
        :placeholder="[700, 525]"
        width="700"
        height="525"
        quality="80"
        class="post-image shadow-sm img-fluid rounded-3 mb-3"
        alt=""
    />
</template>
