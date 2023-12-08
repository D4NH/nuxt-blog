<script setup>
import Intro from '../../components/intro.vue';

const route = useRoute();

const { data: allPosts } = await useAsyncData('posts', () =>
    queryContent(`/${route.params.slug[0]}`)
        .without(['body'])
        .sort({ date: -1 })
        .find()
);
const { data: currentPost } = await useAsyncData('current-post', () =>
    queryContent(`/${route.params.slug[0]}/${route.params.slug[1]}`).findOne()
);

const [prev, next] = await queryContent()
    .without(['body'])
    .sort({ date: 1 })
    .findSurround(`/${route.params.slug[0]}/${route.params.slug[1]}`);

const blogPost = computed(
    () => allPosts.value.filter((value) => value.intro)[0]
);
const pageTitle = computed(() => {
    const title =
        route.params.slug.length === 1
            ? blogPost.value.category
            : `${currentPost.value.title} | ${
                  blogPost.value.category.split('-')[1]
              }`;

    useHead({
        title: `${title} | Danh Nguyen`
    });

    return title;
});

const formatDate = (date) => {
    if (!date) return;
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};
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

        <ul
            class="list--info list-inline text-center"
            :class="[route.params.slug.length === 1 ? 'my-4' : 'mb-0 mt-4']"
        >
            <li class="list-inline-item">
                <fa-icon
                    class="me-1"
                    :icon="['fas', 'calendar-day']"
                />
                {{
                    formatDate(
                        route.params.slug.length === 1
                            ? blogPost?.date
                            : currentPost?.date
                    )
                }}
            </li>
            <li class="list-inline-item px-2">
                <fa-icon
                    class="me-1"
                    :icon="['fas', 'map-marker-alt']"
                />
                <NuxtLink :to="`/blog/${route.params.slug[0]}`">
                    {{ blogPost.category.split('-')[1] }}
                </NuxtLink>
            </li>
        </ul>

        <p
            class="w-75 mx-auto mb-0"
            v-if="route.params.slug.length === 1"
        >
            {{ blogPost.intro }}
        </p>
    </Intro>

    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2 class="text-center mb-5 fs-5 fw-medium">
                {{ pageTitle.split('|')[0] }}
            </h2>

            <ContentList
                v-if="route.params.slug.length === 1"
                v-slot="{ list }"
                :query="{ path: `/${route.params.slug[0]}`, without: ['body'] }"
                :sort="{
                    date: 1
                }"
            >
                <div
                    v-for="post in list"
                    :key="post._path"
                    class="row mb-5"
                >
                    <div class="panel__img col-sm-4">
                        <NuxtLink :to="`/blog${post._path}`">
                            <NuxtImg
                                format="webp"
                                loading="lazy"
                                quality="80"
                                :placeholder="[270, 200]"
                                width="270"
                                height="200"
                                :src="post.image"
                                class="post-image shadow-sm img-fluid rounded-3 mb-3 mb-sm-0"
                                alt=""
                            />
                        </NuxtLink>
                    </div>
                    <div
                        class="panel__content panel__content--no-padding col d-flex flex-column"
                    >
                        <NuxtLink :to="`/blog${post._path}`">
                            <h3 class="fs-5 post-title">{{ post.title }}</h3>
                        </NuxtLink>
                        <p class="truncate">{{ post.description }}</p>
                        <span class="mt-auto line"></span>
                        <p class="post-date mb-0 fw-bold text-body-secondary">
                            <fa-icon
                                class="me-1"
                                :icon="['far', 'calendar']"
                            />
                            {{ formatDate(post.date) }}
                        </p>
                    </div>
                </div>
            </ContentList>

            <ContentDoc
                v-else
                v-slot="{ doc }"
                :path="`/${route.params.slug[0]}/${route.params.slug[1]}`"
            >
                <ContentRenderer
                    class="blog-content"
                    :value="doc"
                    :query="{ without: ['body'] }"
                />

                <hr class="my-5" />

                <div class="row mb-5">
                    <div class="col">
                        <div v-if="prev">
                            <h4 class="fs-6 fw-bold">Vorige</h4>

                            <NuxtLink :to="`/blog${prev._path}`">
                                <h3 class="fs-5 post-title">
                                    {{ prev.title }}
                                </h3>
                            </NuxtLink>

                            <p
                                class="post-category fw-bold text-uppercase text-body-secondary my-2"
                            >
                                <fa-icon
                                    class="mr-1"
                                    :icon="['fas', 'map-marker-alt']"
                                />
                                {{ prev.category }}
                            </p>
                            <p class="post-intro truncate-sm mt-2">
                                {{ prev.description }}
                            </p>

                            <span class="mt-auto line" />
                            <p
                                class="post-date mb-0 fw-bold text-body-secondary"
                            >
                                <fa-icon
                                    class="mr-1"
                                    :icon="['far', 'calendar']"
                                />
                                {{ formatDate(prev.date) }}
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div v-if="next">
                            <h4 class="fs-6 fw-bold">Volgende</h4>

                            <NuxtLink :to="`/blog${next._path}`">
                                <h3 class="fs-5 post-title">
                                    {{ next.title }}
                                </h3>
                            </NuxtLink>

                            <p
                                class="post-category fw-bold text-uppercase text-body-secondary my-2"
                            >
                                <fa-icon
                                    class="mr-1"
                                    :icon="['fas', 'map-marker-alt']"
                                />
                                {{ next.category }}
                            </p>
                            <p class="post-intro truncate-sm mt-2">
                                {{ next.description }}
                            </p>

                            <span class="mt-auto line" />
                            <p
                                class="post-date mb-0 fw-bold text-body-secondary"
                            >
                                <fa-icon
                                    class="mr-1"
                                    :icon="['far', 'calendar']"
                                />
                                {{ formatDate(next.date) }}
                            </p>
                        </div>
                    </div>
                </div>
            </ContentDoc>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.post {
    &-title {
        color: #88c441;
    }

    &-date {
        font-size: 0.65rem;
        // letter-spacing: 0.5px;
        text-transform: uppercase;
        // font-weight: bold;
    }
}

.nav {
    &-category {
        font-size: 0.813rem;
        color: grey;
    }
    &-excerpt {
        font-size: 0.875em;
    }

    &-excerpt {
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}

:deep(.blog-content) {
    text-align: center;

    p {
        max-width: 700px;
        margin: 15px auto;
    }

    img,
    .post-image {
        object-fit: contain;
    }

    @media screen and (max-width: 640px) {
        p,
        img,
        .post-image {
            width: 100%;
        }
    }
}

.truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &-sm {
        -webkit-line-clamp: 1;
    }
}
</style>
