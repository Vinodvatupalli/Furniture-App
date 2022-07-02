import { IonButton, IonCard,IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonIcon } from '@ionic/react';
import { logoFacebook, logoGoogle, logoTwitter } from 'ionicons/icons';
import './SignIn.css';

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonImg className="signin-image" src="/assets/images/img2.jpg"></IonImg>
        <div className="signin-head">
          SignIn
        </div><br/><br/>
        <div className="signin-fields">
        <IonInput className="signin-email" placeholder="Enter Email"></IonInput>
        <IonInput className="signin-password" placeholder="Enter Password"></IonInput>
        </div>
        <IonButton className="login-btn" color="light-green" >LogIn</IonButton>
        
          <IonLabel className="text">Don't have an Acoount? &nbsp;<u className="signup-link">Sign Up</u></IonLabel>
          <IonLabel className="or">OR</IonLabel>
          <div className="icons">
          <IonIcon style={{fontSize:"20px" ,color:"primary" }}
                  icon={logoFacebook}/>&emsp;
         <IonIcon style={{fontSize:"20px" ,color:"primary" }}
                  icon={logoGoogle}/>&emsp;
         <IonIcon style={{fontSize:"20px" ,color:"primary" }}
                  icon={logoTwitter}/>&emsp;
          </div>
        


        
      </IonContent>
    </IonPage>
  );
};

export default SignIn;