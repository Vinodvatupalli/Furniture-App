import {
    IonContent,
    IonPage
} from "@ionic/react";
import { render } from "@testing-library/react";
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