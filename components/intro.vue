<script setup lang="ts">
interface Props {
    img?: string;
}

withDefaults(defineProps<Props>(), {
    img: '/img/blog.jpg'
});
</script>

<template>
    <div class="row justify-content-center mt-2 mb-5">
        <div class="col-md-8">
            <div class="intro text-center">
                <div class="greeting">
                    <NuxtImg
                        format="webp"
                        loading="lazy"
                        class="avatar"
                        src="/img/profile.jpg"
                    />
                </div>

                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    border: 5px solid white;
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
}
</style>
