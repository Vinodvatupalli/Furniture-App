import {
    IonContent,
    IonHeader,
    IonPage
} from "@ionic/react";
import { render } from "@testing-library/react";
import {
    arrowBack
} from "ionicons/icons";

const Menu =() => {
    render(
        <IonPage>
            <IonContent>
            Hello World
            </IonContent>
        </IonPage>
    )

}
export default Menu;