<script setup>
import { format } from 'date-fns';
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const state = reactive({
    date: new Date(),
    latLng: {}
})

async function onSubmit(event) {
    // Do something with data
    console.log(event.data)
}
</script>
<template>
    <UContainer class="max-w-lg">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
            <LocationInput v-model="state.latLng" />

            <UFormGroup
                size="xl"
                label="Date of birth"
                description="Which day and time?"
                required
            >
                <UPopover :popper="{ placement: 'bottom-start' }">
                    <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(state.date, 'd MMM, yyy - HH:mm')" />
    
                    <template #panel="{ close }">
                        <DatePicker v-model="state.date" is-required @close="close" mode="dateTime" is24hr />
                    </template>
                </UPopover>
            </UFormGroup>

            <UButton label="Submit" block :ui="{ rounded: 'rounded-full' }" type="submit">
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                </template>
            </UButton>
        </UForm>
    </UContainer>
</template>

<style></style>