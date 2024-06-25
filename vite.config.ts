import { UserConfig, defineConfig } from 'vite'

import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import solid from 'vite-plugin-solid'

export default defineConfig((config) => {
  const isProduction = config.mode === 'development' ? false : true;

  return {
    plugins: [
      solid(),
      isProduction ? pluginPurgeCss({
        variables: true,
        keyframes: true,
        content: [
          './src/**/*.tsx',
        ],
        safelist: [
          // ':root',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }) : '',
    ],
  } as UserConfig
})
