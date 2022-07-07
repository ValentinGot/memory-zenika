import vue from '@vitejs/plugin-vue';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        mz: FileSystemIconLoader('src/assets/icons')
      }
    }),
    Components({
      dts: true
    }),
  ]
})

