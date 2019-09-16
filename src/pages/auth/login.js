import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import classes from './login.module.css';
import './sign.css';

class Login extends Component {
 state = {
  respass: false,
  emailSent: false,
  verificationSuccess: false,
  loading: false,
  email:'',
  password:''
 };

onEmailInput=e=> {
    this.setState({email:e.target.value})

}
onPasswordInput=e=> {
    this.setState({password:e.target.value})

}


 render() {
     console.log(this.state.email);
     console.log(this.state.password)
  return (
   <div style={{transform:'translateY(100%)'}} className='contain '>
       <div className="ui middle aligned center aligned grid" >
  <div className="column">
    <h2 className="ui teal image header">
      <div className="content">
        Login to your Account
      </div>
    </h2>
    <form className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="mail icon"></i>
            <input type="email" name="text" placeholder="E-mail Address" onChange={this.onEmailInput} required/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password" onChange={this.onPasswordInput} required/>
          </div>
        </div>
        
        <div className="ui fluid large teal submit button">Login</div>
      </div>

      <div className="ui error message"></div>

    </form>
    <div className="ui message">
      New to us? <Link to='/signup'>Sign Up</Link>
    </div>

    
  </div>
</div>

   </div>
  )
 }
}

export default withRouter(Login);
