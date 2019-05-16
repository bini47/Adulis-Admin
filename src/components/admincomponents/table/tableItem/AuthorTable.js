import React, { Component } from "react";

class AuthorTableitem extends Component {
  render() {
    const { data } = this.props;

    return (
      <tr>
        <td>
          <img src={data.img} class="rounded-circle avatar" alt="" />
          <p class="c_name">
            {data.name}{" "}
            <span class="badge badge-default m-l-10 hidden-sm-down">
              Family
            </span>
          </p>
        </td>
        <td>
          <span class="phone">
            <i class="fa fa-phone m-r-10" />
            {data.phone}
          </span>
        </td>
        <td>
          <address>
            <i class="fa fa-map-marker" />
            {data.street}
          </address>
        </td>
        <td>
          <button type="button" class="btn btn-info" title="Edit">
            <i class="fa fa-edit" />
          </button>
          <button
            type="button"
            data-type="confirm"
            class="btn btn-danger js-sweetalert"
            title="Delete"
          >
            <i class="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  }
}

export default AuthorTableitem;
