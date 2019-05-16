import React, { Component } from 'react'

class messageitemlist extends Component {
    render() {
        const {data} =this.props;
        return (
           
            <li class="clearfix">
                    <div class="float-left list-left">
                    <div class="img-preview">
                        <img src={data.img} alt="avatar" />
                          <div class="status"><i class="fa fa-circle online"></i></div>
                    </div>
                    <div class="about">
                        <div class="name">{data.name}</div>
                        <div class="msg"> {data.subject}</div>
                    </div>
                </div>
                    <div class="float-right">
                       <div class="time">{data.time}</div>
                      {data.no>0?<div class="badge badge-danger bg-danger text-white">{data.no}</div>:<div></div>}
                    </div>

            </li>
          
        )
    }
}

export default messageitemlist