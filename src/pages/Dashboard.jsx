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
import './SignIn';

import "./Dashboard.css";
import { auth } from "../pages/firebaseConfig";
import { UserAuth } from "../context/AuthContext";
import {toastController} from "@ionic/core";


const Dashboard = () => {
  let router = useIonRouter();

  const {logout}= UserAuth();

  const handleBack = () => {
    router.push("/signin");
  };

  // const handleToast = async(message) => {
  //   const toast = await toastController.create({
  //     color: "tertiary",
  //     position: "bottom",
  //     duration: 3000,
  //     message: message,
  //     showCloseButton: true,
  //   });
  //   await toast.present();
  // };
  const handleLogout = async() => {
    try{
      await logout();
      router.push('/signin');
      window.location.reload();
    }
    catch(e){
     console.log(e.message);
    }
  }
    
  
  
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

        <IonGrid className="dashboard-grid">
          <IonRow className="dashboard-intro">
            Discover the Best Furniture 
          </IonRow>
          <IonRow>
            <IonSearchbar
              className="search-dashboard"
              showCancelButton="focus"
            ></IonSearchbar>
          </IonRow>
          <IonRow className="cat">Categories</IonRow>
          <IonRow className="categories">
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
          </IonRow>

          <IonRow className="cards1">
            <IonCol >
              <IonCard className="furniture1">
                <IonImg
                  className="card-img1"
                  src="/assets/images/img4.webp"
                ></IonImg>
                </IonCard>
              <IonLabel className="cardimag1-name">
                William Solid Wood <br /></IonLabel>
                <IonLabel className="cardimag1-name"> ₹ 17,999</IonLabel>
              
              
            </IonCol>

            <IonCol>
              <IonCard className="furniture2">
                <IonImg
                  className="card-img2"
                  src="/assets/images/img5.webp"
                ></IonImg>
               </IonCard>
              <IonLabel className="cardimag2-name">
                Dining Chair <br/></IonLabel>
               <IonLabel className="cardimag2-name">₹ 12,070</IonLabel>   
              
             
            </IonCol>
          </IonRow>

          <IonRow className="cards2">
            <IonCol >
              <IonCard className="furniture3">
                <IonImg
                  className="card-img3"
                  src="/assets/images/img6.webp"
                ></IonImg>
             </IonCard>
              <IonLabel className="cardimag3-name">
                Leather Chair <br />
                <IonLabel className="cardimag3-name">₹ 10,050</IonLabel>
              </IonLabel>
              
            </IonCol>

            <IonCol>
              <IonCard className="furniture4">
                <IonImg
                  className="card-img4"
                  src="/assets/images/img7.webp"
                ></IonImg>
              </IonCard>
              <IonLabel className="cardimag4-name">
                Sofa <br/>
                <IonLabel className="cardimag4-name"> ₹ 13,090</IonLabel>
              </IonLabel>
             
            </IonCol>
          </IonRow>

          <IonRow className="logout-btn" >
          <IonButton color="light-green" onClick={handleLogout}>LogOut</IonButton>

        </IonRow> 

        </IonGrid>

        
    
        <IonTabBar >
          <IonTabButton tab="Menu">
            <IonIcon icon={menu} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Cart">
            <IonIcon icon={cart} />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Account">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
        
      </IonContent>
    </IonPage>
  );
  
 };



export default Dashboard;
