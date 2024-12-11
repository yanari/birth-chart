<script setup>
const isImageLoaded = useState('loaded', () => false);

function onLoadBackgroundImg() {
    isImageLoaded.value = true;
}
</script>
<template>
    <div class="background-image">
        <!-- <Transition name="fade"> -->
             <NuxtImg v-show="isImageLoaded" @load="onLoadBackgroundImg" src="/background.jpeg" />
        <!-- </Transition> -->
    </div>
</template>
<style scoped>
.background-image {
    background-color: rgb(22, 18, 19);
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

img {
    height: 100%;
    width: 100%;
    background-attachment: fixed;
    object-position: right;
    object-fit: cover;
    overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>