import React, { Component } from 'react'

export class ReportTableitem extends Component {


  render() {
    const {data} =this.props;
    return (
        <tr>
            <td><img src={data.img} width="48" alt="Product img" /></td>
            <td><h5>{data.proname}</h5></td>
            <td><span class="text-muted">{data.Detail}</span></td>
            <td>{data.amount}</td>
            <td><span class="col-green">{data.stock}</span></td>
            <td>
                <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="icon-pencil"></i></a>
                <a href="javascript:void(0);" class="btn btn-outline-danger"><i class="icon-trash"></i></a>
            </td>
    </tr>
    )
  }
}

export default ReportTableitem;
