import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
	  react(),
	  federation({
		name: "app",
		remotes: {
		  remote: "http://localhost:4174/assets/remoteEntry.js",
		},
		shared: ["react", "react-dom"],
	  }),
	],
	build: {
	  modulePreload: false,
	  target: "esnext",
	  minify: false,
	  cssCodeSplit: false,
	},
  });