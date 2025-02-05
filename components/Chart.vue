<script setup>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const { elements, signs } = defineProps(['elements', 'signs']);

const chartData = ref(null);

const options = reactive({
    borderWidth: 1,
    borderColor: '#fff',
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: (({ formattedValue }) => formattedValue + '%'),
                title: ((value) => {
                    const { label } = value[0];
                    
                    const names = signs[label].map(sign => sign.name)

                    return names.join(' ');
                }),
            },
        },
        legend: {
            labels: {
                usePointStyle: true,
                color: '#fff',
            },
        }
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
        class="max-h-80 text-white"
        v-if="chartData !== null"
        :data="chartData"
        :options="options"
    />
</template>
<style scoped></style>