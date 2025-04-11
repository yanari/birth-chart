<script setup>
const props = defineProps(['set', 'signs'])
</script>
<template>
    <div class="align-start m-0 mb-12">
        <div class="mb-4" v-for="element in set">
            <h3
                class="text-4xl font-bold mb-4 filter brightness-150"
                :style="{ color: element.color }"
            >
                {{ element.name }}
                <span class="text-base">
                    <span
                        v-for="sign in signs[element.name]"
                        class="mr-2 filter saturate-150"
                    >
                        {{ sign.name }} {{ sign.symbol }}
                    </span>
                </span>
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
h3 span {
    font-family: 'Lato', sans-serif;
}
ul > li {
    margin: 0 0.5rem 0.5rem 0;
}
</style>
