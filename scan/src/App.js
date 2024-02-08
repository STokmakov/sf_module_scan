import React, { Component, useState } from "react";
import "@styles/App.css";

import  HeaderContainer   from "@components/ContainerHeader/index";
// import { MainContainer }  from "@components/ContainerMain";
import { Footer }  from "@components/ContainerFooter";
import  MainContainer   from "@components/ContainerMain";
import './styles/App.css';
import { useNavigate } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  Login  from "./views/AuthPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./store/app-reducer";
// import Preloader from "./components/common/Preloader/Preloader";
import { store } from "./store/store";
// import {withSuspense} from "./hoc/withSuspense";

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

export const withRouter = (Component) =>{
  const Wrapper = (props) =>{
      const history = useNavigate();
      return <Component history={history} {...props}/>
  } 
  return Wrapper;
}

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        return (
                    <div className='app-wrapper'>
                         <HeaderContainer/>
                        <div className='app-wrapper-content'>
                        {this.props.isAuth}
                        <Routes> 
                        
                              <Route path="/" element={<MainContainer />} /> 
                              <Route path="/login" element={<Login />} />                            
                        </Routes>
                      
                        </div>
                        <Footer /> 
                    </div>
        )
    }}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.token.isAuth
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const ScanApp = (props) => {
   return (
    
        <Provider store={store}>
            <AppContainer />
        </Provider>
     
)}

export { ScanApp }