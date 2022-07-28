import {
  IonButton,
  IonCard,
  IonImg,
  IonContent,
  IonPage,
  IonIcon,
  IonSearchbar,
  IonItem,
  IonTabBar,
  IonTabButton,
  IonLabel,
  useIonRouter,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  LazyLoadImage,
  IonText,
  IonRouterLink,
  Router
} from "@ionic/react";
import {useEffect,useState} from 'react';
// import {
//   arrowBack,
//   menu,
//   cart,
//   home,
//   search,
//   personCircleOutline,
// } from "ionicons/icons";
import './SignIn';
import './Chairs';
import './Account';
import "./Dashboard.css";
import { collection,getDocs } from "firebase/firestore";
import {db} from "./firebaseConfig";
import { router } from "react-router";

const Dashboard = () => {

  // const handleBack = () => {
  //   router.push("/signin");
  // };

  const productRef = collection(db, "categories");
  const [products, setProducts] = useState([]);

useEffect(() => {
  let unmounted=false;
  getDocs(productRef).then((snapshot) => {
    const products= [];
    snapshot.docs.forEach((docs) =>{
      products.push({...docs.data(), id:docs.id});
    })
    if(!unmounted){
      setProducts(products);
    }
  });
  return () => {
    unmounted=true;
  } 
},[])




  return (
    <IonPage>
      <IonContent class="content-dashboard">
        <IonToolbar>
        
        </IonToolbar>

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
         

          <IonRow>
          {products.map((data) => {
            return(
              <IonCol
                  key={data.id}
                  className="ion-text-center"
                  size="6"
                  // sizeSm="4"
                  // sizeMd="3"
                >
                  <IonCard key={data.id} button className="ion-padding ion-text-center"
                  routerLink="/chairs">
                        {/* Redirect to={`/${data.title.toLowerCase()}`}> */}

                     {/* onClick={() =>{ router.push(`/${data.title}`)}} */}
                    
                    <IonImg className="categories-images" src={data.image}  width="100px" height="100px"/>
                    <IonText style={{ fontSize: "12px", fontWeight: "bold", margin: "auto" }}>{data.title}</IonText>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>

         

        </IonGrid>

      </IonContent>
    </IonPage>
  );

};



export default Dashboard;