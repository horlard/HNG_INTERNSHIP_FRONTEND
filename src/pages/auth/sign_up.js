import React, { Component } from 'react'
import './sign.css'

export default class Signup extends Component {
    state = {
        authStart: false,
      FirstName: '',
      LastName: '',
      email: '',
      password: '',
      confirmPass: '',
      FirstnameErr:'',
      LastnameErr:'',
      emailErr:'',
      PasswordnameErr:'',
      confirmpassErr:''
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
    
    onFormSubmit =(e)=> {
        e.preventDefault()
        if(!this.state.FirstName || !this.state.LastName || !this.state.email || !this.state.email || !this.state.password || !this.state.confirmPass) {
            return this.setState({FirstnameErr:'Please fill in the required fields '})
        }
        
        return console.log('hello')
    }
    
    render() {
        return (
            <div>
                <div className="ui middle aligned center aligned grid" style={{transform:'translateY(50%)'}}>
  <div className="column">
    <h2 className="ui teal image header">
      <div className="content">
        Sign-up
      </div>
    </h2>
    <form className="ui large form error">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="text" placeholder="First Name" onChange={this.onFirstName} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="text" placeholder="Last Name" onChange={this.onLastName} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="mail icon"></i>
            <input type="email" name="text" placeholder="E-mail Address" onChange={this.onEmailInput} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password" onChange={this.onPasswordInput} />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Confirm Password" onChange={this.onPasswordConfirm} />
          </div>
        </div>
        <div className="ui fluid large teal submit button" onClick={this.onFormSubmit}>Sign Up</div>
      </div>
      <div className="ui error message">{this.state.FirstnameErr}</div>

      

    </form>

    
  </div>
</div>
</div>
            
        )
    }
}
