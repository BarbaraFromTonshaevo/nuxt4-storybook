import { ref, onMounted, onUnmounted } from 'vue'

export function useBreakpoints() {
  const breakpoint = ref<'mobile' | 'tablet' | 'desktop'>('desktop')

  const update = () => {
    const width = window.innerWidth
    if (width < 768) breakpoint.value = 'mobile'
    else if (width < 1024) breakpoint.value = 'tablet'
    else breakpoint.value = 'desktop'
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return breakpoint
}