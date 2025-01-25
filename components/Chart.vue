<script setup>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const { elements } = defineProps(['elements']);

const chartData = ref(null);

const options = reactive({
    borderWidth: 1,
    borderColor: '#777',
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
        hoverOffset: 4,
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
    <Doughnut
        class="max-h-80"
        v-if="chartData !== null"
        :data="chartData"
        :options="options"
    />
</template>
<style scoped></style>