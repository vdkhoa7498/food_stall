
import DashBoard from './pages/dashBoard/dashBoard'
import history from "./utils/history";
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import { SRoute, LoginRoute, PublicRoute } from "./components/common/customRoutes";
import Welcome from './pages/welcome';


const RootRouter = () =>{
  return(
    <Router>
      <Switch history={history}>
      <PublicRoute path="/" exact component={Welcome}></PublicRoute>
        <PublicRoute path="/dashBoard" exact component={DashBoard}></PublicRoute>
        
        {/* <LoginRoute path="/login" exact component={Login}></LoginRoute>
        <SRoute path="/profile" exact component={Profile}></SRoute>
        <PublicRoute path="/not-found" component={NotFound}></PublicRoute> */}
        {/* <Route path="/book-detail/:id" exact>
          <ProductDetail/>
        </Route>
        <SRoute path="/my-shop" exact component={Myshop}></SRoute>
        <SRoute path="/add-book" exact component={AddBook}></SRoute> */}
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </Router>
  )
}

export default RootRouter;