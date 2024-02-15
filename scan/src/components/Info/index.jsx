import React from 'react';
import {connect} from "react-redux";
import {Info} from './Info';





class InfoContainer extends React.Component {

    render() {
        return <Info {...this.props} />  
    }
}

const mapStateToProps = (state) => ({
    usedCompanyCount: state.user.usedCompanyCount,
    companyLimit: state.user.companyLimit

});

export default connect(mapStateToProps)(InfoContainer);