import React, { Component } from 'react'

 class producertable extends Component {
  render() {
    const {data} =this.props;
    return (
        <tr data-status={data.status}>
        <td>{data.no}</td>
        <td><div class="media-object"><img src={data.img} alt="" width="35" class="rounded-circle" /></div></td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>
            <div class="progress progress-xs">
                <div class="progress-bar l-amber" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: 45+"%"}}></div>
            </div>
        </td>
        {data.status=="Approved"?<td><span class="badge badge-success">Approved</span></td>:
        data.status=="Blocked"?<td><span class="badge badge-danger">Blocked</span></td>:
        data.status=="Suspended"?<td><span class="badge badge-warning">Suspended</span></td>:
        data.status=="pending"?<td><span class="badge badge-info">Pending</span></td>:<h1></h1>}
               
    </tr>
    )
  }
}

export default producertable
