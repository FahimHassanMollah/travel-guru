import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './LogIn.css'
import * as firebase from "firebase/app";
import { firebaseConfig } from '../../FireBase/firebaseConfig';

const LogIn = () => {
   
    const { register, handleSubmit, watch, errors } = useForm({
        mode:"onBlur"
    });
    const onSubmit = data => console.log(data);
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
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <h3>Log In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input name="email"  className="form-control " 
                                ref={register({required:"email is required",
                                pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email adress"}})} 
                                placeholder="Enter email" />
                                {errors.email&&<span className="text-danger">{errors.email.message}</span>}
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input  name="password"  className="form-control" 
                                ref={register({required:"password is required", minLength: {value:6,message:"Password must be at least 6 characeters"} })}
                                 placeholder="Enter password" />
                                  {errors.password&&<span className="text-danger">{errors.password.message}</span>}
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
                        <hr/>
                       
                        
                        <div className="d-flex justify-content-between"> 
                          <Button variant="outline-info" href="#"><img src="https://img.icons8.com/fluent/18/000000/facebook-new.png" alt="Google"/>Continue with Facebook</Button>
                          <Button variant="outline-info" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google"/> Continue with Google</Button>
                         </div>  
                         <hr/> 
                       </Col>
                  
                </Row>
            </Container>
               </div>
           </div>

        </div>
    );
};

export default LogIn;