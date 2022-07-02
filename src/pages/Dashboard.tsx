import { IonButton, IonCard,IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonSearchbar, IonItem } from '@ionic/react';
import {arrowBack} from 'ionicons/icons';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="content">
        <IonToolbar>
      <IonIcon className='back' style={{fontSize:"20px" ,color:"primary" }}
                  icon={arrowBack}/>
        </IonToolbar>
      <h1 className="dashboard-intro">
          Discover the Best Furniture &emsp;&emsp;
          </h1>
          <IonSearchbar className='search-dashboard' showCancelButton="focus"></IonSearchbar>
          <h3 className="cat">Categories</h3>
          <div className="categories" >
            <IonButton  id='btn1' color="dark-ash">Chairs</IonButton>
            <IonButton id="btn2" color="dark-ash"> Tables </IonButton>
            <IonButton id="btn3" color="dark-ash">Cupboards</IonButton>
            <IonButton id="btn4" color="dark-ash">Sofa</IonButton>
          </div>
          <IonCard className="furniture1"></IonCard>
          {/* <IonItem></IonItem>
          <IonItem></IonItem> */}
          {/* <IonCard id="furniture2"></IonCard> */}
        
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;