<template>
    <NuxtLink
      v-if="to"
      :to="to"
      :class="buttonClasses"
      v-bind="componentProps"
    >
      <slot />
    </NuxtLink>
  
    <a
      v-else-if="href"
      :href="href"
      :class="buttonClasses"
      v-bind="componentProps"
    >
      <slot />
    </a>
  
    <button
      v-else
      :type="type ?? 'button'"
      :class="buttonClasses"
      v-bind="componentProps"
    >
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import type { RouteLocationRaw } from 'vue-router'

  type ButtonVariant = 'primary' | 'secondary'
  type ButtonSize = 's' | 'm' | 'l'
  
  const props = defineProps<{
    to?: RouteLocationRaw
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
  }>()
  
  
  /**
   * Пропсы, которые передаются в конечный элемент
   */
  const componentProps = computed(() => {
    if (props.to) {
      return {
        to: props.to,
      }
    }
  
    if (props.href) {
      return {
        href: props.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    }
  
    return {
      type: props.type ?? 'button',
      disabled: props.disabled,
    }
  })
  
  /**
   * Классы
   */
  const buttonClasses = computed(() => [
    'ui-button',
    `ui-button--${props.variant ?? 'primary'}`,
    `ui-button--${props.size ?? 'm'}`,
    {
      'is-disabled': props.disabled,
    },
  ])
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
