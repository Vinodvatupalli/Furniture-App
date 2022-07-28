import {
    IonContent,
    IonPage,
    useIonRouter,
    IonItem,
    IonIcon,  
    IonButton,
    logout,
    IonRow,
    IonLabel,
    IonGrid,
    IonAvatar
} from "@ionic/react";
import { render } from "@testing-library/react";
import {
    arrowBack
} from "ionicons/icons";
import "../pages/Dashboard";
import { UserAuth } from "../context/AuthContext";
import "./Account.css";
import {
  personCircleSharp
} from "ionicons/icons";
import "./Tabs";

const Account =() => {
    let router = useIonRouter();
    // const handleBack = () => {
    //     router.push('/tabs');
    //   };
    const { logout } = UserAuth();
    const handleLogout = async () => {
      try {
        await logout();
        router.push('/signin');
        window.location.reload();
      }
      catch (e) {
        console.log(e.message);
      }
    }
    render(

        <IonPage>
            <IonContent className="acc-content">
            <IonItem>
              <IonButton fill="clear" routerLink="./tabs">
          <IonIcon
            className="back"
            style={{ fontSize: "20px", color: "primary" }}
            icon={arrowBack}
          />
          </IonButton>
        </IonItem>
        <IonGrid className="acc-grid">
        <IonRow  className="account">
          <IonLabel>My Profile</IonLabel>
        </IonRow>
        <IonRow className="profile-icon">
          <IonIcon icon={personCircleSharp} />
        </IonRow>
        <IonRow className="logout-btn" >
            <IonButton color="light-green" onClick={handleLogout}>LogOut</IonButton>

          </IonRow>
          </IonGrid>
            </IonContent>
        </IonPage>
    )

}
export default Account;