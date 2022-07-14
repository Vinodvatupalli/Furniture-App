import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.furntitureptg.app",
  appName: "Furniture-App",
  webDir: "build",
  bundledWebRuntime: false,

  // plugins: {
  //   SplashScreen: {
  //     launchAutoHide: false,
  //     backgroundColor: "#ffffffff",
  //     // androidSplashResourceName: "splash",
  //     androidScaleType: "CENTER_CROP",
  //     // showSpinner: true,
  //     // // androidSpinnerStyle: "large",
  //     // iosSpinnerStyle: "small",
  //     // spinnerColor: "#999999",
  //     splashFullScreen: true,
  //     splashImmersive: false,
  //     // layoutName: "launch_screen",
  //     // useDialog: true,
  //   }
  // }

  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
  //   },
  // },

  // /// <reference types="'@codetrix-studio/capacitor-google-auth'" />
  // plugins: {
    // GoogleAuth: {
    //   scopes: ['profile', 'email'],
    //   serverClientId: '555951801946-9je7oan7i2gl8ckcmsjd447f0mbsi915.apps.googleusercontent.com',
    //   forceCodeForRefreshToken: true,
    // },
  },

}
}
export default config;

