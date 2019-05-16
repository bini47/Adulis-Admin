import React, { Component } from 'react';


class minigraph extends Component {
    constructor(){
        super();
        this.state={
            data:"1,3,4,5,6,7,3,7,5,8,3,5,9,8"
        }
    }
  render() {
    return (
  
        <div class="card overflowhidden">
            <div class="header">
                <h2>Analysis</h2>
                <ul class="header-dropdown">
                    <li> <a href="javascript:void(0);" data-toggle="cardloading" data-loading-effect="pulse"><i
                                class="icon-refresh"></i></a></li>
                    <li><a href="javascript:void(0);" class="full-screen"><i class="icon-size-fullscreen"></i></a></li>
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
                <div class="row text-center">
                    <div class="col-4">
                        <h4>2598 <span class="font-13 d-block mt-2">New York</span></h4>
                    </div>
                    <div class="col-4 border-left border-right">
                        <h4>8547 <span class="font-13 d-block mt-2">France</span></h4>
                    </div>
                    <div class="col-4">
                        <h4>2707 <span class="font-13 d-block mt-2">Canada</span></h4>
                    </div>
                </div>
            </div>
            <div class="sparkline" data-type="bar" data-offset="90" data-width="97%" data-height="50px"
                data-bar-Width="10" data-bar-Spacing="10" data-bar-Color="#7cb5ec">{this.state.data}</div>
        </div>
 

    );
  }
};

export default minigraph;