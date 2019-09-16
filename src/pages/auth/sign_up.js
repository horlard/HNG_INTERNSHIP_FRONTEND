import React, { Component } from 'react'
import classes from './signup.module.css'

export default class Signup extends Component {
    state = {
        authStart: false
    }
    render() {
        return (
            <form className={classes.form}>
                <div className={classes.inputcontainer}>
                    <div className={classes.input}>
                        <span>First Name</span>
                        <input placeholder="John" />
                    </div>
                    <div className={classes.input}>
                        <span>Last Name</span>
                        <input placeholder="Doe" />
                    </div>
                    <div className={classes.input}>
                        <span>Email</span>
                        <input placeholder="Aa@domain.com" />
                    </div>
                    <div className={classes.input}>
                        <span>Password</span>
                        <input placeholder="password" type="password" />
                    </div>
                    <div className={classes.input}>
                        <span>Confirm Password</span>
                        <input placeholder="confirm password" type="password" />
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
