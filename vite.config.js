// vite.config.js
import { sync } from 'glob';
import { defineConfig } from 'vite';
import path, { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // <--- NEW: Import React plugin

export default defineConfig(({ command, mode, ssrBuild }) => {
    // Collect all HTML files as entry points
    // This ensures they are processed correctly in both dev and build
    const htmlEntrypoints = sync('src/*.html').map(file => resolve(__dirname, file));

    return {
        root: "src", // Base for local serving, so / becomes src/
        base: "/",
        server: {
            open: true // Opens browser automatically
        },
        plugins: [
            react(), // <--- NEW: Add React plugin
            tailwindcss(),
            handlebars({
                // Adjust partialDirectory path to be relative to the root (`src`)
                // or ensure resolve is used correctly from the project root.
                partialDirectory: resolve(__dirname, './src/partials'), 
            }),
        ],
        resolve: {
            alias: {
                // Since root is 'src', @css might resolve incorrectly.
                // It's safer to use relative paths or absolute paths from project root.
                // For direct file imports, relative paths are usually best.
                // If you *do* want aliases, they should be relative to the project root
                // and then Vite will map them correctly relative to the root (`src`).
                '@css': resolve(__dirname, './src/assets/css'), // Correct alias for Vite when root is 'src'
                // '@': resolve(__dirname, './src'), // A common alias for src directory
            },
        },
        build: {
            outDir: "../dist", // Output to dist/ in the project root
            emptyOutDir: true, // Clears the dist directory before each build
            rollupOptions: {
                input: htmlEntrypoints, // Use the collected HTML entry points
            }
        }
    }
})