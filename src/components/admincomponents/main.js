import React, { Component } from 'react';
import Earing from "./smallcomp/earing"
import TotalStat from "./table/totalStat"
import RoundGraph from "./graph/roundgraph"
import SiteRevenu from "./graph/siteRevenu"
import TrafficView from "./graph/traffic view"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {gettotalstastics} from "../../action/adminACtion"
import PropTypes from 'prop-types';

class mainBody extends Component {
    componentDidMount() {
        this.props.gettotalstastics()

    }
  render() {
    return (
        <div >
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="m-t-30"><img src="../assets/images/thumbnail.png" width="48" height="48" alt="Mplify"/></div>
                        <p>Please wait...</p>
                </div>
            </div>
                <div className="overlay" style={{display: 'none'}}></div>
            <div id="wrapper">
                <div id="main-content">
                <div className="container-fluid ">
                    <div className="block-header">
                        <div className="row">
                        <div className="col-lg-5 col-md-8 col-sm-12">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="col-lg-7 col-md-4 col-sm-12 text-right">
                            <ul className="breadcrumb justify-content-end">
                                <li className="breadcrumb-item"><Link to="/"><i className="icon-home"></i></Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                            <Earing/> 
                            <RoundGraph/>
                            <div class="row clearfix">
                            <div class="col-lg-8 col-md-12">
                                 {/* <SiteRevenu/> */}
                            </div>
                        <div class="col-lg-4 col-md-12">
                            <TrafficView/>
                        </div>
                      <TotalStat/> 
                    </div>
              
                    </div>
                </div>
                </div>
        </div>
    );
  }
};
mainBody.ProtoTypes={
    gettotalstastics : PropTypes.func.isrequired,
    adminData : PropTypes.object.isrequired
}
const mapStateToProps = state =>({
    adminData:state.adminData
});

export default connect(mapStateToProps,{gettotalstastics})(mainBody);

