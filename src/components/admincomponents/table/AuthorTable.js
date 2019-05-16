import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import AuthTableItem from "./tableItem/AuthorTable";
import {
  updateToCustomer,
  updateToAdmin,
  updateToProductManager,
  updateToTreansporter,
  getUsersCount
} from "../../../action/adminACtion";
class AuthorTable extends Component {
  onUpdateToCustomerClicked(id) {
    this.props.updateToCustomer(id);
    this.props.getUsersCount();
  }
  onUpdateToManagerClicked(id) {
    this.props.updateToProductManager(id);
    this.props.getUsersCount();
  }
  onUpdateToTransporterClicked(id) {
    this.props.updateToTreansporter(id);
    this.props.getUsersCount();
  }
  onUpdateToAdminClicked(id) {
    this.props.updateToAdmin(id);
    this.props.getUsersCount();
  }
  render() {
    const { user } = this.props;

    const fromCustomerAction = (
      <td>
        <button
          type="button"
          data-type="success"
          class="btn btn-primary "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToManagerClicked.bind(this, user._id)}
          title=""
          data-original-title="To Product-Manager"
        >
          <i class="fa fa-users" />
        </button>
        <span style={{ margin: 3 + "px" }} />

        <button
          type="button"
          data-type="success"
          class="btn btn-warning "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToTransporterClicked.bind(this, user._id)}
          title=""
          data-original-title="To Transporter"
        >
          <i class="fa fa-car" />
        </button>
        <span style={{ margin: 3 + "px" }} />
        <button
          type="button"
          data-type="success"
          class="btn btn-success "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToAdminClicked.bind(this, user._id)}
          title=""
          data-original-title="To Administrator"
        >
          <i class="fa fa-star" />
        </button>
      </td>
    );
    const fromPmanagerAction = (
      <td>
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToCustomerClicked.bind(this, user._id)}
          data-original-title="To Customer"
          class="btn btn-info "
        >
          <i class="fa fa-user" />
        </button>

        <span style={{ margin: 3 + "px" }} />

        <button
          type="button"
          data-type="success"
          class="btn btn-warning "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToTransporterClicked.bind(this, user._id)}
          title=""
          data-original-title="To Transporter"
        >
          <i class="fa fa-car" />
        </button>
        <span style={{ margin: 3 + "px" }} />
        <button
          type="button"
          data-type="success"
          class="btn btn-success "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToAdminClicked.bind(this, user._id)}
          title=""
          data-original-title="To Administrator"
        >
          <i class="fa fa-star" />
        </button>
      </td>
    );
    const fromTransporterAction = (
      <td>
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToCustomerClicked.bind(this, user._id)}
          data-original-title="To Customer"
          class="btn btn-info "
        >
          <i class="fa fa-user" />
        </button>
        <span style={{ margin: 3 + "px" }} />
        <button
          type="button"
          data-type="success"
          class="btn btn-primary "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToManagerClicked.bind(this, user._id)}
          title=""
          data-original-title="To Product-Manager"
        >
          <i class="fa fa-users" />
        </button>

        <span style={{ margin: 3 + "px" }} />
        <button
          type="button"
          data-type="success"
          class="btn btn-success "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToAdminClicked.bind(this, user._id)}
          title=""
          data-original-title="To Administrator"
        >
          <i class="fa fa-star" />
        </button>
      </td>
    );
    const fromAdminAction = (
      <td>
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToCustomerClicked.bind(this, user._id)}
          data-original-title="To Customer"
          class="btn btn-info "
        >
          <i class="fa fa-user" />
        </button>
        <span style={{ margin: 3 + "px" }} />
        <button
          type="button"
          data-type="success"
          class="btn btn-primary "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToManagerClicked.bind(this, user._id)}
          title=""
          data-original-title="To Product-Manager"
        >
          <i class="fa fa-users" />
        </button>
        <span style={{ margin: 3 + "px" }} />

        <button
          type="button"
          data-type="success"
          class="btn btn-warning "
          data-toggle="tooltip"
          data-placement="top"
          onClick={this.onUpdateToTransporterClicked.bind(this, user._id)}
          title=""
          data-original-title="To Transporter"
        >
          <i class="fa fa-car" />
        </button>
      </td>
    );
    return (
      <tr>
        <td>
          <p class="c_name">
            {user.firstname} {user.lastname}
            <span
              className={classNames(
                user.role == "customer"
                  ? "badge badge-info m-l-10 hidden-sm-down"
                  : user.role == "pmanager"
                  ? "badge badge-primary m-l-10 hidden-sm-down"
                  : user.role == "transporter"
                  ? "badge badge-success m-l-10 hidden-sm-down"
                  : "badge badge-success m-l-10 hidden-sm-down"
              )}
            >
              {user.role}
            </span>
          </p>
        </td>
        <td>
          <span class="phone">
            <i class="fa fa-envelope m-r-10" />
            {user.email}
          </span>
        </td>
        {user.role == "customer"
          ? fromCustomerAction
          : user.role == "pmanager"
          ? fromPmanagerAction
          : user.role == "transporter"
          ? fromTransporterAction
          : fromAdminAction}
      </tr>
    );
  }
}

AuthorTable.propTypes = {
  updateToCustomer: PropTypes.func.isRequired,
  updateToAdmin: PropTypes.func.isRequired,
  updateToProductManager: PropTypes.func.isRequired,
  getUsersCount: PropTypes.func.isRequired,
  updateToTreansporter: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    updateToCustomer,
    updateToAdmin,
    updateToProductManager,
    updateToTreansporter,
    getUsersCount
  }
)(withRouter(AuthorTable));
