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
} from "@ionic/react";
import { logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";
import "./SignIn.css";
import React, { useState } from "react";


import { toastController } from "@ionic/core";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, user } = UserAuth();


  async function handleButtonClick(message) {
    const toast = await toastController.create({
      color: "dark3",
      position: "top",
      duration: 3000,
      message: message,
      showCloseButton: true,
    });
    await toast.present();
  }

  const router = useIonRouter();

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
        router.push("/dashboard");
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    }
  };

  return (
    <IonPage>
      <IonContent className="signin-main">
        <IonImg className="signin-image" src="/assets/images/img2.jpg"></IonImg>
        <div className="signin-head">SignIn</div>
        <br />
        <br />
        <div className="signin-fields">
          <IonInput
            className="signin-email"
            placeholder="Enter Email"
            onIonChange={(e) => setEmail(e.detail.value)}
          ></IonInput>
          <IonInput
            className="signin-password"
            placeholder="Enter Password"
            onIonChange={(e) => setPassword(e.detail.value)}
          ></IonInput>
        </div>
        <IonButton
          className="login-btn"
          color="light-green"
          onClick={handleSubmit}
        >
          LogIn
        </IonButton>

        <IonLabel className="text">Don't have an Acoount? &nbsp;</IonLabel>
        <IonButton routerLink="/signup" className="signup-link">
          Sign Up
        </IonButton>
        <IonLabel className="or">OR</IonLabel>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
