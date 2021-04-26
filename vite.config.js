import { defineConfig } from 'vite';
import { resolve } from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    server: {
        https: true
    },
    resolve: {
        alias: {
            components: resolve(__dirname, 'src/components')
        }
    }
});
