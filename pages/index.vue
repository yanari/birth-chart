<script setup>
const route = useRoute();
const { data: meta } = await useFetch('/api/meta', {
    query: route.query
});

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})

useSeoMeta({
    title: () => meta.value.ogTitle,
    ogTitle: () => meta.value.ogTitle,
    twitterTitle: () => meta.value.ogTitle,
    twitterImage: () => meta.value.ogImage,
    twitterDescription: () => meta.value.ogDescription,
    description: () => meta.value.ogDescription,
    ogDescription: () => meta.value.ogDescription,
    ogImage: () => meta.value.ogImage,
    ogUrl: () => meta.value.ogUrl,
    twitterCard: () => meta.value.twitterCard,
});

const { isBgLoaded } = inject('isBgLoaded');

</script>
<template>
    <Transition name="fade">
        <UContainer v-show="isBgLoaded" class="text-center h-dvh flex justify-center flex-col">
            <h1 class="text-5xl/relaxed font-semibold mb-8">Calculate the dominant element in your birth chart!</h1>
            <NuxtLink to="/form">
                <UButton color="primary" size="xl">Begin</UButton>
            </NuxtLink>
        </UContainer>
    </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>