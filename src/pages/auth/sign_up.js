import React, { Component } from 'react'
import './sign.css'

export default class Signup extends Component {
    state = {
        authStart: false,
      FirstName: '',
      LastName: '',
      email: '',
      password: '',
      confirmPass: ''
    }
    onEmailInput = e => {
        this.setState({ email: e.target.value })
    }
    onPasswordInput = e => {
        this.setState({ password: e.target.value })
    }
    onFirstName = e => {
        this.setState({ FirstName: e.target.value })
    }
    onLastName = e => {
        this.setState({ LastName: e.target.value })
    }
    onPasswordConfirm = e => {
        this.setState({ confirmPass: e.target.value })
    }
    confirmPassword=()=> {
            return (
                <div>
                    Password and Confirm-password field has to be the same
                </div>
            )

        
    }
    
    render() {
        console.log(this.state)
        return (



            <div>
                <div className="ui middle aligned center aligned grid" style={{transform:'translateY(50%)'}}>
  <div className="column">
    <h2 className="ui teal image header">
      <div className="content">
        Sign-up
      </div>
    </h2>
    <form className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="text" placeholder="First Name" onChange={this.onFirstName} required/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="text" placeholder="Last Name" onChange={this.onLastName} required/>
          </div>
        </div>
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
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Confirm Password" onChange={this.onPasswordConfirm} required/>
          </div>
        </div>
        <div className="ui fluid large teal submit button">Login</div>
      </div>

      <div className="ui error message"></div>

    </form>

    <div className="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>



            </div>
            
        )
    }
}
