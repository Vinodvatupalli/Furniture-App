import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  isPlatform,
  useIonToast,
  useIonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Chairs from "./pages/Chairs";
import Tabs from "./pages/Tabs";
import { AuthContextProvider } from "./context/AuthContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { App as app } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./pages/firebaseConfig";


setupIonicReact();

const App = () => {
  const [updateDetails, setUpdateDetails] = useState({});
  const [appVersion, setAppVersion] = useState("");

  const updateRef = doc(db, "furniture-app-config", "rfXJKCIZMPPVIlhm3xCO");

  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  const handleToast = (msg) => {
    present({
      message: msg,
      position: "top",
      animated: true,
      duration: 2000,
      color: "dark3",
      mode: "ios",
    });
  };

  const handleAlert = (msg, title, btn, appVersion) => {
    presentAlert({
      header: title,
      subHeader: `Version: ${appVersion}`,
      message: msg,
      buttons: [
        {
          text: btn,
          role: "Download",
          handler: async () => {
            handleToast("Download Clicked");
            await Browser.open({
              url: "https://play.google.com/store/apps/details?id=com.furnitureapp.app",
            });
          },
        },
      ],
      backdropDismiss: true,
      translucent: true,
      animated: true,
      cssClass: "lp-sp-alert",
    });
  };

  const getAppInfo = async () => {
    let info = await app.getInfo();
    return info;
  };

  const getConfigData = async () => {
    const docSnap = await getDoc(updateRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", docSnap.data());
      setUpdateDetails(data.updateMsg);
      setAppVersion(data.current);
    } else {
      console.log("No such document!");
    }
  };

  const checkUpdate = async () => {
    try {
      if (isPlatform("android")) {
        const currentAppInfo = getAppInfo();
        if (appVersion > (await currentAppInfo).version) {
          const msg = updateDetails.msg;
          const title = updateDetails.title;
          const btn = updateDetails.btn;
          handleAlert(msg, title, btn, appVersion);
        }
      }
    } catch (error) {
      handleAlert(error.message);
    }
  };

  useEffect(() => {
    getConfigData();
    checkUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
     
        <AuthContextProvider>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>

              <Route exact path="/chairs">
                <Chairs />
              </Route>
              
              {/* <Route exact path="/tabs">
                <Tabs />
              </Route> */}


              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              {/* <Route exact path="/dashboard">
              <Dashboard />
            </Route> */}
               {/* <Route exact path="/tabs">
              <Redirect to="/tabs/dashboard" />
            </Route> */}
               <Route exact path="/tabs">
              <Tabs/>
            </Route>
             
            </IonRouterOutlet>
          </IonReactRouter>
          </IonApp>
        </AuthContextProvider>
     
    </>
  );
};

export default App;
