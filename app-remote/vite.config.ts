import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [
	  react(),
	  federation({
		filename: 'remoteEntry.js',
		name: 'remote',
		exposes: {
			'./remote-app': './src/App.tsx',
		},
		shared: ["react", "react-dom", "jotai"],
	  }),
	],
	build: {
	  modulePreload: false,
	  target: "esnext",
	  minify: false,
	  cssCodeSplit: false,
	},
  });