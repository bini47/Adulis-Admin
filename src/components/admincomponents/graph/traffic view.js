import React, { Component } from 'react';
import {connect} from "react-redux"
import {gettotalstastics} from "../../../action/adminACtion"
import PropTypes from 'prop-types';

class traficview extends Component {
  componentDidMount(){
      
  }
  render() {
      const {totalstat} =this.props.totalstat;
    return (

        <div class="card">
        <div class="header">
        <h2 class="text-center">Site Traffic</h2>
        </div>
        <div class="body">
            <div class="row text-center">
                <div class="col-6 border-right border-bottom pb-4 pt-4">
                    <div id="Traffic1" class="carousel vert slide" data-ride="carousel"
                        data-interval="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <label class="mb-0">Total User</label>
                                <h4 class="font-30 font-weight-bold text-primary"></h4>
                            </div>
                            <div class="carousel-item">
                                <label class="mb-0">New User</label>
                                <h4 class="font-30 font-weight-bold text-success"></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 border-bottom pb-4 pt-4">
                    <div id="Traffic1" class="carousel vert slide" data-ride="carousel"
                        data-interval="2500">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <label class="mb-0">Chat</label>
                                <h4 class="font-30 font-weight-bold text-warning"></h4>
                            </div>
                            <div class="carousel-item">
                                <label class="mb-0">Missed Chats</label>
                                <h4 class="font-30 font-weight-bold text-danger"></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header">
            <h2 class="text-center">Complated</h2>
        </div>
        <div class="body">
            <div class="form-group">
                <label class="d-block">Positive Sentiment <span class="float-right">{}%</span></label>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" role="progressbar"
                        aria-valuenow="9" aria-valuemin="0" aria-valuemax="100" style={{width: 90+"%"}}></div>
                </div>
            </div>
            <div class="form-group">
                <label class="d-block">Return Visitors <span class="float-right">{}%</span></label>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" role="progressbar"
                        aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style={{width: 87+"%"}}></div>
                </div>
            </div>
            <div class="form-group">
                <label class="d-block">Comments <span class="float-right">{88}%</span></label>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" role="progressbar"
                        aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width: 6+"%"}}></div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
traficview.ProtoTypes={
    gettotalstastics : PropTypes.func.isrequired,
    totalstat : PropTypes.object.isrequired
}
  
  const mapStateToProps = state =>({
    totalstat:state.totalstat
  });
  export default connect(mapStateToProps,{gettotalstastics})(traficview);