import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {logout} from "../../store/auth-reducer";

class MainContainer extends React.Component {


    render() {
        return <Main {...this.props} />
        
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    login: state.token.login,
});

// connect(mapStateToProps, {logout})(MainContainer)
export default connect(mapStateToProps)(MainContainer) 