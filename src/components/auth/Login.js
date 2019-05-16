import React, { Component } from 'react'

 class LoginForm extends Component {

    constructor(){
      super();
      this.state={
          email:"",
          password: "",
          errors:{}
          
      }
      this.onchange=this.onchange.bind(this)
      }
  onchange(e) {
      this.setState({[e.target.name]:e.target.value})
  }
   
  render() {
    return (
        <div className="container">
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your DevConnector account</p>
                <form action="dashboard.html">
                  <div className="form-group">
                    <input 
                          type="email" 
                          className="form-control form-control-lg" 
                          placeholder="Email Address" 
                          name="email" 
                          value={this.state.email}
                          onChange={this.onchange}
                          />
                  </div>
                  <div className="form-group">
                    <input 
                          type="password" 
                          className="form-control form-control-lg" 
                          placeholder="Password" 
                          name="password" 
                          onChange={this.onchange}
                          value={this.state.password}
                          />
                  </div>
                  <input  
                        type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    )
  }
}
export default LoginForm