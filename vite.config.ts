import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react(), crx({ manifest }), tailwindcss()],
	// build: {
	// 	rollupOptions: {
	// 		input: {
	// 			offscreen: resolve('./offscreen.html'),
	// 		},
	// 		output: {
	// 			entryFileNames: '[name].js',
	// 		},
	// 	},
	// },
	// Extension-friendly build settings
	server: {
		port: 5173,
		strictPort: true,
		hmr: {
			port: 5173,
		},
		cors: true,
	},
})
