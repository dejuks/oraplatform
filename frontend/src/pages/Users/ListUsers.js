import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
function ListUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data.users);
    } catch (err) {
      console.error("Error loading users:", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>List Users</h3>
        <Link to="/admin/users/add" className="btn btn-primary btn-sm float-end">
          Create New User
        </Link>
      </div>

      <div className="card-body">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.full_name}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td>{u.phone_number}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  &nbsp;
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUsers;
