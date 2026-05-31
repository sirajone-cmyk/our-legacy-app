import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.ourlegacy.learning",
  appName: "OUR LEGACY",
  webDir: "apps/web/dist",
  server: {
    androidScheme: "https"
  }
};

export default config;
