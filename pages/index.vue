<script setup>
const route = useRoute();
const { data: meta } = await useFetch('/api/meta', {
    query: route.query
});

useHead({
    htmlAttrs: { lang: 'en' },
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
        <UContainer v-show="isBgLoaded" class="items-center text-center h-dvh flex justify-center flex-col">
            <h1 class="text-5xl/relaxed font-semibold mb-8">Calculate the dominant element in your birth chart!</h1>
            <UButton
                class="max-w-lg"
                to="/form"
                color="primary"
                size="xl"
                :ui="{ rounded: 'rounded md:rounded-full', gap: { xl: '48px'} }"
                block
                label="Begin"
            />
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