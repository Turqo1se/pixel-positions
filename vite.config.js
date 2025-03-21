import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0',         // Listen on all IP addresses
        port: 5173,              // Use Vite’s default port
        strictPort: true,        // Prevent port switching if 5173 is busy
        hmr: {
            host: '10.17.4.85',  // Your local IP address
        },
    },
});
