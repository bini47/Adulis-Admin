import React, { Component } from 'react';
import {Link} from "react-router-dom"

class leftsidebar extends Component {
  render() {
    return (
        <div id="leftsidebar" class="sidebar">
        <div class="sidebar-scroll">
            <nav id="leftsidebar-nav" class="sidebar-nav">
                <ul id="main-menu" class="metismenu">
                    <li class="heading">Main</li>
                    <li class="active"><a href="index.html"><i class="icon-home"></i><span>Dashboard</span></a></li>
                    <li class="heading">Users</li>
                    <li><Link to="/authoriazation"><i class="icon-envelope"></i><span>Authorization</span></Link></li>
                    <li><Link to="/customer"><i class="icon-bubbles"></i><span>Customers</span></Link></li>
                    <li><Link to= "/producer"><i class="icon-calendar"></i><span>Producers</span></Link></li>
                    <li><Link to="/transporter"  ><i class="icon-notebook"></i><span>Transporters</span></Link></li>
                    
                    
                    <li class="heading">Managment</li>
                        <li><Link to="/report"  ><i class="icon-notebook"></i>Report <span class="badge badge-danger float-right">6</span></Link></li>
                        <li><Link to="/contactus"  ><i class="icon-notebook"></i>contactus <span class="badge badge-danger float-right">6</span></Link></li>
                        <li><Link to="/orders"  ><i class="icon-notebook"></i>orders <span class="badge badge-danger float-right">6</span></Link></li>

                   

                    <li class="heading">Stores</li>
                    <li class="middle">
                        <a href="#uiElements" class="has-arrow"><i class="icon-diamond"></i><span>Stores</span></a>
                        <ul>
                            <li><a href="ui-card.html">store list</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                            <li><a href="ui-tabs.html">Tabs</a></li>
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li><a href="ui-bootstrap.html">Bootstrap UI</a></li>
                            <li><a href="ui-icons.html">Icons</a></li>
                            <li><a href="ui-notifications.html">Notifications</a></li>
                            <li><a href="ui-colors.html">Colors</a></li>
                            <li><a href="ui-dialogs.html">Dialogs</a></li>
                            <li><a href="ui-list-group.html">List Group</a></li>
                            <li><a href="ui-media-object.html">Media Object</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                            <li><a href="ui-nestable.html">Nestable</a></li>
                            <li><a href="ui-progressbars.html">Progress Bars</a></li>
                            <li><a href="ui-range-sliders.html">Range Sliders</a></li>
                            <li><a href="ui-treeview.html">Treeview</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#forms"><i class="icon-pencil"></i><span>Sub menu 1</span></a>

                    </li>
                    <li>
                        <a href="#Tables"><i class="icon-tag"></i><span>Add new</span></a>

                    </li>
                    <li class="heading">Products</li>
                    <li>
                        <a href="#FileManager"><i class="icon-folder"></i><span>Sub menu 1</span></a>

                    </li>
                    <li>
                        <a href="#Blog"><i class="icon-globe"></i><span>Sub menu 2</span></a>

                    </li>
                    <li class="heading">Activity Log</li>
                    <li class="top">
                        <a href="#Authentication"><i class="icon-lock"></i><span>Rcently added
                                Products</span></a>

                    </li>
                    <li class="top">
                        <a href="#Pages"><i class="icon-docs"></i><span>Rcently added Stores</span></a>

                    </li>
                    <li class="top">
                        <a href="#Maps"><i class="icon-map"></i> <span>Rcently added <br/> Transporters</span></a>

                    </li>
                    <li class="top">
                        <a href="#Maps"><i class="icon-map"></i> <span>Rcently added <br/> Adminstrators</span></a>

                    </li>
                </ul>
            </nav>
        </div>
    </div>
);
}}
export default leftsidebar;
