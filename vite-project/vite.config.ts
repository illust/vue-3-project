import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
const pathResolve = (dir: string) => resolve(__dirname,dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": pathResolve("./src")   // 别名
    }
  }
})

