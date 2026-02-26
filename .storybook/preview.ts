import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

setup((app) => {
    app.component('NuxtLink', {
      name: 'NuxtLink',
      props: {
        to: {
          type: [String, Object],
          required: false,
        },
      },
      computed: {
        resolvedHref(): string {
          if (typeof this.to === 'string') return this.to
          if (this.to?.path) return this.to.path
          return '#'
        },
      },
      template: `
        <a :href="resolvedHref">
          <slot />
        </a>
      `,
    })
  })

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true
    }
  }
}

export default preview
