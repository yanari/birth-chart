export default defineNuxtRouteMiddleware((to, from) => {
    const { hasData } = useAstrosStore();

    if (hasData === false) {
      return navigateTo('/')
    }
  })