import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
  IonGrid
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";
import "./SignUp.css";
import { auth } from "../pages/firebaseConfig";
import { toastController, alertController } from "@ionic/core";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  async function handleButtonClick(message) {
    const toast = await toastController.create({
      color: "tertiary",
      position: "bottom",
      duration: 3000,
      message: message,
      showCloseButton: true,
    });
    await toast.present();
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, currentUser } = UserAuth();
  let router = useIonRouter();

  const handleSubmit = async () => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (name == null || name === "") {
      handleButtonClick("Please enter your name");
    } else if (email == null || email === "") {
      handleButtonClick("Please enter your email");
    } else if (password == null || password === "") {
      handleButtonClick("please enter the password");
    } else if (password.length < 6) {
      handleButtonClick("Password must be atleast 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter a valid email address");
    } else {
      try {
        await createUser(email, password);
        handleButtonClick("user registered successfully");

        router.push("/signin");
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    }
  };

  return (
    <IonPage>
      <IonContent className="signup-main">
        <IonGrid className="signup-grid">
        <IonRow className="signup-img-main">
        <IonImg className="signup-image" src="/assets/images/img2.jpg"></IonImg>
        </IonRow>
        <IonRow className="signup-head">SignUp</IonRow>
        <IonRow className="signup-name">
          <IonInput
            className="signup-input-name"
            placeholder="Please give Name"
            type="text"
            onIonChange={(e) => setName(e.detail.value)}
          ></IonInput>
          </IonRow>
          <IonRow className="signup-email">
          <IonInput
            className="signup-input-email"
            placeholder="Please give Email"
            type="text"
            onIonChange={(e) => setEmail(e.detail.value)}
          ></IonInput>
          </IonRow >
          <IonRow className="signup-password">
          <IonInput
            className="signup-input-password"
            placeholder="Please give Password"
            type="password"
            onIonChange={(e) => setPassword(e.target.value)}
          ></IonInput>
        </IonRow>
        <IonRow className="register-btn-main">
        <IonButton
          className="register-btn"
          color="light-green"
          onClick={handleSubmit}
        >
          Register
        </IonButton>
        </IonRow>
        <IonRow className="text">
        <IonLabel >Already have an Account? </IonLabel>
        <IonButton routerLink="/signin" className="signin-link">
          Sign In
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

export default SignUp;
