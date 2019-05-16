import React, { Component } from 'react';
import CustomerTable from "./table/customertable"
import Customermsg from "./smallcomp/CustomerMessage"


class Customer extends Component {
  render() {
    return (
      <div>
            <div className="page-loader-wrapper">
            <div className="loader">
            <div className="m-t-30"><img src="../assets/images/thumbnail.png" width="48" height="48" alt="Mplify"/></div>
              <p>Please wait...</p>
            </div>
            </div>
            <div className="overlay" style={{display: 'none'}}></div>

            <CustomerTable/>
      </div>
    );
  }
}
export default Customer