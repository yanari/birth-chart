<script setup>
import 'assets/main.css';

const isBgLoaded = ref(false);

function setIsBgLoaded() {
    isBgLoaded.value = true;
}

provide('isBgLoaded', {
    isBgLoaded,
    setIsBgLoaded
});
</script>
<template>
    <div class="overflow-auto w-screen h-screen">
        <BackgroundImage />
        <NuxtPage />
        <UNotifications />
    </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 1.5s ease-in-out;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
