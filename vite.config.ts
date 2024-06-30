import { UserConfig, defineConfig } from 'vite'

import { VitePWA } from 'vite-plugin-pwa'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import preload from "vite-plugin-preload";
import solid from 'vite-plugin-solid'
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig((config) => {
  const isProduction = config.mode === 'development' ? false : true;

  return {
    plugins: [
      solid(),
      solidSvg(),
      isProduction ? pluginPurgeCss({
        variables: true,
        keyframes: true,
        content: [
          './src/**/*.tsx',
        ],
        safelist: [
          ':root',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }) : '',
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Tonkeeper Battery',
          theme_color: '#10161F',
        },
        injectRegister: 'auto',
        includeManifestIcons: false,
        workbox: {
          globPatterns: ['**/*.{ico,png,svg,tgs,html}', '**/lottie*.js'],
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024
        },
      }),
      preload(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            lottie: ['lottie-web/build/player/lottie_light', 'pako'],
          }
        }
      }
    }
  } as UserConfig
})
