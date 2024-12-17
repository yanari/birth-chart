<script setup>
const isImageLoaded = useState('loaded', () => false);

function onLoadBackgroundImg() {
    isImageLoaded.value = true;
}
</script>
<template>
    <div class="bg-neutral-900 absolute left-0 top-0 bottom-0 right-0 -z-10 w-screen h-screen">
        <NuxtImg
            class="h-full w-full bg-fixed object-right object-cover overflow-auto"
            v-show="isImageLoaded"
            @load="onLoadBackgroundImg"
            src="/background.jpeg"
        />
    </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>