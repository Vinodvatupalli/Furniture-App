import {
  IonButton,
  IonCard,
  IonImg,
  IonGrid,
  IonRow,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCol
} from "@ionic/react";
import "./Home.css";
// import Plugins from '@capacitor/core'

const Home = () => {

  // async function signIn(){
  //   console.log(Plugins.GoogleAuth.signIn())
  // }
  return (
    <IonPage>
      <IonContent className="home-content">
        <IonGrid className="home-grid">
          <IonRow className="logo-app-name">
            {/* <IonCol className="logo-img"> */}
          <IonImg className="img" src="/assets/images/logo.png" ></IonImg>
          {/* </IonCol> */}
          <IonCol className="app-name"> 
            <IonLabel >INTERIOR Furniture</IonLabel>
          </IonCol>
          </IonRow>
          <IonRow className="intro">
            Enjoy Your Online Shopping
          </IonRow>

          <IonRow className="sub-content">
            <IonLabel >
              Browse through all categories and shop the best furniture for your
              needs.
            </IonLabel>
          </IonRow>
          <IonRow className="main-started-btn">
            <IonButton
              routerLink="/signup"
              className="getstarted-btn"
              color="light-green"
              shape="round"
            >
              Get Started
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
