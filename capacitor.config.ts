import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'keyfurnising',
  webDir: 'build',
  server: {
    // url : 'http://192.168.1.11:3000',
    url : 'http://192.168.1.7:3001',
    cleartext: true
  }
};

export default config;
