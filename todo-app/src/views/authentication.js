import { connect } from "react-redux";
import AuthenticationUI from "./authenticationUI";
import { storeTokens } from "../actions/authActions";

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    refreshToken: state.auth.refreshToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeTokens: (accessToken, refreshToken) => {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(storeTokens(accessToken, refreshToken));
    }
  };
};

const EnhancedAuthentication = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationUI);

export default EnhancedAuthentication;
