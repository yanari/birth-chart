<script setup>
definePageMeta({
    middleware: 'has-results'
})

const { data } = useAstrosStore();
const route = useRoute();
const params = ref(route.query.els);

const { host } = useRequestURL();


const dominant = ref(data.dominant);
const lack = ref(data.lack);

const dominantTitle = computed(() => data.dominantTitle);
const lackOfTitle = computed(() => data.lackTitle);
const elements = computed(() => data.calculation);

// Share
const ogTitle = computed(() => data.ogTitle + '!');

const fullUrl = computed(() => 'http://' + host.replace('/', '') + '?els=' + params.value);

const shareTwitter = computed(() => `http://twitter.com/share?text=${ogTitle.value} Find out yours on&url=${fullUrl.value}`);
const shareTelegram = computed(() => `https://t.me/share/url?url=${fullUrl.value}&text=${ogTitle.value} Find out yours on`);
const shareFacebook = computed(() => `https://www.facebook.com/dialog/share?app_id=541350505600565&display=popup&href=${fullUrl.value}&redirect_uri=${fullUrl.value}`);

</script>
<template>
    <UContainer class="max-w-3xl px-0 md:px-4">
        <main class="bg-slate-600/10 text-stone-300 text-start">
            <div class="description">
                <h2 class="text-4xl/relaxed md:text-4xl/loose font-bold text-center mb-6">
                    {{ dominantTitle }}:
                </h2>
                <Description :set="dominant" />
                <UDivider class="mb-8" />
                <h2 class="text-2xl/relaxed md:text-3xl/loose font-bold text-center mb-6">
                    {{ lackOfTitle }}:
                </h2>
                <Description :set="lack" />
            </div>
            <UDivider class="mb-8" />
            <div class="justify-center flex mb-10">
                <Chart :elements="elements" />
            </div>
            <div class="grid gap-4 mb-8 grid-cols-3">
                <ShareIcon social-media="X" :text-to-post="shareTwitter" bg="bg-x" />
                <ShareIcon social-media="Facebook" :text-to-post="shareFacebook" bg="bg-facebook" />
                <ShareIcon social-media="Telegram" :text-to-post="shareTelegram" bg="bg-telegram" />
            </div>
        </main>
    </UContainer>
</template>
<style></style>