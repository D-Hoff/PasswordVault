// React---------------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import history from '../history';

import baseUrl from '../baseUrl'
import { setShelfs } from '../actions/shelfs';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // If we do not have shelfs, make a call then dispatch to set
        // if (this.props.shelfs.length === 0) {
            // console.log("state.shelfs empty. Making axios call.")
            axios.get(`${baseUrl.api}/shelfs`)
                .then((resp) => {
                    // console.log("Success")
                    // console.log(resp.data)
                    this.props.dispatch(setShelfs(resp.data));
                    // this.props.actions.setShelfs(resp.data);
                })
                .catch((err) => {
                    // alert("ERROR")
                    console.log("ERROR", err.message)
                })
        // }
        // else {
            // console.log("state.shelfs not empty. No need to do anything.")
        // }
    }


    usernameOrEmail(shelf){
        if(shelf.username!==null){
            return shelf.username
        }
        else{
            return shelf.email
        }
    }

    goToShelf(e, shelfId){
        history.push(`/editShelf/${shelfId}`);
    }

    shelfList() {
        return this.props.shelfs.map((shelf) => {
            return (
                <div key={shelf.id} className="row" onClick={(e)=>this.goToShelf(e, shelf.id)}>
                    <div className="col-6">
                        <p>{shelf.site}</p>
                    </div>
                    <div className="col-6">
                        <p>{this.usernameOrEmail(shelf)}</p>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="wrapper __wrapper">
                <div className="container">
                    <div className="well">
                        <h5 className="center-text">Dashboard</h5>
                        <Link 
                            className="btn btn-info addShelf FR" 
                            to="/createShelf"
                        >
                            <i class="fas fa-plus"></i>
                        </Link>
                        <hr/>

                        <div className="row" >
                            <div className="col-6">
                                <p className="move-right">Site</p>
                            </div>
                            <div className="col-6">
                                <p>Username/Email</p>
                            </div>
                        </div>
                        <div className="container shelfList">
                            {this.shelfList()}
                        </div>

                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    return {
        shelfs: state.shelfs
    };
};
export default connect(mapStateToProps)(Dashboard);