/**
 * Composable for managing smooth scroll animations and section visibility
 */
export const useSmoothScroll = () => {
  const activeSection = ref('home')
  
  // Smooth scrolling function with enhanced easing
  const scrollToSection = (sectionId: string, offset = 0) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Enhanced scroll with custom easing
  const smoothScrollTo = (targetY: number, duration = 800) => {
    const startY = window.pageYOffset
    const distance = targetY - startY
    const startTime = performance.now()

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * ease)

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  // Setup intersection observer for section tracking
  const setupSectionObserver = (sections: Array<{ id: string; ref: Ref<HTMLElement | undefined> }>) => {
    if (!process.client) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            activeSection.value = entry.target.id
            
            // Add visible class for animations
            const content = entry.target.querySelector('.section-content')
            if (content) {
              content.classList.add('in-view')
            }
          }
        })
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    sections.forEach(({ ref }) => {
      if (ref.value) {
        observer.observe(ref.value)
      }
    })

    return observer
  }

  // Setup parallax scrolling for enhanced effects
  const setupParallax = () => {
    if (!process.client) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  return {
    activeSection: readonly(activeSection),
    scrollToSection,
    smoothScrollTo,
    setupSectionObserver,
    setupParallax
  }
}
