<script setup>
const props = defineProps(['set']);

</script>
<template>
    <div class="align-start m-0 mb-12">
        <div class="mb-4" v-for="element in set">
            <h3 class="text-4xl font-bold mb-4 filter brightness-150" :style="{ color: element.color }">
                {{ element.name }}
                <span class="text-lg">(Capricorn, Virgo)</span>
            </h3>
            <p class="mb-4 text-lg">{{ element.description }}</p>
            <ul>
                <Trait
                    v-for="value in element.traits"
                    :trait="value"
                    :name="element.name"
                />
            </ul>
        </div>
    </div>
</template>
<style>
ul>li {
    margin: 0 .5rem .5rem 0;
}
</style>