import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {logoFacebook,logoGoogle,logoTwitter} from 'ionicons/icons';
import "./SignUp.css";
// import '../assets/icon/img2.jpg';
const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="signup-main">
        <IonImg className="signup-image" src="/assets/images/img2.jpg"></IonImg>
        <div className="signup-head">
          SignUp
        </div><br/><br/>
        <div className="signup-fields">
         <IonInput className="signup-name" placeholder="Enter Name"></IonInput> 
        <IonInput className="signup-email" placeholder="Enter Email"></IonInput>
        <IonInput className="signup-password" placeholder="Enter Password"></IonInput>
        </div>
        <IonButton  routerLink='/signin'
        className="register-btn" color="light-green" >Register</IonButton>
        
          <IonLabel className="text">Already have an Account? &nbsp;<u className="signin-link">Sign In</u></IonLabel>
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

export default SignUp;
