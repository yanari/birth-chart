<script setup>
defineOgImageComponent('NuxtSeo', {
    title: 'Find out the dominant elements in your chart 💫',
    description: 'by github.com/yanari',
    theme: '#2dd4bf',
    colorMode: 'dark',
});

const route = useRoute();
const { data: meta } = await useFetch('/api/meta', {
    query: route.query
});

useSeoMeta({
    title: () => meta.ogTitle,
    ogTitle: () => meta.ogTitle,
    description: () => meta.ogDescription,
    ogDescription: () => meta.ogDescription,
    ogImage: () => meta.ogImage,
    twitterCard: () => meta.twitterCard,
})

</script>
<template>
    <UContainer class="text-center h-dvh flex justify-center flex-col">
        <h1 class="text-5xl/relaxed font-semibold mb-8">Calculate the dominant element in your birth chart!</h1>
        <NuxtLink to="/form">
            <UButton color="primary" size="xl">Begin</UButton>
        </NuxtLink>
    </UContainer>
</template>
<style></style>