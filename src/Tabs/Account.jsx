import {
    IonContent,
    IonPage,
    useIonRouter,
    IonItem,
    IonIcon  
} from "@ionic/react";
import { render } from "@testing-library/react";
import {
    arrowBack
} from "ionicons/icons";
import "../pages/Dashboard";

const Account =() => {
    let router = useIonRouter();
    const handleBack = () => {
        router.push('/dashboard');
      };
    render(

        <IonPage>
            <IonContent>
            <IonItem>
          <IonIcon
            className="back"
            style={{ fontSize: "20px", color: "primary" }}
            icon={arrowBack}
            onClick={(e) => {
              handleBack();
            }}
          />
        </IonItem>
            </IonContent>
        </IonPage>
    )

}
export default Account;