import React, { Component } from 'react'

 class transportertableitem extends Component {
  render() {
    const {data} =this.props;
    return (
        <tr data-status={data.status}>
        <td>{data.no}</td>
        <td><div class="media-object"><img src={data.img} alt="" width="35" class="rounded-circle" /></div></td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td class="width250">
            <div class="progress progress-xs">
                <div class="progress-bar l-green" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{width: data.per+"%"}}></div>
            </div>
        </td>
        {data.status=="blocked"?<td><span class="badge badge-danger">{data.status}</span></td>:
        data.status=="approved"?<td><span class="badge badge-success">{data.status}</span></td>: 
        data.status=="pending"?<td><span class="badge badge-info">{data.status}</span></td>:
        data.status=="suspended"?<td><span class="badge badge-warning">{data.status}</span></td>:<h1></h1>} 
    </tr>
    )
  }
}

export default transportertableitem
