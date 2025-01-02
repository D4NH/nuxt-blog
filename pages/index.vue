<script setup lang="ts">
import Intro from '../components/intro.vue';
import Carousel from '../components/content/Carousel.vue';

const { data: allPosts } = await useAsyncData('blog', () =>
    queryContent('/')
        .only(['title', 'date', 'images', 'category', 'intro'])
        .sort({ date: -1 })
        .find()
);

const postsAfterDate = computed(() => {
    if (!allPosts.value) return [];

    const cutoffDate = new Date('2024-01-01');

    return allPosts.value.filter((post) => {
        if (!post.date) return false; // Handle missing dates

        try {
            const postDate = new Date(post.date);
            return postDate >= cutoffDate;
        } catch (error) {
            console.error(`Invalid date format: ${post.date}`, error);
            return false; // Handle invalid date formats
        }
    });
});

const postsWithIntro = computed(() =>
    postsAfterDate.value.filter((value) => value.intro)
);

useHead({
    title: 'Danh Nguyen | Frontend Developer'
});
</script>

<template>
    <Intro>
        <h1 class="fs-4">Danh Nguyen</h1>
        <p>
            Frontend Developer at
            <NuxtLink to="https://www.zilverenkruis.nl/">
                Zilveren Kruis
            </NuxtLink>
        </p>

        <ul class="list--info list-inline my-4">
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
            I'm a tech enthusiast with a passion for the latest gadgets and
            cutting-edge web technologies. When I'm not coding or building
            websites, you'll find me playing badminton, gaming, traveling or
            diving into Japanese manga.
        </p>
    </Intro>

    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2 class="text-center mb-5 fs-5 fw-medium">Recent travels</h2>

            <ContentList>
                <div class="row justify-content-start">
                    <div
                        v-for="post in postsWithIntro"
                        :key="post.title"
                        class="d-flex flex-column mb-3"
                    >
                        <Carousel :data="post" />
                    </div>
                </div>
            </ContentList>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.post {
    &-image {
        object-fit: cover;
        width: 100%;
    }
}
</style>
