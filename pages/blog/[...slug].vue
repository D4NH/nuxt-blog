<script setup>
import Intro from '../../components/intro.vue';

const route = useRoute();
const allPosts = await useAsyncData(() => queryContent(`/${route.params.slug[0]}`).sort({ date: -1 }).find());
const blogPost = computed(() => allPosts.data.value.filter((value) => value.intro)[0]);

const { data: currentPost } = await useAsyncData('page-data', () =>
    queryContent(`/${route.params.slug[0]}/${route.params.slug[1]}`).findOne()
);

const [prev, next] = await queryContent()
    .only(['_path', 'title', 'excerpt'])
    .sort({ date: 1 })
    .findSurround(`/${route.params.slug[0]}/${route.params.slug[1]}`);

const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false
    }).format(newDate);
};

onMounted(() => {
    // console.log('route', route.params.slug);
    // console.log('blogPost', blogPost.value);
});
</script>

<template>
    <Intro img="/img/blog.jpg">
        <h2 class="mb-3">{{ route.params.slug.length === 1 ? blogPost.category.split('-')[0] : data.title }}</h2>
        <ul class="list--info list-inline">
            <li class="list-inline-item">
                <!-- <fa-icon
                    class="mr-1"
                    :icon="['fas', 'calendar-day']"
                /> -->
                {{ formatDate(route.params.slug.length === 1 ? blogPost.date : data.date) }}
            </li>
            <li class="list-inline-item ml-3">
                <!-- <fa-icon
                    class="mr-1"
                    :icon="['fas', 'map-marker-alt']"
                /> -->
                {{ blogPost.category.split('-')[1] }}
            </li>
        </ul>
        <p v-if="route.params.slug.length === 1">{{ blogPost.intro }}</p>
    </Intro>

    <ContentList
        v-if="route.params.slug.length === 1"
        v-slot="{ list }"
        :path="`/${route.params.slug[0]}`"
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
                <NuxtLink
                    class="nav-link"
                    :to="`/blog${post._path}`"
                >
                    <img
                        :src="post.image"
                        class="post-image img-fluid"
                        alt=""
                    />
                </NuxtLink>
            </div>
            <div class="panel__content panel__content--no-padding col d-flex flex-column">
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt }}</p>
                <span class="mt-auto line"></span>
                <small>{{ formatDate(post.date) }}</small>
            </div>
        </div>
    </ContentList>

    <ContentDoc v-else>
        <!-- <template #default="{ currentPost }"> -->
        <ContentRenderer
            :value="currentPost"
            class="blog-content blog-post-text"
        />
        <!-- </template> -->
    </ContentDoc>
    <!-- <ContentRenderer
        v-else
        :value="currentPost"
    >
        <div class="row">
            <ContentRendererMarkdown
                class="col blog-content"
                :value="currentPost"
                :components="components"
            />
        </div>

        <div class="row">
            <div class="col text-right">
                <div
                    v-if="prev"
                    class="prev"
                >
                    <strong>Vorige</strong><br />
                    <NuxtLink :to="`/blog${prev._path}`">
                        {{ prev.title }}
                    </NuxtLink>
                    <br />
                    <small>{{ prev.excerpt }}</small>
                </div>
            </div>
            <div class="col">
                <div
                    v-if="next"
                    class="next"
                >
                    <strong>Volgende</strong><br />
                    <NuxtLink :to="`/blog${next._path}`">
                        {{ next.title }}
                    </NuxtLink>
                    <br />
                    <small>{{ next.excerpt }}</small>
                </div>
            </div>
        </div>
    </ContentRenderer> -->
</template>

<style lang="scss" scoped>
.blog-content {
    text-align: center;

    :deep() {
        p {
            max-width: 700px;
            margin: 15px auto;
        }

        img,
        .post-image {
            max-width: 700px;
            height: auto;
            object-fit: contain;
            margin: 15px auto 0;

            // border: 1px solid #ccc;
            // border-radius: 0.3rem;
            // padding: 5px;
        }

        @media screen and (max-width: 640px) {
            p,
            img,
            .post-image {
                width: 100%;
            }
        }
    }
}
</style>
