/**
 * Composable for managing elegant page transitions
 */
export const usePageTransitions = () => {
  const route = useRoute()
  const router = useRouter()

  // Preload next route for smoother transitions
  const preloadRoute = async (to: string) => {
    if (process.client) {
      try {
        // Use router.resolve to prepare the route
        router.resolve(to)
      } catch (error) {
        console.debug('Route preload failed:', error)
      }
    }
  }

  // Handle transition timing for better UX
  const transitionDelay = (duration = 100) => {
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  // Enhanced navigation with preloading
  const navigateWithTransition = async (to: string, preload = true) => {
    if (preload) {
      await preloadRoute(to)
    }
    await router.push(to)
  }

  // Get transition name based on route
  const getTransitionName = (from?: string, to?: string) => {
    if (!from || !to) return 'page'
    
    // Define route hierarchy for directional transitions
    const routeOrder = ['/', '/about', '/projects', '/contact']
    const fromIndex = routeOrder.indexOf(from)
    const toIndex = routeOrder.indexOf(to)
    
    if (fromIndex === -1 || toIndex === -1) return 'page'
    
    // Use slide transitions based on navigation direction
    return fromIndex < toIndex ? 'slide-left' : 'slide-right'
  }

  // Scroll management for transitions
  const handleScrollOnTransition = () => {
    if (process.client) {
      // Smooth scroll to top on route change
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return {
    preloadRoute,
    transitionDelay,
    navigateWithTransition,
    getTransitionName,
    handleScrollOnTransition
  }
}
