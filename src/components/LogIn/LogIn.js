import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './LogIn.css'
import * as firebase from "firebase/app";
import { firebaseConfig } from '../../FireBase/firebaseConfig';
import { LoggedInUserContext } from '../../App';

const LogIn = () => {

    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onBlur"
    });
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useContext(LoggedInUserContext)
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
           

        }).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
            console.log(errorMessage);


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
    const onSubmit = (data) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                var user = firebase.auth().currentUser;
                var {name, email}=user;
                let userInformation = {
                    name: name,
                    email: email
                }
                setUser(userInformation)
                history.replace(from);
                console.log('working');
            })
            .catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);

            });

    }
    return (
        <div>
            <div>
                <div className="text-dark">
                    <Header></Header>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col className="mx-auto pt-4 " sm={6} >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h3>Log In</h3>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input name="email" className="form-control "
                                            ref={register({
                                                required: "email is required",
                                                pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email adress" }
                                            })}
                                            placeholder="Enter email" />
                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control"
                                            ref={register({ required: "password is required", minLength: { value: 6, message: "Password must be at least 6 characeters" } })}
                                            placeholder="Enter password" />
                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                    </div>



                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                </form>
                                <h6 className="text-center">Don’t have an account?
                        <Link to={`/createaccount`}>   Create an account</Link>
                                </h6>
                                <hr />
                                <h6 className="text-center">or</h6>
                                <hr />


                                <div className="d-flex justify-content-between">
                                    <Button variant="outline-info" onClick={facebookSignInBtn}><img src="https://img.icons8.com/fluent/18/000000/facebook-new.png" alt="Google" />Continue with Facebook</Button>
                                    <Button variant="outline-info" onClick={googleSignInBtn}><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" /> Continue with Google</Button>
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

export default LogIn;