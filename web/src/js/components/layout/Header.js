// React---------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Actions-------------------------------------
import { setIsCollapsed } from '../../actions/header';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleOnClick(e){
        if(this.props.isCollapsed){
            this.props.actions.setIsCollapsed(false);
        }
        else{
            this.props.actions.setIsCollapsed(true);
        }
    }

    navBarCollapsed(){
        if(this.props.isCollapsed){
            return "navbar-collapse collapse"
        }
        else{
            return "navbar-collapse collapse show"
        }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Password Vault</a>
                <button 
                    className="navbar-toggler collapsed" 
                    onClick={(e)=>this.handleOnClick(e)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.navBarCollapsed()} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard" onClick={(e)=>this.handleOnClick(e)}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/generator" onClick={(e)=>this.handleOnClick(e)}>Generator</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={(e)=>this.handleOnClick(e)}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isCollapsed: state.isCollapsed
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            setIsCollapsed: (isCollapsed = true) => { dispatch(setIsCollapsed(isCollapsed)) },
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);