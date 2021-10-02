import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Placeorder from './components/Placeorder/Placeorder';

function App() {
  return (
    <div>
     
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route exact path="/shop">
          <Shop></Shop>
          </Route>
          <Route exact path="/ordersReview">
            <OrderReview></OrderReview>
          </Route>

          <Route exact path="/inventory">
     <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
             <Placeorder></Placeorder>
          </Route>

          <Route path="*">
         <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
