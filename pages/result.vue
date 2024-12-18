<script setup>
definePageMeta({
    middleware: 'has-results'
})

const { data } = useAstrosStore();

const dominant = ref(data.dominant);
const lack = ref(data.lack);

const dominantTitle = computed(() => data.dominantTitle);
const lackOfTitle = computed(() => data.lackTitle);
const elements = computed(() => data.calculation);

</script>
<template>
    <UContainer class="max-w-3xl px-0 md:px-4">
        <main class="bg-slate-600/10 text-stone-300 text-start">
            <div class="description">
                <h2 class="text-4xl/relaxed md:text-4xl/loose font-bold text-center mb-6">
                    {{ dominantTitle }}:
                </h2>
                <Description :set="dominant" />
                <UDivider class="mb-8" />
                <h2 class="text-2xl/relaxed md:text-3xl/loose font-bold text-center mb-6">
                    {{ lackOfTitle }}:
                </h2>
                <Description :set="lack" />
            </div>
            <UDivider class="mb-8" />
            <div class="max-h-88 justify-center flex mb-10">
                <Chart :elements="elements" />
            </div>
            <div class="flex justify-between">
                <SocialShare url="" network="twitter" :styled="true" />
                <SocialShare network="bluesky" :styled="true" />
                <SocialShare network="telegram" :styled="true" />
            </div>
        </main>
    </UContainer>
</template>
<style></style>