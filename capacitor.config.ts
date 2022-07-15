import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.furntitureptg.app',
  appName: 'Furniture-App',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
        launchShowDuration : 1000
    },


  // server:{
  //   url: 'http://172.17.3.11:8100',
  //   cleartext: true
  //   },


  GoogleAuth: {
    scopes: ["profile","email"],
    serverClientId: "555951801946-bvnsarl2okhdsar6986nqs3gh3gul0jp.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
  },
},

  
  // plugins: {
  //   SplashScreen: {
  //     // launchShowDuration: 3000,
  //     launchAutoHide: true,
  //     backgroundColor: "#ffffffff",
  //     androidSplashResourceName: "splash",
  //     androidScaleType: "CENTER_CROP",
  //     showSpinner: true,
  //     androidSpinnerStyle: "large",
  //     iosSpinnerStyle: "small",
  //     spinnerColor: "#999999",
  //     splashFullScreen: true,
  //     splashImmersive: true,
  //     layoutName: "launch_screen",
  //     useDialog: true,
  //   },
  // },
};

export default config;
