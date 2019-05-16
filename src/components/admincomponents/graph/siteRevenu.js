import React, { Component } from 'react';
import {connect} from "react-redux"

import PropTypes from 'prop-types';

class SiteRevnu extends Component {
    componentDidMount() {
       // getadmin()

    }
  render() {
      const {adminData} =this.props.adminData;
        return (
            
            <div class="card Sales_Overview">
                <div class="header">
                    <h2>Sales Overview</h2>
                    <ul class="header-dropdown">
                        <li> <a href="javascript:void(0);" data-toggle="cardloading" data-loading-effect="pulse"><i
                                    class="icon-refresh"></i></a></li>
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown"
                                role="button" aria-haspopup="true" aria-expanded="false"></a>
                            <ul class="dropdown-menu dropdown-menu-right animated bounceIn">
                                <li><a href="javascript:void(0);">Action</a></li>
                                <li><a href="javascript:void(0);">Another Action</a></li>
                                <li><a href="javascript:void(0);">Something else</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body">
                                <div id="Sales_Overview" class="ct_chart" ></div>
                                <div class="body xl-slategray text-center">
                                <div class="row clearfix">
                                        <div class="col-lg-4 col-md-4">
                                            <h2 class="font700">$15K</h2>
                                            <small>17% <i class="fa fa-level-up text-success"></i>
                                                Total Revenue</small>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <h2 class="font700">$1200</h2>
                                            <small>18% <i class="fa fa-level-down text-danger"></i>
                                                Current Month</small>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <h2 class="font700">$3489</h2>
                                            <small>18% <i class="fa fa-level-up text-success"></i>
                                                This Year</small>
                                        </div>
                                    </div>
                                </div>
                 
               </div>
               </div>
        
        );
    }
}
SiteRevnu.ProtoTypes={
   // getadmin : PropTypes.func.isrequired,
    adminData : PropTypes.object.isrequired
}
  
  const mapStateToProps = state =>({
    adminData:state.adminData
  });
  export default connect(mapStateToProps,{})(SiteRevnu);