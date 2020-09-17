import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../Header/Header';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../FireBase/firebaseConfig';
import { LoggedInUserContext } from '../../App';
firebase.initializeApp(firebaseConfig);
const CreateAccount = () => {
    let history = useHistory();
    let location = useLocation();
    // let { from } = { from: { pathname: "/hotelroom" } } || { from: { pathname: "/" } };
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onBlur"
    });
    const [user, setUser] = useContext(LoggedInUserContext)

    const onSubmit = (data) => {
        console.log(data);
        if (data.email && data.password && data.firstName && data.lastName) {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    console.log('working');
                    let fullNName = `${data.firstName} ${data.lastName}`
                    let userInformation = {
                        name: fullNName,
                        email: data.email
                    }
                    setUser(userInformation)
                    history.replace(from);
                })
                .catch(function (error) {

                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errors.code);
                });
        }

    };
    const googleSignInBtn = () => {
        let googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            let token = result.credential.accessToken;
            let user = result.user;
            let { displayName, email } = result.user;
            let userInformation = {
                name: displayName,
                email: email
            }
            setUser(userInformation)
            history.replace(from);
            console.log(displayName, email);

        }).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
            

        });

    }
    const facebookSignInBtn = () => {
        let facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
            let token = result.credential.accessToken;
            let user = result.user;
            let { displayName, email } = result.user;
            let userInformation = {
                name: displayName,
                email: email
            }
            setUser(userInformation)
            history.replace(from);
        }).catch(function (error) {
          
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
            console.log(errorMessage);
        });

    }
    return (
        <div>

            <div>
                <div><Header></Header></div>
                <div>
                    <Container>
                        <Row>
                            <Col className="mx-auto pt-2 " sm={6} >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h3>Create an account</h3>

                                    <div className="form-group">
                                        <label>First name</label>
                                        <input name="firstName" className="form-control" placeholder="First name"
                                            ref={register({ required: "First name is required", pattern: { value: /^[a-zA-Z\-]+$/, message: "Please enter valid name" } })} />
                                        {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input name="lastName" className="form-control" placeholder="Last name"
                                            ref={register({ required: "lastName name is required", pattern: { value: /^[a-zA-Z\-]+$/, message: "Please enter valid name" } })} />
                                        {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}

                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input name="email" className="form-control" placeholder="Enter email"
                                            ref={register({
                                                required: "email is required",
                                                pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email adress" }
                                            })}
                                        />
                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input name="password" className="form-control"
                                            ref={register({ required: "password is required", minLength: { value: 6, message: "Password must be at least 6 characeters" } })}
                                            placeholder="Enter password" />

                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Create an account</button>
                                    <p className="forgot-password text-right">
                                        Already registered? <Link to={`/login`}>Login</Link>
                                    </p>
                                </form>
                                <hr />
                                <h6 className="text-center">or</h6>


                                <div className="d-flex justify-content-between">
                                    <Button variant="outline-info" onClick={facebookSignInBtn}><img src="https://img.icons8.com/fluent/18/000000/facebook-new.png" alt="Google" />Continue with Facebook</Button>
                                    <Button variant="outline-info" onClick={googleSignInBtn}><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" /> Continue with  Google</Button>
                                </div>
                                <hr />
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;