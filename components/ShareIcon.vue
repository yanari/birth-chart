<script setup>
const {
    socialMedia,
    textToPost,
    bg,
} = defineProps({
    socialMedia: String,
    textToPost: String,
    bg: String
});

const normalizedName = computed(() => socialMedia.toLowerCase());
const iconName = computed(() => `i-lineicons-${normalizedName.value}`);
</script>
<template>
    <div :class="bg" class="rounded-md opacity-75 transition-opacity hover:opacity-100 p-2">
        <a
            class="flex flex-col md:flex-row items-center justify-center gap-2"
            :href="textToPost"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span class="text-sm/tight">
                Share on
            </span>
            <UIcon :name="iconName" class="size-10" />
        </a>
    </div>
</template>

<style>
</style>