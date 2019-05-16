import React, { Component } from 'react';
import {BrowserRouter as Router ,Route} from "react-router-dom"
import Navbar from './components/layout/Navbar';
import Customer from './components/admincomponents/customer';
import Main from "./components/admincomponents/main"

import Authori from "./components/admincomponents/authorization"

import Prodcer from "./components/admincomponents/Producers"
import Transporter from "./components/admincomponents/transporter"
import Report from "./components/admincomponents/report"
import ContactUs from "./components/admincomponents/Contactus"
import Orders from "./components/admincomponents/orders"
import {Provider} from "react-redux"
import stored from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={stored}>
          <Router>
      <div>
        <Navbar />
         
        <Route exact path="/"component={Main} />
        <Route exact path="/authoriazation" component={Authori} />
        <Route exact path="/producer" component={Prodcer} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/transporter" component={Transporter} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/orders" component={Orders} />
        
      </div>
    </Router>
    </Provider>
    );
  }
}

export default App;
