import React, { Component } from 'react'
import classes from './signup.module.css'

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
    
    render() {
        return (
            <form className={classes.form}>
                <div className={classes.inputcontainer}>
                    <div className={classes.input}>
                        <span>First Name</span>
                        <input required placeholder="John" minLength="4" onChange = {this.onFirstName}/>
                    </div>
                    <div className={classes.input}>
                        <span>Last Name</span>
                        <input required placeholder="Doe" minLength="4" onChange = {this.onLastName} />
                    </div>
                    <div className={classes.input}>
                        <span>Email</span>
                        <input
                            required
                            placeholder="Aa@domain.com"
                            type="email"
                        onChange = {this.onEmailInput}/>
                    </div>
                    <div className={classes.input}>
                        <span>Password</span>
                        <input
                            required
                            placeholder="password"
                            type="password"
                            minLength="6"
                            onChange = {this.onPasswordInput}
                        />
                    </div>
                    <div className={classes.input}>
                        <span>Confirm Password</span>
                        <input
                            required
                            placeholder="confirm password"
                            type="password"
                            onChange = {this.onPasswordConfirm}
                        />
                    </div>
                    <span className={classes.policy}>
                        By clicking signup, you're onboard with our
                        <span
                            style={{
                                color: '#0073b1',
                                fontWeight: 'bold',
                                fontFamily: 'Ubuntu'
                            }}
                        >
                            {' '}
                            privacy policy.
                        </span>
                    </span>
                    <button
                        type="submit"
                        onSubmit={e => {
                            e.preventDefault()
                            this.setState({ authStart: true })
                        }}
                    >
                        SIGNUP
                    </button>
                </div>
            </form>
        )
    }
}
