import React, { Component } from 'react'
import MessageListitem from "./messageitemlist"
import {connect} from "react-redux"
//import {getadmin} from "../../../action/adminACtion"
import PropTypes from 'prop-types';

class CustomerMessage extends Component {
    componentDidMount() {
       // getadmin()

    }
  render() {
      const {adminData} =this.props.adminData;
      console.log(adminData,"jjjjjjjjjjjjjjj<===")
    let item = adminData.contactUs.map(data =>(<MessageListitem key={data.name} data={data} />))

    return (
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                <div class="row">
                    <div class="col-lg-5 col-md-8 col-sm-12">                        
                        <h2>Chat</h2>
                    </div>            
                    <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                        <ul class="breadcrumb justify-content-end">
                            <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>                            
                            <li class="breadcrumb-item">App</li>
                            <li class="breadcrumb-item active">Chat</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="chat-app">
                        <div class="row">
                            <div class="col-lg-3 col-md-4">
                                <div class="hidden-xs">
                                    <div id="plist" class="people-list">
                                        <div class="input-group border-bottom">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="icon-magnifier"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Search..." />
                                        </div>
                                        <ul class="list-unstyled chat-list mt-2 mb-0">
                                            {item}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-8">
                                <div id="chat-left" class="chat">
                                    <div class="chat-header clearfix">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                    <img src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                </a>
                                                <div class="chat-about">
                                                    <h6 class="m-b-0">Aiden Chavez</h6>
                                                    <small>Last seen: 2 hours ago</small>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 hidden-sm text-right">
                                                <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="icon-camera"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="icon-camcorder"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-outline-info"><i class="icon-settings"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="icon-question"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-history">
                                        <ul class="m-b-0">
                                            <li class="clearfix">
                                                <div class="message-data">
                                                    <img src="../assets/images/xs/avatar7.jpg" alt="avatar"/>                                                    
                                                </div>
                                                <div class="detail-right">
                                                    <div class="message other-message float-right">
                                                        <span class="message-data-time d-block mt-1" >10:10</span>
                                                        <p>Hi Aiden, how are you? How is the project coming along?</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <div class="message-data float-left">
                                                    <img src="../assets/images/xs/avatar7.jpg" alt="avatar" />                                                    
                                                </div>
                                                <div class="detail-right">
                                                    <div class="message my-message">
                                                        <span class="message-data-time d-block mt-1" >10:12</span>
                                                        <p>Are we meeting today?</p>
                                                    </div>
                                                    <div class="message my-message">
                                                        <span class="message-data-time d-block mt-1" >10:13</span>
                                                        <p>Project has been already finished and I have results to show you.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="chat-message clearfix">
                                        <div class="input-group mb-0">
                                            <input type="text" class="form-control" placeholder="Enter text here..." />
                                            <div class="input-group-append">
                                                <span class="input-group-text"><i class="icon-paper-plane"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
    )
  }
}
CustomerMessage.ProtoTypes={
   // getadmin : PropTypes.func.isrequired,
    adminData : PropTypes.object.isrequired
}
  
  const mapStateToProps = state =>({
    adminData:state.adminData
  });
  export default connect(mapStateToProps,{})(CustomerMessage);
