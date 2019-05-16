import React, { Component } from 'react'


export class ordertableitem extends Component {

  render() {
    const {data} =this.props;
    return (
        <tr>
            <td>{data.name}}</td>
            <td data-breakpoints="sm xs">{data.orderid}</td>
            
            <td><div class="media-object"><img src="../assets/images/xs/avatar1.jpg" alt="" width="35" class="rounded-circle"/></div></td>
                    <td><h5>{data.proname}</h5></td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
            
            <td><span class="badge badge-warning bg-warning text-white">{data.status}</span></td>
            <td>
                                                <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="icon-trash"></i></a>
                                            </td>
        </tr>
    )
  }
}

export default ordertableitem
