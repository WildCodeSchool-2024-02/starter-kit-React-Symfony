import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import reactPlugin from "@vitejs/plugin-react";
import CustomHmr from "./custom-hmr";

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    reactPlugin(),
    symfonyPlugin({
      stimulus: true,
      viteDevServerHostname: "localhost",
    }),
    CustomHmr(),
  ],
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.js",
      },
    },
  },
});
