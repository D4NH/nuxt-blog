<script setup>
import Intro from '../components/intro.vue';
import Carousel from '../components/content/Carousel.vue';

const { data: allPosts } = await useAsyncData('blog', () =>
    queryContent('/')
        .only(['title', 'date', 'images', 'category', 'intro'])
        .where({ date: { $gt: '2024-01-01' } })
        .sort({ date: -1 })
        .find()
);

const postsWithIntro = computed(() =>
    allPosts.value.filter((value) => value.intro)
);

const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};

useHead({
    title: 'Danh Nguyen | Frontend Developer'
});
</script>

<template>
    <Intro>
        <h1 class="fs-4">Danh Nguyen</h1>
        <p>
            Frontend Developer bij
            <NuxtLink to="https://www.zilverenkruis.nl/">
                Zilveren Kruis
            </NuxtLink>
        </p>

        <ul class="list--info list-inline my-4">
            <li class="list-inline-item">
                <fa-icon
                    class="mr-1"
                    :icon="['fab', 'github']"
                />
                <a
                    href="https://github.com/D4NH?tab=repositories"
                    target="_blank"
                    class="pr-5"
                >
                    GitHub
                </a>
            </li>
            <li class="list-inline-item px-2">
                <fa-icon
                    class="mr-1"
                    :icon="['fab', 'instagram']"
                />
                <a
                    href="https://www.instagram.com/danhnguyen_nl"
                    target="_blank"
                >
                    Instagram
                </a>
            </li>
        </ul>

        <p class="w-75 mx-auto mb-0">
            Ik hou van de laatste gadgets en wil ze dan ook graag altijd
            uitproberen. In mijn vrijetijd speel ik badminton, games en lees ik
            japanse manga's. Verder hou ik van reizen die je op deze pagina kan
            vinden.
        </p>
    </Intro>

    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2 class="text-center mb-5 fs-5 fw-medium">Recente reizen</h2>

            <ContentList>
                <template #default>
                    <div class="row justify-content-start">
                        <div
                            v-for="post in postsWithIntro"
                            :key="post.title"
                            class="d-flex flex-column mb-3"
                        >
                            <Carousel :data="post" />
                        </div>
                    </div>
                </template>
            </ContentList>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.post {
    &-image {
        object-fit: cover;
        width: 100%;

        /* @media screen and (max-width: 640px) {
            margin-bottom: 15px;
        } */
    }
}
</style>
