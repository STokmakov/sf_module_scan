import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";


class MainContainer extends React.Component {

    render() {
        return <Main {...this.props} />
        
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    login: state.token.login,
});

export default connect(mapStateToProps)(MainContainer) 