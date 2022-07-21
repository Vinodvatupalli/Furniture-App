import {
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonContent,
  IonPage,
  IonLabel,
  IonCol
} from "@ionic/react";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonContent className="home-content">
        <IonGrid className="home-grid">
          <IonRow className="logo-app-name">
            <IonImg className="img" src="/assets/images/logo.png" ></IonImg>
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
              Get Started with INTERIOR Furniture App
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
