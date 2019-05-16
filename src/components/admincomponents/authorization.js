import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthorTable from "./table/AuthorTable";
import AuthorNav from "./smallcomp/AuthorNav";
import { getTotalUsers } from "../../action/adminACtion";
import AuthorizationContent from "./AuthorizationContent";

class authoriazation extends Component {
  componentDidMount() {
    this.props.getTotalUsers();
  }
  render() {
    const { allusers } = this.props.auth;

    let allUsersContent;
    if (allusers !== null) {
      allUsersContent = <AuthorizationContent allusers={allusers} />;
    }
    return (
      <div id="main-content">
        <div class="container-fluid">
          <div class="block-header">
            <div class="row">
              <div class="col-lg-5 col-md-8 col-sm-12">
                <h2>Authorization</h2>
              </div>
              <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                <ul class="breadcrumb justify-content-end">
                  <li class="breadcrumb-item">
                    <a href="index.html">
                      <i class="icon-home" />
                    </a>
                  </li>
                  <li class="breadcrumb-item">App</li>
                  <li class="breadcrumb-item active">Inbox</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row clearfix mail-inbox">
            <div class="col-lg-3 col-md-4">
              <AuthorNav />
            </div>
            <div class="col-lg-9 col-md-4">
              <div class="card">
                <div class="header">
                  <h2>Basic Example 2</h2>
                </div>
                <div class="body">
                  <div class="table-responsive">
                    <table class="table table-hover m-b-0 c_list">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>{allUsersContent}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
authoriazation.propTypes = {
  getTotalUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStaeToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStaeToProps,
  { getTotalUsers }
)(authoriazation);
