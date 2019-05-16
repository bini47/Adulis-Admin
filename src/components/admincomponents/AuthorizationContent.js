import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthorTable from "./table/AuthorTable";
export class AuthorizationContent extends Component {
  render() {
    const { allusers } = this.props;
    return allusers.map(user => <AuthorTable key={user._id} user={user} />);
  }
}
AuthorizationContent.proptypes = {
  allusers: PropTypes.array.isRequired
};
export default AuthorizationContent;
