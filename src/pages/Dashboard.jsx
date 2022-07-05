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
  useIonRouter
} from "@ionic/react";
import { arrowBack, menu, cart, home, search, personCircleOutline } from "ionicons/icons";

import "./Dashboard.css";

const Dashboard = () => {

  let router= useIonRouter();

  const handleBack = () =>{
    router.push("/signin");
  }
  return (
    <IonPage>
      <IonContent class="content">
        <IonToolbar>
          <IonIcon
            className="back"
            style={{ fontSize: "20px", color: "primary" }}
            icon={arrowBack}
            onClick={(e)=>{handleBack()}}
          />
        </IonToolbar>
        <h1 className="dashboard-intro">
          Discover the Best Furniture &emsp;&emsp;
        </h1>
        <IonSearchbar
          className="search-dashboard"
          showCancelButton="focus"
        ></IonSearchbar>
        <h3 className="cat">Categories</h3>
        <div className="categories">
          <IonButton id="btn1" color="dark-ash">
            Chairs
          </IonButton>
          <IonButton id="btn2" color="dark-ash">
            Tables
          </IonButton>
          <IonButton id="btn3" color="dark-ash">
            Cupboards
          </IonButton>
          <IonButton id="btn4" color="dark-ash">
            Sofa
          </IonButton>
        </div>
        <div className="cards">
          <IonCard className="furniture1">
            <IonImg className="card-img1" src="/assets/images/img4.webp"></IonImg>
          </IonCard>
          <IonCard className="furniture2">
            <IonImg className="card-img2" src="/assets/images/img5.webp"></IonImg>
          </IonCard>
        </div>
        <div className="cardimag1-name">
          William Solid Wood <br />
          ₹ 17,999
        </div>
        <div className="cardimag2-name">
          Dining Chair <br />
          ₹ 12,070
        </div>
        <IonTabBar className="bottom-tab">

          <IonTabButton tab="menu">
            <IonIcon icon={menu} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>

          <IonTabButton tab="cart">
            <IonIcon icon={cart} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>

          <IonTabButton tab="person">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
