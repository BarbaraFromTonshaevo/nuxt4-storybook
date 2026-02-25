<template>
  <component
    :is="tag"
    v-bind="componentProps"
    :class="[
      'ui-button',
      `ui-button--${currentSize}`,
      `ui-button--${variant}`,
      { 'ui-button--disabled': disabled }
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'

interface SizeProps {
  mobile?: 's' | 'm' | 'l'
  tablet?: 's' | 'm' | 'l'
  desktop?: 's' | 'm' | 'l'
}

const props = defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 's' | 'm' | 'l'
  responsive?: SizeProps
  disabled?: boolean
  loading?: boolean
  to?: string // NuxtLink
  href?: string // внешний линк
  type?: 'button' | 'submit' | 'reset'
}>()

const breakpoint = useBreakpoints()

const currentSize = computed(() => {
  if (props.responsive && props.responsive[breakpoint.value]) {
    return props.responsive[breakpoint.value]
  }
  return props.size || 'm'
})

// Выбираем тег
const tag = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

// Пропсы для выбранного тега
const componentProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return { type: props.type || 'button', disabled: props.disabled }
})
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
  &--primary {
    background: black;
    color: white;
  }

  &--secondary {
    background: white;
    color: black;
    border: 1px solid black;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
