import React, { Component } from 'react';
import MiniGraph from "./minigraph"
import {connect} from "react-redux"
import {gettotalstastics} from "../../../action/adminACtion"
import PropTypes from 'prop-types';

class RoundGraph extends Component {
    onchange(){}
    componentDidMount() {
        console.log(" ==-- > ",this.props)
        this.props.gettotalstastics()
    }
    render() {
        const {totalstat} =this.props.totalstat;
        console.log("rrrr",totalstat)

    return (  
        <div class="row clearfix">
            <div class="col-lg-2 col-md-3 col-sm-6">
            <div id="Summary2" class="carousel slide" data-ride="carousel" data-interval="2800">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card text-center">
                            <div class="body">
                                <input type="text" class="knob2" value="90" data-width="69" data-height="69"
                                    data-thickness="0.07" data-bgColor="#eceeef" data-fgColor="#2e9a4a"
                                    readonly />
                                <h4 class="font-22 mt-4">
                                    <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> {totalstat.totalSells}%</small>
                                    Sales
                                    <span class="d-block font-13 mt-1">Last Week</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card bg-dark text-center">
                            <div class="body">
                                <input type="text" class="knob2" value="34" data-width="69" data-height="69"
                                    data-thickness="0.07" data-bgColor="#434b52" data-fgColor="#2e9a4a"
                                    readonly />
                                <h4 class="font-22 text-col-white mt-4">
                                    <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i>76 </small>
                                    Profits
                                    <span class="d-block font-13 mt-1">Last Month</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
            <div id="Summary1" class="carousel slide" data-ride="carousel" data-interval="3200">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card bg-success text-center">
                        <div class="body">
                            <input type="text" class="knob2" value="43" data-width="69" data-height="69"
                                data-thickness="0.07" data-bgColor="#2e9a4a" data-fgColor="#ffffff"
                                readonly 
                                onChange={this.onchange.bind(this)} />
                            <h4 class="font-22 text-col-white mt-4">
                                <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> 54%</small>
                                Lead
                                <span class="d-block font-13 mt-1">Last Week</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card bg-warning text-center">
                        <div class="body">
                            <input type="text" class="knob2" value={totalstat.totalSells} data-width="69" data-height="69"
                                data-thickness="0.07" data-bgColor="#e8a70c" data-fgColor="#ffffff"
                                readonly />
                            <h4 class="font-22 text-col-white mt-4">
                                <small class="font-12 d-block mb-1"><i class="fa fa-caret-up"></i> ${totalstat.totalSells}
                                    M</small>
                                Ballance
                                <span class="d-block font-13 mt-1">Last Month</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card text-center">
                                <div class="header">
                                    <h2>Connection</h2>
                                </div>
                                <div class="body pt-0">
                                    <div class="row">
                                        <div class="col-12 m-b-15">
                                            <h1><i class="icon-user"></i></h1>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <h4 class="font-22 text-col-green font-weight-bold">
                                                <small class="font-12 d-block m-b-10">Total Vists</small>
                                                {totalstat.totalVisits}
                                            </h4>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <h4 class="font-22 text-col-blue font-weight-bold">
                                                <small class="font-12 d-block m-b-10">Total Order</small>
                                                
                                                    {totalstat.ordersCount}
                                                
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            <div class="col-lg-5 col-md-12 col-sm-12">
                <MiniGraph/>
            </div>
        </div>
      );
}
};


RoundGraph.ProtoTypes={
    gettotalstastics : PropTypes.func.isrequired,
    totalstat : PropTypes.object.isrequired
}
  
  const mapStateToProps = state =>({
    totalstat:state.totalstat
  });
export default connect(mapStateToProps,{gettotalstastics})(RoundGraph);