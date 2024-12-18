<script setup>
const route = useRoute();
const meta = useMetaStore();

useSeoMeta({
    title: () => route.query.els ? getOgTitle(route.query.els) : meta.title,
    ogTitle: () => route.query.els ? getOgTitle(route.query.els) : meta.title,
    description: () => meta.description,
    ogDescription: () => meta.description,
    ogImage: () => meta.image,
    twitterCard: () => meta.twitterCard,
})

// onMounted(() => {
//     if (route.query.els) {
//         meta.setTitle(getOgTitle(route.query.els));
//     }
// })

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