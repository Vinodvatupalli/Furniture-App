import {
  IonButton,
  IonContent,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  useIonRouter,
  IonGrid,
  useIonAlert,
  useIonToast,
  useIonLoading
} from "@ionic/react";
import { useState } from "react";
import { alert } from "ionicons/icons";
import "./SignUp.css";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [present] = useIonToast();
  async function handleButtonClick(message) {
    present({
      color: "light-green",
      position: "top",
      duration: 3000,
      message: message,
      showCloseButton: true,
      icon: alert
    });
    
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const { createUser } = UserAuth();
  const [presentloading, dismissloading] = useIonLoading();
  const [presentAlert] = useIonAlert();

  let router = useIonRouter();

  const ClearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");

  }

  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "ios",
      color: "darkgreen",
    });
  }

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

        presentloading({
          message: 'Loading!...',
          duration: 3000,
          spinner: "lines-sharp",
        })

        await createUser(email, password);
        handleButtonClick("user registered successfully");
        ClearInputs();
        dismissloading();
        router.push("/signin");

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
      <IonContent className="signup-main">
        <IonGrid className="signup-grid">
          <IonRow className="signup-img-main">
            <IonImg className="signup-image" src="/assets/images/img2.jpg"></IonImg>
          </IonRow>
          <IonRow className="signup-head">Signup</IonRow>
          <IonRow className="signup-name">
            <IonInput
              className="signup-input-name"
              placeholder="Please Enter Name"
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value)}
            ></IonInput>
          </IonRow>
          <IonRow className="signup-email">
            <IonInput
              className="signup-input-email"
              placeholder="Please Enter Email"
              type="text"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value)}
            ></IonInput>
          </IonRow >
          <IonRow className="signup-password">
            <IonInput
              className="signup-input-password"
              placeholder="Please Enter Password"
              type="password"
              value={password}
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
            <IonButton fill="clear" onClick={ClearInputs} routerLink="/signin" className="signin-link">
              Sign In
            </IonButton>
          </IonRow>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default SignUp;
