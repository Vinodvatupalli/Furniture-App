import {
    IonButton,
    IonCard,
    IonImg,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonSearchbar,
    IonItem,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonAvatar,
    useIonRouter,
    IonGrid,
    IonRow,
    IonCardContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    useIonViewWillEnter,
    IonCol,
    IonTabs,
} from "@ionic/react";
import {
    arrowBack,
    menu,
    cart,
    home,
    search,
    personCircleOutline,
    logOut,
} from "ionicons/icons";
import { entries } from "../pages/data";
import { useState } from "react";


import './Dashboard';


const Chairs = () => {

    let router = useIonRouter();

  const handleBack = () => {
    router.push("/dashboard");
  };

    const [alldata, setData] = useState ([]);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);



    const pushData = () => {
        const max = alldata.length + 10;
        const min = max - 10;
        const newData = [];

        if (alldata.length === 20) {
            setInfiniteDisabled(true);
        } else {
            for (let i = min; i < max; i++) {
                newData.push(entries[i]);
            }
            setData([
                ...alldata,
                ...newData
            ]);
        }
    }
    const loadData = (ev) => {
        console.log(alldata.length);
        setTimeout(() => {
            pushData();
            console.log('Loaded data');
            ev.target.complete();
            if (alldata.length === 1000) {
                setInfiniteDisabled(true);
            }
        }, 2000);
    }
    useIonViewWillEnter(() => {
        pushData();
    });


    return (
        <IonPage>
            <IonContent class="content-dashboard">
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
                <IonGrid >
                    {alldata.map((data) => {
                        return (
                            <IonCard >
                                <IonRow size="4" >
                                    <IonCol ><IonImg src={data.image} /></IonCol>
                                    <IonCol size="7">
                                        <IonRow className="product">{data.product}</IonRow>
                                        <IonRow className="price">{data.price}</IonRow>
                                    </IonCol>

                                </IonRow>
                            </IonCard>
                        )
                    })
                    }
                    <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
                        <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data...">

                        </IonInfiniteScrollContent>
                    </IonInfiniteScroll>

                </IonGrid>

            </IonContent>
        </IonPage>
    )


}

export default Chairs;