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
  IonLabel
} from "@ionic/react";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonContent className="home-content">
        <IonGrid className="home-grid">
          <IonRow>
            <IonImg
              className="furniture-image"
              src="/assets/images/img1.jpg"
            ></IonImg>
             </IonRow>
            <IonRow className="intro">
              Enjoy Your Online Shopping
            </IonRow>
         
          <IonRow >
              <IonLabel className="sub-content">
                Browse through all categories and shop the best furniture for your
                needs.
              </IonLabel>
            </IonRow>
            <IonRow>
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
