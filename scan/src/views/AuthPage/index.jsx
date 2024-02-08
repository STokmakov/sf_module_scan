import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import Characters from "../../assets/images/Characters.svg";
import lock from "../../assets/images/lock.svg";
import Google from "../../assets/images/Google.svg";
import facebook from "../../assets/images/facebook.svg";
import yandex from "../../assets/images/yandex.svg";
import { Button, Container } from "react-bootstrap";
import styles from "./Auth.module.css";
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../store/auth-reducer";

const AuthPage =  (props) => {
  return (
      <form onSubmit={props.handleSubmit} className="displayForm">
        <div>
          <Field placeholder={"Login"} name={"login"}
                 validate={[required]}
                 component={Input}/>
         
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"}
                 type={"password"}
                 validate={[required]}
                 component={Input}/>
         
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(AuthPage);

const Login = (props) => {
  const onSubmit = (formData) => {
      console.log(formData);
      console.log(props.login+'Login');
      props.login(formData.login, formData.password);
  }

  if (props.isAuth) {
    return <Navigate to={"/"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth
})

export default connect(mapStateToProps, {login})(Login)