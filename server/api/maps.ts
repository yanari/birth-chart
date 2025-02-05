import { Loader } from '@googlemaps/js-api-loader';

export default defineEventHandler(async (event) => {
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
  });

  return loader.load();
})