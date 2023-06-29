<script setup>
import Intro from '../components/intro.vue';

const allPosts = await useAsyncData(() =>
    queryContent('/').sort({ date: -1 }).find()
);
const postsWithIntro = computed(() =>
    allPosts.data.value.filter((value) => value.intro)
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
        <ul class="list--info list-inline my-4">
            <li class="list-inline-item">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'envelope-open-text']"
                />
                nguyen.dtd@gmail.com
            </li>
            <li class="list-inline-item px-2">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'birthday-cake']"
                />
                {{ formatDate('1987-02-27') }}
            </li>
            <li class="list-inline-item">
                <fa-icon
                    class="mr-1"
                    :icon="['fas', 'map-marker-alt']"
                />
                Capelle aan den IJssel
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
                    <div class="row justify-content-center">
                        <div
                            v-for="post in postsWithIntro"
                            :key="post.title"
                            class="col-sm-6 d-flex flex-column mb-5"
                        >
                            <NuxtLink :to="`/blog/${post._dir}`">
                                <NuxtImg
                                    format="webp"
                                    loading="lazy"
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

<style lang="scss" scoped></style>
