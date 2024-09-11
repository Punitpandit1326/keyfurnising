import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "keyfurnising",
  webDir: "build",
  server: {
    // url: "https://keyfurnish.netlify.app",
    url: "http://192.168.1.4:3000",
    cleartext: true,
  },
};

export default config;
