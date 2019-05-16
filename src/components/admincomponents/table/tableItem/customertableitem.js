import React, { Component } from "react";

class customertableitem extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr data-status={data.status}>
        <td>1</td>
        <td>
          <div class="media-object">
            <img
              src="../assets/images/xs/avatar1.jpg"
              alt=""
              width="35"
              class="rounded-circle"
            />
          </div>
        </td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td class="width250">
          <div class="progress progress-xs">
            <div
              class="progress-bar l-green"
              role="progressbar"
              aria-valuenow="87"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </td>
        <td>
          <span class="badge badge-success">{data.status}</span>
        </td>
      </tr>
    );
  }
}

export default customertableitem;
