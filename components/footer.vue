<script setup>
const getCurrentYear = () => new Date().getFullYear();
</script>

<template>
    <div class="container">
        <footer class="pb-2 mb-2">
            <p class="text-center text-body-secondary pt-3 mt-3">
                © 2017 - {{ getCurrentYear() }} Copyright Danh Nguyen | Frontend
                Developer
            </p>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
footer {
    font-size: 0.813rem;
}
</style>
