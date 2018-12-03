// React---------------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { setPassword } from '../actions/password';

import baseUrl from '../baseUrl'
import history from '../history';


class CreateShelf extends Component{
    constructor(props){
        super(props);
        this.state = {
            err: false,

            site : '',
            email : '',
            username: '',
            password: this.checkPassword(),
            showHidePassword: 'hide',
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        const {site, email, username, password} = this.state ;
        // axios.post(`${baseUrl.api}/shelfs/create`, {
        axios.post(`${baseUrl.api}/shelfs`, {
            site,
            email, 
            username,
            password
        })
        .then(response=> {
            console.log(response)
            this.setState({err: false});
            history.push("/dashboard");
        })
        .catch(error=> {
            console.log("ERR: ", error)
            this.refs.email.value="";
            this.refs.password.value="";
            this.setState({err: true});
        });
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    checkPassword(){
        const currPass = this.props.password
        if(currPass !== ""){
            this.props.dispatch(setPassword(''));
            // this.setState({password: currPass});
            return currPass
        }
        else{
            return ""
        }
    }
    
    toggleShowHidePassword(){
        if (this.state.showHidePassword === "hide"){
            this.setState({showHidePassword:  "show"});
        }
        else{
            this.setState({showHidePassword:  "hide"});
        }
    }

    passwordType(){
        if (this.state.showHidePassword === "hide"){
            return "password"
        }
        else{
            return "text"
        }
    }

    eyeType(){
        if (this.state.showHidePassword === "hide"){
            return <i class="fas fa-eye"></i>
        }
        else{
            return <i class="fas fa-eye-slash"></i>
        }
    }

    render(){
        return(
            <div className="wrapper __wrapper">
                <div className="container con-rel">
                    <div className="well">
                        <h5 className="center-text">Create a Shelf</h5>
                        <Link 
                            className="btn btn-danger addShelf FL" 
                            to="/dashboard"
                        >
                            <i class="fas fa-arrow-left"></i>
                        </Link>
                        <hr/>

                        <form className="form-horizontal createShelf" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>

                            <div className="form-group">
                                <label htmlFor="site" className="col-md-4 control-label">Site</label>

                                <div className="col-md-6">
                                    <input id="site" type="text" ref="site" className="form-control" name="site"  onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username" className="col-md-4 control-label">Username</label>

                                <div className="col-md-6">
                                    <input id="username" type="text" ref="username" className="form-control" name="username"  onChange={this.onChange.bind(this)} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                
                                <div className="row password">
                                    <div className="col-10">
                                        {/*this.checkPassword()*/} 
                                        <input 
                                            id="password" 
                                            type={this.passwordType()} 
                                            ref="password" 
                                            className="form-control" 
                                            name="password" 
                                            value={this.state.password}
                                            onChange={this.onChange.bind(this)}  
                                            required 
                                        />
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-secondary" onClick={this.toggleShowHidePassword.bind(this)}>
                                            {this.eyeType()}
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-4">
                                    <button type="submit" className="btn btn-primary">
                                        Add Shelf
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    return {
        password: state.password
    };
};
export default connect(mapStateToProps)(CreateShelf);