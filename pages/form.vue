<script setup>
import { format } from 'date-fns';
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const toast = useToast()
const router = useRouter();
const astros = useAstrosStore();

const state = reactive({
    date: new Date('2000-01-01T12:00:00'),
    latLng: {}
})

const isLoading = ref(false);

const isDisabled = computed(() => {
    const isLatEmpty = isLatitudesEmpty(state.latLng);
    const isDateToday = isDateEmpty(state.date)
    return isLatEmpty || isDateToday;
})

async function onSubmit(event) {
    try {
        isLoading.value = true;
        const { response } = await $fetch('/api/submit', {
            method: 'POST',
            body: event.data
        });
        
        astros.set(response);

        router.push(`/result?els=${response.params}`).then(() => {
            isLoading.value = false;
        });
    
    } catch (e) {
        console.error(e);
        toast.add({
            id: 'error',
            title: 'An error occurred while submitting the form.',
            description: 'Please try again later.',
            icon: 'heroicons-exclamation-circle',
        });
        isLoading.value = false;
    }
}
</script>
<template>
    <UContainer class="max-w-lg h-dvh flex justify-center flex-col">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
            <LocationInput v-model="state.latLng" />

            <UFormGroup
                size="xl"
                label="Date of birth"
                description="Which day and time?"
                required
            >
                <UPopover :popper="{ placement: 'top-start' }">
                    <UInput class="w-full" icon="i-heroicons-calendar-days-20-solid" readonly :placeholder="format(state.date, 'd MMM, yyy - HH:mm')" />
    
                    <template #panel="{ close }">
                        <DatePicker
                            is-dark
                            color="teal"
                            v-model="state.date"
                            is-required
                            @close="close"
                            mode="dateTime"
                            is24hr
                        />
                    </template>
                </UPopover>
            </UFormGroup>

            <UButton
                :loading="isLoading"
                :disabled="isDisabled"
                :ui="{ rounded: 'rounded md:rounded-full' }"
                type="submit"
                label="Submit"
                size="xl"
                v-bind="isDisabled && {color: 'gray'}"
                variant="outline"
                block
            >
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                </template>
            </UButton>
        </UForm>
    </UContainer>
</template>

<style></style>