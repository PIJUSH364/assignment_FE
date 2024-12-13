import React from "react";
import Pagination from "./Pagination";

export default function Table() {
  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>select all</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Tag</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>select</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>+1234567890</td>
            <td>Work</td>
            <td>Active</td>
            <td>
              <button className="action-btn">Edit</button>
              <button className="action-btn delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>select</td>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>+0987654321</td>
            <td>Personal</td>
            <td>Inactive</td>
            <td>
              <button className="action-btn">Edit</button>
              <button className="action-btn delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <Pagination />
      </div>
    </div>
  );
}
