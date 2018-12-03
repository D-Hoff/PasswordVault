// React---------------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import history from '../history';

import { setPassword } from '../actions/password';


class Generator extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    makePass(wantedLength) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789";
      
        for (var i = 0; i < wantedLength; i++){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    handleOnClick(e){
        this.setState(() => ({
            value: this.makePass(16)
        }));
    }

    handleSaveClick(e){
        this.props.dispatch(setPassword(this.state.value));
        history.push("/createShelf");
    }

    render(){
        return(
            <div className="wrapper __wrapper">
                <div className="container con-rel">
                    <div className="well">
                        <h5 className="center-text">Password Generator</h5>
                        <hr/>
                        <div className="row">
                            <div className="col-12">
                                <input 
                                    id="newPass" 
                                    type="text" 
                                    className="form-control" 
                                    name="newPass" 
                                    value={this.state.value}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 dualButtons">
                                <button 
                                    className="btn btn-primary buttonOne" 
                                    onClick={(e)=>this.handleOnClick(e)}
                                >
                                    Create Password
                                </button>
                                {this.state.value ?
                                    <button 
                                        className="btn btn-success buttonTwo" 
                                        onClick={(e)=>this.handleSaveClick(e)}
                                    >
                                        Save Password
                                    </button>
                                :
                                    ""
                                }
                            </div>
                        </div>
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
export default connect(mapStateToProps)(Generator);