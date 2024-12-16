export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const URL = process.env.URL;

    const response = await $fetch(`${URL}/horoscope`, {
      query: {
        time: body.date,
        latitude: body.latLng.lat,
        longitude: body.latLng.lng,
      }
    })

    console.log('body', body)
    return { response }
})