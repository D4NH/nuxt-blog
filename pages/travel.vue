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

const { data: archivedPosts } = await useAsyncData('archive', () =>
    queryContent('/')
        .only(['title', 'date', 'image', 'category', 'intro', '_dir'])
        .where({ date: { $lt: '2024-01-01' } })
        .sort({ date: -1 })
        .find()
);

const archivedPostsWithIntro = computed(() =>
    archivedPosts.value.filter((value) => value.intro)
);

const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};

useHead({
    title: 'Travel | Danh Nguyen'
});
</script>

<template>
    <Intro>
        <h1 class="fs-4">Travel</h1>
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
            I like traveling. Exploring new destinations, cultures, and
            experiences is something I truly love. If you're curious about my
            recent trips and adventures, you can check them out on this page.
            Let's connect and share the journey.
        </p>
    </Intro>

    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2 class="text-center mb-5 fs-5 fw-medium">Trips</h2>

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

            <h2 class="text-center mb-5 fs-5 fw-medium">Archive</h2>

            <ContentList>
                <template #default>
                    <div class="row justify-content-start">
                        <div
                            v-for="post in archivedPostsWithIntro"
                            :key="post.title"
                            class="col-sm-6 d-flex flex-column mb-5"
                        >
                            <NuxtLink :to="`/blog/${post._dir}`">
                                <NuxtImg
                                    format="webp"
                                    loading="lazy"
                                    :placeholder="[416, 200]"
                                    width="416"
                                    height="200"
                                    quality="80"
                                    :src="post.image"
                                    class="post-image shadow-sm img-fluid rounded-3 mb-3"
                                    alt=""
                                />
                                <h3 class="fs-5 post-title">
                                    {{ post.category.split('-')[0] }}
                                </h3>
                            </NuxtLink>

                            <p
                                class="post-category fw-bold text-uppercase text-body-secondary my-2"
                            >
                                <fa-icon
                                    class="mr-1"
                                    :icon="['fas', 'map-marker-alt']"
                                />
                                {{ post.category.split('-')[1] }}
                            </p>
                            <p class="post-intro mt-2">{{ post.intro }}</p>

                            <span class="mt-auto line" />
                            <p
                                class="post-date mb-0 fw-bold text-body-secondary"
                            >
                                <fa-icon
                                    class="mr-1"
                                    :icon="['far', 'calendar']"
                                />
                                {{ formatDate(post.date) }}
                            </p>
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
    }
}
</style>
