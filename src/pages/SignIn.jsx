import {
  IonButton,
  IonCard,
  IonImg,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonIcon,
  useIonRouter,
  IonGrid,
  IonRow,
  useIonToast,
  useIonAlert
} from "@ionic/react";
import { alert, logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";
import "./SignIn.css";
import React, { useState } from "react";


import { toastController } from "@ionic/core";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [present,dismiss]= useIonToast();
  const [presentAlert]= useIonAlert();

  const { signIn } = UserAuth();


  async function handleButtonClick(message) {
    // const toast = await toastController.create({
      present({
      color: "light-green",
      position: "top",
      duration: 3000,
      message: message,
      made:"ios",
      icon: alert
    });
    // await toast.present();
  }

  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "md",
      animated:true,
      cssClass: 'loginpage-alert',
      color: 'light'
    });
  }

  const router = useIonRouter();

  const ClearInputs=() => {
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
        await signIn(email, password);
        handleButtonClick("Login successful");
        ClearInputs();
        router.push("/dashboard");
      } catch (e) {
        setError(e.message);
        handleAlert(e.message);
      }
    }
    // window.location.reload(false);
  };

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
        <IonButton fill="clear" routerLink="/signup" className="signup-link">
          Sign Up
        </IonButton>
        </IonRow>
        {/* <IonLabel className="or">OR</IonLabel>
        <div className="icons">
          <IonIcon
            style={{ fontSize: "20px", color: "primary" }}
            icon={logoFacebook}
          />
          &emsp;
          <IonIcon
            style={{ fontSize: "20px", color: "primary" }}
            icon={logoGoogle}
          />
          &emsp;
          <IonIcon
            style={{ fontSize: "20px", color: "primary" }}
            icon={logoTwitter}
          />
          &emsp;
        </div> */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
