<script setup>
const { trait, name } = defineProps({
    trait: String,
    name: String
});

const bgColor = computed(() => {
    return getBackgroundForElement(name)
});
</script>
<template>
    <li class="text-stone-300 text-lg" :class="bgColor">
        <span>
            {{ trait }}
        </span>
    </li>
</template>
<style scoped>
li {
    border-radius: 16px;
    padding: .5rem 1rem;
    display: inline-block;
    list-style: none;
    line-height: normal;
    /* margin: .5rem; */
}
</style>