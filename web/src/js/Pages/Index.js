// React---------------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        // const {email , password} = this.state ;
        // axios.post('api/login', {
        //     email, 
        //     password
        // })
        // .then(response=> {
        //     this.setState({err: false});
        //     this.props.history.push("home") ;
        // })
        // .catch(error=> {
        //     this.refs.email.value="";
        //     this.refs.password.value="";
        //     this.setState({err: true});
        // });
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className="wrapper __wrapper">
                <div className="container con-rel">
                    <div className="well">
                        <h2 className="center-text">Hello!</h2>
                        
                        <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                <div className="col-md-6">
                                    <input id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChange.bind(this)}  required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-6 col-md-offset-4">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" /> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-4">
                                    {/*<button type="submit" className="btn btn-primary">
                                        Login
                                    </button>*/}

                                    <li className="btn btn-link">
                                        <Link to="dashboard">Login</Link>
                                    </li>
                                    <li className="btn btn-link">
                                        <Link to="register">Register</Link>
                                    </li>
                                    <li className="btn btn-link">
                                        <Link to="forgotpassword">Forgot Your Password?</Link>
                                    </li>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}
export default Index;