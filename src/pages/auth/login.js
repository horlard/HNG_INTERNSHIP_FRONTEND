import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './sign.css'
import axios from 'axios'

class Login extends Component {
    state = {
        respass: false,
        emailSent: false,
        verificationSuccess: false,
        loading: false,
        email: '',
        password: '',
        Err: ''
    }
    onLoginSubmit = e => {
        e.preventDefault()
        var url =
            'https://cors-anywhere.herokuapp.com/https://intense-lowlands-41245.herokuapp.com/index.php/login'

        const data = {
            password: this.state.password,
            email: this.state.email
        }
        console.log(data)

        function formEncode(obj) {
            var str = []
            for (var p in obj)
                str.push(
                    encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])
                )
            return str.join('&')
        }
        axios.get(url, data)
            .then(res => {
                console.log(res, 'success from axios')
            })
            .catch(err => {
                console.log(err, 'error from axios')
            })
        // fetch(url, {
        //     method: 'POST',
        //     headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        //     body: formEncode(data)
        // })
        //     .then(res => res.json())
        //     .then(response =>
        //         console.log('Success from fetch:', JSON.stringify(response))
        //     )
        //     .catch(error => console.error('Error from fetch:', error))

      
     
    }
    onEmailInput = e => {
        this.setState({ email: e.target.value })
    }
    onPasswordInput = e => {
        this.setState({ password: e.target.value })
    }
   

    render() {
        return (
            <div style={{ transform: 'translateY(80%)' }} className="contain ">
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui teal image header">
                            <div className="content">Login to your Account</div>
                        </h2>
                        <form className="ui large form error" onSubmit = {this.onLoginSubmit}>
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"></i>
                                        <input
                                            type="email"
                                            name="text"
                                            value ={this.state.email}
                                            placeholder="E-mail Address"
                                            onChange={this.onEmailInput}
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
                                            value = {this.state.password}
                                            placeholder="Password"
                                            onChange={this.onPasswordInput}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    {' '}
                                    <button
                                        type="submit"
                                        className="ui fluid large teal submit button"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>

                        </form>
                        <div className="ui message">
                            <p style={{ fontSize: '1.1rem' }}>
                                New to us? <Link to="/signup">Sign Up</Link>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
