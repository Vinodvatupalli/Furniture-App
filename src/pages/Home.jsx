import { IonButton, IonCard,IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonImg className="furniture-image" src="/assets/images/img1.jpg"></IonImg><br/><br/>
      <h1 className="intro">
          Enjoy Your Online Shopping &emsp;&emsp;&emsp;&ensp;&nbsp;
          </h1>
        <div  className="main">
          <br/><br/>
          <div className="subcon">
            Browse through all categories and shop the best furniture for your needs.
          </div><br/><br/>
          <IonButton
          routerLink='/signup'
          className='getstarted-btn' color="light-green" shape="round">Get Started</IonButton>

        </div>


        
      </IonContent>
    </IonPage>
  );
};

export default Home;
