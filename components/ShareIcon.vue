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
    <div>
        <a
            :class="'flex items-center rounded-md px-4 h-14 w-48 opacity-75 transition-opacity hover:opacity-100 ' + bg"
            :href="textToPost"
            target="blank"
        >
            <UIcon :name="iconName" class="size-10 mr-2" />
            <span class="text-sm/tight">
                Share your result on {{ socialMedia }}
            </span>
        </a>
    </div>
</template>

<style>
</style>