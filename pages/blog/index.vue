<script setup>
import Intro from '../../components/intro.vue';

const allPosts = await useAsyncData(() => queryContent('/').sort({ date: -1 }).find());
const postsWithIntro = computed(() => allPosts.data.value.filter((value) => value.intro));

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
    // console.log('hello world', postsWithIntro);
});
</script>

<template>
    <Intro img="/img/blog.jpg">
        <h2 class="mb-3">Blog</h2>
        <p>Waar gaan we dit keer naartoe?</p>
    </Intro>

    <p>{{ $route.params.slug }}</p>

    <ContentList>
        <template #default>
            <div class="row">
                <div
                    v-for="post in postsWithIntro"
                    :key="post.title"
                    class="mb-5 col-sm-6 d-flex flex-column"
                >
                    <NuxtLink
                        class="nav-link"
                        :to="`/blog/${post._dir}`"
                    >
                        <img
                            :src="post.image"
                            class="post-image img-fluid"
                            alt=""
                        />
                        <h2>{{ post.category.split('-')[0] }}</h2>
                        <small>{{ post.category.split('-')[1] }}</small>
                        <p>{{ post.intro }}</p>
                    </NuxtLink>
                    <span class="mt-auto line"></span>
                    <p>{{ formatDate(post.date) }}</p>
                </div>
            </div>
        </template>
        <template #not-found>
            <p>No post found.</p>
        </template>
    </ContentList>
</template>

<style scoped>
.post-image {
    object-fit: cover;
    height: 200px;
    width: 100%;
    margin-bottom: 10px;

    /* @media screen and (max-width: 640px) {
        margin-bottom: 15px;
    } */
}
</style>
