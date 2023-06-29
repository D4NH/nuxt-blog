<script setup lang="ts"></script>

<template>
    <div class="row justify-content-center mt-2 mb-5">
        <div class="col-md-8">
            <div class="intro text-center">
                <div class="greeting">
                    <NuxtImg
                        format="webp"
                        loading="lazy"
                        class="avatar shadow-sm mb-3"
                        src="/img/profile.jpg"
                    />
                </div>

                <h1 class="fs-4">Danh Nguyen</h1>
                <p>
                    Frontend Developer bij
                    <NuxtLink to="https://www.zilverenkruis.nl/">
                        Zilveren Kruis
                    </NuxtLink>
                </p>

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
