<template>
    <div>
        <BackgroundImage />
        <NuxtPage />
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
