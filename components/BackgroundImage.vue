<script setup>
const {
    isBgLoaded,
    setIsBgLoaded
} = inject('isBgLoaded');

</script>
<template>
    <div class="bg-neutral-900 fixed left-0 top-0 bottom-0 right-0 -z-10 w-screen h-screen">
        <Transition name="fade">
            <NuxtImg
                class="h-full w-full bg-fixed object-right object-cover overflow-auto transition-opacity"
                v-show="isBgLoaded"
                @load="setIsBgLoaded"
                src="/background.jpeg"
                placeholder
            />
        </Transition>
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