import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "keyfurnising",
  webDir: "build",
  server: {
    // url: "https://cheery-gingersnap-233416.netlify.app",
    url: "http://192.168.1.7:3000",
    cleartext: true,
  },
};

export default config;
