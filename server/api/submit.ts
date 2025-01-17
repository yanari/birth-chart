export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const BACKEND_URL = process.env.BACKEND_URL;

    const response = await $fetch(`${BACKEND_URL}/horoscope`, {
      query: {
        time: body.date,
        latitude: body.latLng.lat,
        longitude: body.latLng.lng,
      }
    })

    return { response }
})