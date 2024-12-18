<script setup>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const { elements } = defineProps(['elements']);

const chartData = ref(null);

const options = reactive({
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: (({ formattedValue }) => formattedValue + '%'),
            },
        },
    }
})

onMounted(() => {
    chartData.value = {
        labels: labels,
        datasets: [{
            data: elementsData,
            backgroundColor: colors
        }],
    }
})

const labels = computed(() => {
    return elements.map(i => i.name);
});
const elementsData = computed(() => {
    return elements.map(i => i.percentage);
});
const colors = computed(() => {
    return elements.map(i => i.color);
});
</script>
<template>
    <Pie v-if="chartData !== null" :data="chartData" :options="options" />
</template>
<style scoped></style>