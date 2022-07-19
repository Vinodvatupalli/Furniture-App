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
    IonText
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
import { LazyLoadImage } from "@dcasia/react-lazy-load-image-component-improved";
import 'react-lazy-load-image-component/src/effects/blur.css';



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
            if (alldata.length === 20) {
                setInfiniteDisabled(alldata.length<20);
            }
        }, 2000);
    }
    useIonViewWillEnter(() => {
        pushData();
    });

    const handleCategory = (path) => {
        router.push(path);
        window.location.reload();
      };


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
                    <IonRow>
                    {alldata.map((data) => {
                        return (
                            <IonCol
                            key={data.id}
                            className="ion-text-center"
                            size="6"
                            sizeSm="4"
                            sizeMd="3"
                          >
                            <IonCard key={data.id} button className="ion-padding ion-text-center" onClick={() =>
                      handleCategory("/tabs/home/" + data.title.toLowerCase())}>
                                {/* <IonRow size="4" >
                                    <IonCol ><IonImg src={data.image} /></IonCol>
                                    <IonCol size="7">
                                        <IonRow className="product">{data.product}</IonRow>
                                        <IonRow className="price">{data.price}</IonRow>
                                    </IonCol>

                                </IonRow> */}
                    <IonRow>
                        <IonCol>
                    <LazyLoadImage src={data.image} effect="blur"  placeholderSrc={process.env.PUBLIC_URL + "/assets/images/alt img.png"} width="100px" height="100px" style={{margin: "auto"}} />
                    </IonCol>
                    <IonCol>
                    <IonRow><IonText style={{ fontSize: "12px", fontWeight: "bold", margin: "auto" }}>{data.product}</IonText></IonRow> 
                   <IonRow><IonText style={{ fontSize: "12px", fontWeight: "bold", margin: "auto" }}>{data.price}</IonText></IonRow> 
                    </IonCol>
                    </IonRow>
                            </IonCard>
                            </IonCol>
                        )
                    })
                    }
                    </IonRow>

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