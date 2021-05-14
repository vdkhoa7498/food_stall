import React, {Suspense} from 'react'
import PrivateLayout from '../pages/privateLayout/privateLayout'
import history from "../utils/history";
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import {getJwtFromStorage, isAuthenticated} from "../utils/utils";

import RegisterPage from '../pages/authentication/RegisterPage/registerPage'
import LoginPage from '../pages/authentication/LoginPage/loginPage';
import SaleSession from '../pages/saleSession/saleSession';
import Shipper from '../pages/shippers/shippers';
import FoodSetting from '../pages/settings/foods/foodSetting';
import CustomerSetting from '../pages/settings/customer/customerSetting';
import Statistics from '../pages/statistics/statistics';

let AuthFragment = () => {
  if (!isAuthenticated()) {
    return <Redirect to={'/sale-session'}/>;
  }
  return <Redirect to={'/login'}/>;
};


const RootRouter = () =>{
  return(
    <Suspense fallback={null}>
      <Router>
        <Switch history={history}>
          <Route exact path={["/login", "/register"]}>
            {(!isAuthenticated())
            ? 
            <Route exact path={["/login", "/register"]}>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/register" component={RegisterPage}/>
            </Route>
            : <Redirect to="/"/>}
          </Route>
          
          <Route exact path="/" component={AuthFragment}/>
          <Route exact path={["/sale-session", "/shippers", "/setting/foods", "/setting/customers", "/statistics"]}>
            <PrivateLayout>
              <Route exact path="/sale-session">
                <SaleSession/>
              </Route>
              <Route exact path="/shippers" >
                <Shipper/>
              </Route>
              <Route exact path="/setting/foods" component={FoodSetting}/>
              <Route exact path="/setting/customers" component={CustomerSetting}/>
              <Route exact path="/statistics" component={Statistics}/>
            </PrivateLayout>
          </Route>
          <Route exact path="/test">
            <PrivateLayout>

            <SaleSession/>
            </PrivateLayout>
          </Route>
        </Switch>
      </Router>
    </Suspense>
    
  )
}

export default RootRouter;