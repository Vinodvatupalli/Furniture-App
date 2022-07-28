import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeSharp,
  searchSharp,
  menu,
  cartSharp,
  personCircleSharp,
} from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import Menu from "./Menu";
import Account from "./Account";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Chairs from "./Chairs";

const Tabs = () => {
  return (
  
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tabs/dashboard">
              <Dashboard />
            </Route>

            {/* <Route exact path="/tabs/menu">
              <Menu />
            </Route> */}
            {/* <Route exact path="/tabs/cart">
              <Cart />
            </Route> */}
            {/* <Route exact path="/tabs/search">
              <Search />
            </Route> */}
            <Route exact path="/tabs/account">
              <Account />
            </Route>

            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/chairs">
                <Chairs />
              </Route>
            <Route exact path="/tabs">
              <Redirect to="/tabs/dashboard" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="Menu" >
              <IonIcon icon={menu} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Cart">
              <IonIcon icon={cartSharp} />
              <IonLabel>Cart</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Dashboard" href="/tabs/Dashboard">
              <IonIcon icon={homeSharp} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Search">
              <IonIcon icon={searchSharp} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Account" href="/tabs/Account">
              <IonIcon icon={personCircleSharp} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
  
  );
};

export default Tabs;
