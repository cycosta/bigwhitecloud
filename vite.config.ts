import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bigwhitecloud/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/tokens/_breakpoints.scss";
          @import "/src/tokens/_colors.scss";
          @import "/src/tokens/_spacing.scss";
        `,
      },
    },
  },
});
