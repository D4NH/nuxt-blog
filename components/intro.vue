<script setup lang="ts"></script>

<template>
    <div class="row justify-content-center mt-2 mb-5">
        <div class="col-md-8">
            <div class="intro text-center">
                <div class="greeting">
                    <NuxtImg
                        format="webp"
                        loading="lazy"
                        quality="80"
                        :placeholder="[100, 100]"
                        width="100"
                        height="100"
                        class="avatar shadow-sm mb-3"
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
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
}
</style>
