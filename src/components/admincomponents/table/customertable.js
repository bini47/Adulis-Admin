import React, { Component } from 'react';
import CustomertableItem from "./tableItem/customertableitem"

class CustomerTable extends Component {

    
    constructor(){
        super();
        this.state={
            data:[{
                status:"suspended",
                name:"John Smith",
                email:"264-625-2583",
                

            },
            {
                status:"blocked",
                name:"Hossein Shams ",
                phone:"264-625-5689",
                

            },
            {
                status:"approved",
                name:"Frank Camly",
                phone:"264-625-9999",
                

            },

            ]
        }
    }

  render() {
    let item = this.state.data.map(data =>(<CustomertableItem key={data.name} data={data} />))
    return (
        <div>
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
            
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="header">
                            <h2>Table Filter</h2>
                        </div>
                        <div class="body">
                            <button type="button" class="btn  btn-simple btn-sm btn-default btn-filter" data-target="all">Todos</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-success btn-filter" data-target="approved">Approved</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-warning btn-filter" data-target="suspended">Suspended</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-info btn-filter" data-target="pending">Pending</button>
                            <button type="button" class="btn  btn-simple btn-sm btn-danger btn-filter" data-target="blocked">Blocked</button>
                            <div class="table-responsive m-t-20">
                                <table class="table table-filter table-hover m-b-0">                                
                                    <tbody>
                                        
                                        {item}
                                    </tbody>
                                </table>
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
export default CustomerTable