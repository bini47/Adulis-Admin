import React, { Component } from 'react'
import axios from "axios"
import {Form,Button} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

 class RegisterForm extends Component {

constructor(){
    super();
    this.state={
        name:"",
        email:"",
        password: "",
        password2:"",
        errors:{}
        
    }
    this.onchange=this.onchange.bind(this)
    }
onchange(e) {
  
    this.setState({[e.target.name]:e.target.value})
}
onsubmit(e){
  console.log(e,"sucks")
    e.preventDefault();

    const newUser={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        password2:this.state.password2
    }
axios.post("127.0.0.1:3030/api/users/register",newUser)
    .then(res=>console.log(res.data))
    .catch(err=>console.log("dsdsd",err))
}
  render() {

    return (
     
         <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your DevConnector account</p>
                <Form onSubmit={this.onsubmit.bind(this)}>
                 <Form.Field>
                    <input type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Name" 
                        name="name" 
                        onChange={this.onchange}
                        value={this.state.name}
                        
                    />
                    </Form.Field>
                  
                    <Form.Field>
                    <input 
                        type="email" 
                        className="form-control form-control-lg" 
                        placeholder="Email Address" 
                        value={this.state.email}
                        name="email" 
                        onChange={this.onchange}
                    />
                    <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    </Form.Field>
                    <Form.Field>
                    <input 
                        type="password" 
                        className="form-control form-control-lg" 
                        placeholder="Password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.onchange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <input type="password"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password" 
                        name="password2" 
                        onChange={this.onchange}
                        value={this.state.password2}
                      />
                  </Form.Field>
                  <Button primary type="submit">Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
}
export default RegisterForm