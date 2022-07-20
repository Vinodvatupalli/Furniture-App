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
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
