import React, { Component } from 'react'
import './sign.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Signup extends Component {
    state = {
        authStart: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
        passErr: null
    }

    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        const { password, password_confirmation } = this.state
        if (password !== password_confirmation) {
            return this.setState({
                passErr: true
            })
        }
        this.setState({
            passErr: false
        })
        const data = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password_confirmation
        }

        // const url =
        //   'https://cors-anywhere.herokuapp.com/https://intense-lowlands-41245.herokuapp.com/doc.php'
        const url =
            'https://cors-anywhere.herokuapp.com/https://intense-lowlands-41245.herokuapp.com/index.php/register'
        axios
            .post(url, data)
            .then(res => {
                console.log(res.data, 'success')
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                })
            })
            .catch(err => {
                console.log(err, 'failed')
            })
    }
    render() {
        let passErrHandler = ''
        if (this.state.passErr) {
            passErrHandler = 'Passwords do not match!'
        }
        return (
            <div>
                <div
                    className="ui middle aligned center aligned grid"
                    style={{ transform: 'translateY(30%)' }}
                >
                    <div className="column">
                        <h2 className="ui teal image header">
                            <div className="content">Sign-up</div>
                        </h2>
                        <form
                            className="ui large form error"
                            onSubmit={this.submitHandler}
                        >
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={this.state.firstName}
                                            placeholder="First Name"
                                            onChange={this.inputHandler}
                                            required
                                            minLength="4"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={this.state.lastName}
                                            placeholder="Last Name"
                                            onChange={this.inputHandler}
                                            required
                                            minLength="4"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"></i>
                                        <input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            placeholder="E-mail Address"
                                            onChange={this.inputHandler}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.inputHandler}
                                            required
                                            minLength="6"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="Confirm Password"
                                            value={
                                                this.state.password_confirmation
                                            }
                                            onChange={this.inputHandler}
                                            required
                                            minLength="6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button className="ui fluid large teal submit button">
                                        Sign Up
                                    </button>
                                </div>
                            </div>

                            <div className="ui error message">
                                {passErrHandler}
                            </div>
                            <div className="ui message">
                                Already have an account?{' '}
                                <Link to="/Login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
