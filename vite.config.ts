import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'GordoUI',
      fileName: 'gordo-ui',
    },
    // rollupOptions: {
    //   external: ['react'],
    //   output: {
    //     globals: {
    //       react: 'React',
    //     },
    //   },
    // },
  },
})
