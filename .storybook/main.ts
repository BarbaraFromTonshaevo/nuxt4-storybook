import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ['../app/components/**/*.stories.@(ts|js)'],

  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../'),
          '~': resolve(__dirname, '../')
        }
      }
    })
  }
}

export default config
