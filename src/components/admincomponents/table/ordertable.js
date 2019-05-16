import React, { Component } from 'react'
import OrderitemTable, { ordertableitem } from "./tableItem/ordertableitem"

class ordertable extends Component {
    constructor(){
        super();
        this.state={
            data:[{
                orderid:"#291992",
                name:"John Smith",
                proname:"264-625-2583",
                amount:"3",
                status:"Failed",
                date:"09-05-2018",
                Action:"",
                img:"../assets/images/ecommerce/5.png"
            },
            {
                orderid:"suspended",
                name:"John Smith",
                proname:"Brone Candle",
                amount:"$15.00",
                status:"Pending",
                date:"01-05-2018",
                Action:"",
                img:"../assets/images/ecommerce/11.png"
                

            },
            {
                orderid:"#291989",
                name:"John Smith",
                proname:"Simple Black Clock",
                amount:"$16.00",
                status:"Paid",
                date:"",
                Action:"",
                img:"../assets/images/ecommerce/1.png"

            },

            ]
        }
    }
  render() {
    let item = this.state.data.map(data =>(<OrderitemTable key={data.name} data={data} />))

    return (
        <div id="main-content">
        <div class="container-fluid">
           <div class="block-header">
                <div class="row">
                    <div class="col-lg-5 col-md-8 col-sm-12">                        
                        <h2>Table Filter</h2>
                    </div>            
                    <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                        <ul class="breadcrumb justify-content-end">
                            <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>                            
                            <li class="breadcrumb-item">Table</li>
                            <li class="breadcrumb-item active">Table Filter</li>
                        </ul>
                                                 
                    </div>
                </div>
            </div>
  
                <div class="card product_item_list product-order-list">
                        <div class="header">
                            <h2>Product Order List</h2>
                        </div>
                        
                        <div class="body">
                        <button type="button" class="btn  btn-simple btn-sm btn-default btn-filter" data-target="all">Todos</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-success btn-filter" data-target="approved">Approved</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-warning btn-filter" data-target="suspended">Suspended</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-info btn-filter" data-target="pending">Pending</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-danger btn-filter" data-target="blocked">Blocked</button>

                            <div class="table-responsive">
                                <table class="table table-hover m-b-0">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th data-breakpoints="sm xs">Order ID</th>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th data-breakpoints="xs">Amount</th>
                                            <th>Date</th>
                                            <th data-breakpoints="xs md">Status</th>
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

      </div>
      </div>
    )
  }
}

export default ordertable
