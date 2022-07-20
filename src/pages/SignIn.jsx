import {
  IonButton,
  IonImg,
  IonContent,
  IonPage,
  IonInput,
  IonLabel,
  IonIcon,
  useIonRouter,
  IonGrid,
  IonRow,
  useIonToast,
  useIonAlert,
  useIonLoading
} from "@ionic/react";
import { alert, logoFacebook, logoGoogle } from "ionicons/icons";
import "./SignIn.css";
import { useState } from "react";

import { UserAuth } from "../context/AuthContext";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const [present] = useIonToast();
  const [presentloading, dismissloading] = useIonLoading();
  const [presentAlert] = useIonAlert();

  const { signIn } = UserAuth();


  async function handleButtonClick(message) {
    present({
      color: "light-green",
      position: "top",
      duration: 3000,
      message: message,
      made: "ios",
      icon: alert
    });
  }

  const signInGoogle = async () => {
    GoogleAuth.initialize();
    const result = await GoogleAuth.signIn();
    console.log(result);
    if (result) {
      router.push("/dashboard");
      console.log(result);

    }
  }

  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "md",
      animated: true,
      cssClass: 'loginpage-alert',
      color: 'light'
    });
  }

  const router = useIonRouter();

  const ClearInputs = () => {
    setEmail("");
    setPassword("");

  }

  const handleSubmit = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (email == null || email === "") {
      handleButtonClick("Please enter email");
    } else if (password == null || password === "") {
      handleButtonClick("Please enter password");
    } else if (password.length < 6) {
      handleButtonClick("Password must be of 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter email address");
    } else {
      try {

        presentloading({
          message: 'Loading!...',
          duration: 3000,
          spinner: "lines-sharp",
        })
        await signIn(email, password);
        handleButtonClick("Login successfully");
        ClearInputs();
        dismissloading();
        router.push("/dashboard");
      } catch (e) {
        setError(e.message);
        handleAlert(e.message);
        dismissloading();
        ClearInputs();
      }
    }
  }




  return (
    <IonPage>
      <IonContent className="signin-main">
        <IonGrid className="signin-grid">
          <IonRow className="signin-image">
            <IonImg src="/assets/images/img2.jpg">
            </IonImg>
          </IonRow>
          <IonRow className="signin-head">Signin</IonRow>
          <IonRow className="signin-email">
            <IonInput
              className="signin-input-email"
              type="text"
              value={email}
              placeholder="Please Enter Email"
              onIonChange={(e) => setEmail(e.detail.value)}
            ></IonInput>
          </IonRow>
          <IonRow className="signin-password">
            <IonInput
              className="signin-input-password"
              type="password"
              value={password}
              placeholder="Please Enter Password"
              onIonChange={(e) => setPassword(e.detail.value)}
            ></IonInput>
          </IonRow>
          <IonRow className="login-btn-main">
            <IonButton
              className="login-btn"
              color="light-green"
              onClick={handleSubmit}
            >
              LogIn
            </IonButton>
          </IonRow>
          <IonRow className="text-signin">
            <IonLabel >Don't have an Acoount? &nbsp;</IonLabel>
            <IonButton fill="clear" onClick={ClearInputs} routerLink="/signup" className="signup-link">
              Sign Up
            </IonButton>
          </IonRow>
          <IonRow className="or-signin">
            <IonLabel >OR</IonLabel>
          </IonRow>

          <IonRow className="icons-signin">
            <IonIcon id="signin-fb-icon"
              style={{ fontSize: "20px", color: "primary" }}
              icon={logoFacebook}
            />
            <IonIcon id="signin-g-icon"
              onClick={signInGoogle}
              style={{ fontSize: "20px", color: "primary" }}
              icon={logoGoogle}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
