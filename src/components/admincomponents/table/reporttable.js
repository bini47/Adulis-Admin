import React, { Component } from 'react'
import ReporttableItem from "./tableItem/ReportTableitem"
export class reporttable extends Component {
    constructor(){
        super();
        this.state={
            data:[{
                orderid:"#291992",
                name:"John Smith",
                proname:"264-625-2583",
                amount:"3",
                stock:"Failed",
                Detail:"awwwwwwwww",
                Action:"",
                img:"../assets/images/ecommerce/5.png"
            },
            {
                orderid:"suspended",
                name:"John Smith",
                proname:"Brone Candle",
                amount:"$15.00",
                stock:"Pending",
                Detail:"qqqqqqqqqqqqqq",
                Action:"",
                img:"../assets/images/ecommerce/11.png"
                

            },
            {
                orderid:"#291989",
                name:"John Smith",
                proname:"Simple Black Clock",
                amount:"$16.00",
                stock:"Paid",
                Detail:"ssssssssssssss",
                Action:"",
                img:"../assets/images/ecommerce/1.png"

            },

            ]
        }
    }
  render() {
    let item = this.state.data.map(data =>(<ReporttableItem key={data.name} data={data} />))


    return (
        <div class="card product_item_list">
        <div class="header">
            <h2>Product List</h2>
        </div>
        <div class="body">
            <div class="table-responsive">
                <table class="table table-hover m-b-0">
                    <thead class="thead-dark">
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th data-breakpoints="sm xs">Detail</th>
                            <th data-breakpoints="xs">Amount</th>
                            <th data-breakpoints="xs md">Stock</th>
                            <th data-breakpoints="sm xs md">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
  }
}

export default reporttable
