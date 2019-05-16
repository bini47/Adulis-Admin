import React, { Component } from 'react'
import {connect} from "react-redux"
import {getweeklystastics} from "../../../action/adminACtion"
import PropTypes from 'prop-types';

class totalStat extends Component {
    componentDidMount() {
        console.log("wazzap")
        this.props.getweeklystastics()

    }
    render() {
       
        const {wekklystat} =this.props.wekklystat;
        console.log("rere",wekklystat)
    return (
       
        <div class="col-lg-12">
        {wekklystat.weeklyActiveUser?
            <div class="card">
                <div class="header">
                    <h2>Table Tools<small>Basic example without any additional modification classes</small> </h2>                            
                </div>
                <div class="body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                        <thead>
                            <tr>
                                <th>type</th>
                                <th>this week</th>
                                <th>last week</th>
                                <th>percent</th>
                                <th>average</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Actively Vistis</td>
                                <td>{wekklystat.weeklyActiveUser.weeklyActiveUserCounter}</td>
                                <td>{wekklystat.weeklyActiveUser.lastWeekActiveUserCounter}</td>
                                <td>not yet</td>
                                <td>not yet</td>
                                <td>not yet</td>
                            </tr>
                            <tr>
                                <td>Register Users</td>
                                <td>{wekklystat.weeklyRegisteredUsers.weeklyRegCounter}</td>
                                <td>{wekklystat.weeklyRegisteredUsers.lastWeekRegCounter}</td>
                                <td>{wekklystat.weeklyRegisteredUsers.differenceByPercent}</td>
                                <td>not yet</td>
                                <td>not yet</td>
                            </tr>
                            <tr>
                                <td>Site Vists</td>
                                <td>{wekklystat.weeklySiteVisits.weeklySiteVisitCounter}</td>
                                <td>{wekklystat.weeklySiteVisits.lastWeekVisitCounter}</td>
                                <td>not yet</td>
                                <td>not yet</td>
                                <td>not yet</td>
                            </tr>
           
                        </tbody>

                    </table>
                    </div>
                </div>
            </div>
       :<p></p>}
       </div>
    
    );
    }
 }
 totalStat.ProtoTypes={
    getweeklystastics : PropTypes.func.isrequired,
    wekklystat : PropTypes.object.isrequired
}
const mapStateToProps = state =>({
    wekklystat:state.wekklystat
});

export default connect(mapStateToProps,{getweeklystastics})(totalStat);