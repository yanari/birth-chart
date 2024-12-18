<script setup>
import 'assets/main.css';
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
