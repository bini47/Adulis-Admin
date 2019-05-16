import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";
import {
  getAllCustomer,
  getAdmins,
  getPmManagers,
  getTransporters,
  getTotalUsers,
  getUsersCount
} from "../../../action/adminACtion";

class AuthorNav extends Component {
  constructor() {
    super();
    this.state = {
      active: "all"
    };
  }
  componentDidMount() {
    this.props.getUsersCount();
  }
  onGetCustomersClick() {
    this.setState.active = "customer";
    this.props.getAllCustomer();
    this.props.getUsersCount();
  }
  onGetPmManagersClick() {
    this.props.getPmManagers();
    this.props.getUsersCount();
  }
  onGetTransporterClick() {
    this.props.getTransporters();
    this.props.getUsersCount();
  }
  onGetAdminClick() {
    this.props.getAdmins();
    this.props.getUsersCount();
  }
  onGetTotalUsersClick() {
    this.props.getTotalUsers();
    this.props.getUsersCount();
  }

  render() {
    const { userCount } = this.props.auth;
    return (
      <div class="card">
        <div class="mobile-left">
          <a
            class="btn btn-primary toggle-email-nav collapsed"
            data-toggle="collapse"
            href="#email-nav"
            role="button"
            aria-expanded="false"
            aria-controls="email-nav"
          >
            <span class="btn-label">
              <i class="la la-bars" />
            </span>
            Menu
          </a>
        </div>
        <div class="mail-left collapse" id="email-nav">
          <div class="mail-compose m-b-20">
            <a href="app-compose.html" class="btn btn-danger btn-block">
              Compose
            </a>
          </div>
          <div class="mail-side">
            <ul class="nav">
              <li
                className={classNames(
                  this.state.active == "all" ? "active" : null
                )}
              >
                <Link onClick={this.onGetTotalUsersClick.bind(this)} to="#">
                  <i class="icon-envelope" />
                  All Users
                  <span class="badge badge-primary float-right">
                    {userCount.allUser}
                  </span>
                </Link>
              </li>
              <li
                className={classNames(
                  this.state.active == "customer" ? "active" : null
                )}
              >
                <Link onClick={this.onGetCustomersClick.bind(this)} to="#">
                  <i class="icon-cursor" />
                  Customers
                  <span class="badge badge-primary float-right">
                    {userCount.customer}
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={this.onGetPmManagersClick.bind(this)} to="#">
                  <i class="icon-envelope-open" />
                  Product Managers
                  <span class="badge badge-info float-right">
                    {userCount.pmanager}
                  </span>
                </Link>
              </li>
              <li>
                <Link onClick={this.onGetTransporterClick.bind(this)} to="#">
                  <i class="icon-trash" />
                  Transporters
                  <span class="badge badge-danger float-right">
                    {userCount.transporter}
                  </span>
                </Link>
              </li>

              <li>
                <Link onClick={this.onGetAdminClick.bind(this)} to="#">
                  <i class="icon-star" />
                  Adminstrators
                  <span class="badge badge-warning float-right">
                    {userCount.admin}
                  </span>
                </Link>
              </li>
            </ul>
            <h3 class="label">
              Online users{" "}
              <a
                href="javascript:void(0);"
                class="float-right m-r-10"
                title="Add New Labels"
              >
                <i class="icon-plus" />
              </a>
            </h3>
            <ul class="nav">
              <li class="active">
                <a href="javascript:void(0);">
                  <i class="fa fa-circle text-danger" />
                  Administrators
                  <span class="badge badge-primary float-right">5</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="fa fa-circle text-info" />
                  Customers{" "}
                  <span class="badge badge-primary float-right">10</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="fa fa-circle text-dark" />
                  Product Managers{" "}
                  <span class="badge badge-primary float-right">0</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="fa fa-circle text-primary" />
                  Transporters{" "}
                  <span class="badge badge-primary float-right">7</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
AuthorNav.propTypes = {
  getAllCustomer: PropTypes.func.isRequired,
  getPmManagers: PropTypes.func.isRequired,
  getAdmins: PropTypes.func.isRequired,
  getTransporters: PropTypes.func.isRequired,
  getTotalUsers: PropTypes.func.isRequired,
  getUsersCount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStaeToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStaeToProps,
  {
    getAllCustomer,
    getPmManagers,
    getTransporters,
    getAdmins,
    getTotalUsers,
    getUsersCount
  }
)(AuthorNav);
