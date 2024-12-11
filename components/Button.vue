<script setup>
defineEmits('onClick')
const { isLoading } = defineProps({isLoading: Boolean})
</script>
<template>
    <button :class="{ 'button--loading': isLoading }" @click="$emit('onClick')">
        <span class="button__text">
            <slot />
        </span>
    </button>
</template>
<style scoped>
button {
    appearance: none;
    background-color: var(--button-color);
    border-radius: 2rem;
    border-width: 0;
    cursor: pointer;
    color: var(--color-heading);
    font-size: 2rem;
    padding: 1rem 5rem;
    position: relative;
    text-transform: uppercase;
    transition: background-color .3s;
}

button:disabled,
button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

button:hover:enabled,
button:focus:enabled {
    background-color: var(--button-color-hover);
}

button.button--loading::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}

.button--loading .button__text {
    visibility: hidden;
    opacity: 0;
}

/* loading animation */
@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}
</style>