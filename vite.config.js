import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stdLibBrowser from "vite-plugin-node-stdlib-browser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stdLibBrowser(), // Add the plugin to polyfill Node.js built-ins
  ],
  define: {
    "process.env": {
      VITE_BASE_BE_URL: "https://contact-management-jw8v.onrender.com",
    }, // Mock process object if needed
  },
});
