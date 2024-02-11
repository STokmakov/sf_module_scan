import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {Field} from "redux-form";
import Characters from "../../assets/images/Characters.svg";
import lock from "../../assets/images/lock.svg";
import Google from "../../assets/images/Google.svg";
import facebook from "../../assets/images/facebook.svg";
import yandex from "../../assets/images/yandex.svg";
import { Button, Container } from "react-bootstrap";
import styles from "./AuthPage.module.css";
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


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


export  default AuthPage; 