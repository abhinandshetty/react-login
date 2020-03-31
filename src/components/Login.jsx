import React, { Component } from 'react';
import Toastr from './Toastr';
import { toast } from 'react-toastify';
import { loginUser } from '../redux/user/user';
import { connect } from 'react-redux';
import  userLogo  from './assests/icons8-user-100.svg';

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    onChangeField = (event) =>  {
        const {name , value} = event.target;
        this.setState({[name] : value});
    };

    onClickSubmit = () => {
        if(this.validateFields(this.state)) {
            this.props.loginUser(this.state, () => {
                this.props.history.push("/home")
            });   
        }
    };

    validateFields = loginCredentials => {
        const errors = [];
        for(let key in loginCredentials) {
            switch (key) {
                case 'username': 
                    if(loginCredentials[key]!=='hruday@gmail.com') {
                        errors.push('Invalid username');
                    }
                    break;
                case 'password': 
                    if(loginCredentials[key]!=='hruday123') {
                        errors.push('Invalid password');
                    }
                    break;
                default : 
                errors.push('Internal Error');
            }
        }
        if(errors.length) {
            this.showErrorMessage(errors);
            return false;
        }
        return true;
    };

    showErrorMessage = (errors = []) => {
        toast(errors.join(' & '), {
            type: toast.TYPE.ERROR,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
        });
    };

    render() {   
        return (
            <>  
                <div className="row my-5">
                    <div className="card m-auto rounded-border box-shadow">
                    <img className="mx-auto mt-5" src={userLogo} width="70"/>

                        <div className="col">
                        <div className="card-body px-5">
                            <div className="row form-group mt-2">
                                <input type="email" name="username" id="username" className="form-control rounded-border p-4" placeholder="Username" onKeyUp={ this.onChangeField }/>
                            </div>
                            <div className="row form-group">
                                <input type="password" name="password" id="password" className="form-control rounded-border p-4" placeholder="Password" onKeyUp={ this.onChangeField }/>
                            </div>
                            <div className="row form-group mt-5">
                                <button type="button" className="btn btn-success form-control rounded-border" onClick={ this.onClickSubmit }> Sign In </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Toastr />
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggedInUser : state.users.userlist
});

export default connect(mapStateToProps,{ loginUser })(Login);

