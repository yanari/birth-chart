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
    <UContainer class="max-w-3xl">
        <main class="bg-slate-600/10 text-stone-300 text-start">
            <div class="description">
                <h2 class="text-5xl/relaxed font-bold text-center">
                    {{ dominantTitle }}
                </h2>
                <Description :set="dominant" />
                <UDivider />
                <h2 class="mt-8 text-3xl/loose font-bold text-center">
                    {{ lackOfTitle }}
                </h2>
                <Description :set="lack" />
            </div>
            <UDivider />
            <!-- <Separator />
            <div class="chart-area">
                <Chart :elements="elements" />
            </div>
            <Separator />
            <div class="social-media-sharing">
                <SocialNetworkShare />
            </div> -->
        </main>
    </UContainer>
</template>
<style>
.chart-area {
    display: flex;
    justify-content: center;
    max-height: 24rem;
}
</style>