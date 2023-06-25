<script setup lang="ts">
interface Props {
    img?: string;
}

withDefaults(defineProps<Props>(), {
    img: '/img/blog.jpg'
});
</script>

<template>
    <div class="row">
        <div class="col">
            <div class="intro text-center">
                <div class="greeting">
                    <img
                        class="greet-image"
                        :src="img"
                    />
                    <img
                        class="avatar"
                        src="/img/profile.jpg"
                    />
                </div>

                <slot></slot>
            </div>

            <hr class="my-5" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.greeting {
    margin-bottom: 60px;
}

.avatar {
    border: 5px solid white;
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -50px;
    z-index: 1;
}

.greet-image {
    overflow: hidden;
    display: block;
    object-fit: cover;
    height: 250px !important;
    width: 100%;
}
</style>
