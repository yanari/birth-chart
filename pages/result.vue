<script setup>
// definePageMeta({
//   validate: async (route) => {
//     // Check if the id is made up of digits
//     return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
//   }
// })
const astros = useAstrosStore();

const dominant = ref(astros.dominant);
const lack = ref(astros.lack);

// onMounted(() => {
//     dominant = results.dominant;
//     lack = results.lack;
// })
const elements = computed(() => astros.calculation);
const hasMultipleDominants = computed(() => dominant && dominant.length > 1);
const hasMultipleLack = computed(() => lack && lack.length > 1);
const dominantTitle = computed(() => {
    if (hasMultipleDominants) {
        return 'The elements that dominate your birth chart are';
    } else {
        return 'The element that dominate your birth chart is';
    }
});
const lackOfTitle = computed(() => {
    if (hasMultipleLack) {
        return 'On the other hand, the weakest elements on your birth chart are';
    } else {
        return 'On the other hand, the weakest element on your birth chart is';
    }
});
</script>
<template>
    <main>
        <!-- <div class="description">
            <h2 class="dominant">
                {{ dominantTitle }}
            </h2>
            <Description :set="results.dominant" />
            <Separator />
            <h2>
                {{ lackOfTitle }}
            </h2>
            <Description :set="results.lack" />
        </div>
        <Separator />
        <div class="chart-area">
            <Chart :elements="elements" />
        </div>
        <Separator />
        <div class="social-media-sharing">
            <SocialNetworkShare />
        </div> -->
    </main>
</template>
<style></style>