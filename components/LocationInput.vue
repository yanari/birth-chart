<script setup>
const model = defineModel({ lat: null, lng: null });

const input = ref('');
const inputRef = useTemplateRef('inputRef');

const completer = ref(null);
const googleApi = ref(null);

onMounted(() => {
    googleApi.value = await $fetch('/api/maps');
});

// const setupGoogleMaps = async () => {
//     console.log(process.env.BACKEND_URL)
//     const loader = new Loader({
//         apiKey: process.env.GOOGLE_MAPS_API_KEY,
//         version: 'weekly',
//         libraries: ['places']
//     });

//     googleApi.value = await loader.load();
// }

const autoCompleteResult = () => {
    const options = {
        fields: ['geometry', 'icon', 'name'],
        types: ['(regions)'],
    };
    completer.value = new googleApi.value.maps.places.Autocomplete(inputRef?.value, options);
}

watch(input, async (value, oldValue) => {
    if (value.length > 2 && value != oldValue) {
        autoCompleteResult();
    }
});

watch(completer, autocomplete => {
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        const { lat, lng } = place.geometry.location;

        model.value = { lat: lat(), lng: lng() };
    });
});

</script>
<template>
    <div class="relative">
        <UFormGroup
            size="xl"
            label="Location"
            description="Where were you born?"
            required
        >
            <UInput icon="i-heroicons-globe-americas-solid" />
            <input class="text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 absolute bg-transparent h-11 w-11/12 left-12 outline-none top-0" v-model="input" ref="inputRef"/>
        </UFormGroup>
    </div>
</template>

<style></style>