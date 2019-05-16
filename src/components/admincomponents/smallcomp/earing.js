import React, { Component } from 'react';
import {connect} from "react-redux"
import {getweeklystastics} from "../../../action/adminACtion"
import PropTypes from 'prop-types';

class earing extends Component {

    componentDidMount() {
        console.log(" ==. > ",this.props)
        this.props.getweeklystastics()
        
        
    }
    render() {
        const {wekklystat} =this.props.wekklystat;
        console.log("rere",wekklystat)

    return (
        <div class="row clearfix">
                <div class="col-12">
                        <div class="card top_report">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="fa fa-2x fa-dollar text-col-blue"></i>
                                            </div>
                                            <div class="number float-right text-right">
                                                <h6>Weekly Activie User</h6>
                                                <span class="font700">{wekklystat.weeklyActiveUser?wekklystat.weeklyActiveUser.weeklyActiveUserCounter:<p></p>}</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-xs progress-transparent custom-color-blue mb-0 mt-3">
                                            <div class="progress-bar" data-transitiongoal="87"></div>
                                        </div>
                                        <small class="text-muted">19% compared to last week</small>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="fa fa-2x fa-bar-chart-o text-col-green"></i>
                                            </div>
                                            <div class="number float-right text-right">
                                                <h6>Weekly Register User</h6>
                                                <span class="font700">{wekklystat.weeklyRegisteredUsers?wekklystat.weeklyRegisteredUsers.weeklyRegCounter:<p></p>}</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-xs progress-transparent custom-color-green mb-0 mt-3">
                                            <div class="progress-bar" data-transitiongoal={wekklystat.weeklyRegisteredUsers?wekklystat.weeklyRegisteredUsers.differenceByPercent:<p></p>}></div>
                                        </div>
                                        <small class="text-muted">{wekklystat.weeklyRegisteredUsers?wekklystat.weeklyRegisteredUsers.differenceByPercent:<p></p>}% compared to last week</small>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="fa fa-2x fa-shopping-cart text-col-red"></i>
                                            </div>
                                            <div class="number float-right text-right">
                                                <h6>Weekly site Vists</h6>
                                                <span class="font700">{wekklystat.weeklySiteVisits?wekklystat.weeklySiteVisits.weeklySiteVisitCounter:<p></p>}</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-xs progress-transparent custom-color-red mb-0 mt-3">
                                            <div class="progress-bar" data-transitiongoal="41"></div>
                                        </div>
                                        <small class="text-muted">19% compared to last week</small>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="fa fa-2x fa-thumbs-up text-col-yellow"></i>
                                            </div>
                                            <div class="number float-right text-right">
                                                <h6>LIKES</h6>
                                                <span class="font700">{wekklystat.weeklyActiveUser?wekklystat.weeklyActiveUser.weeklyActiveUserCounter:<p></p>}</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-xs progress-transparent custom-color-yellow mb-0 mt-3">
                                            <div class="progress-bar" data-transitiongoal="75"></div>
                                        </div>
                                        <small class="text-muted">19% compared to last week</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        );
    }
}
earing.ProtoTypes={
    getweeklystastics : PropTypes.func.isrequired,
    wekklystat : PropTypes.object.isrequired
}
const mapStateToProps = state =>({
    wekklystat:state.wekklystat
});

export default connect(mapStateToProps,{getweeklystastics})(earing);