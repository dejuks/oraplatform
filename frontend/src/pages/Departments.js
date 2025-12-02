import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch departments
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const res = await axios.get("http://localhost:5000/api/departments");
    setDepartments(res.data);
  };

  const addDepartment = async () => {
    await axios.post("http://localhost:5000/api/departments", { name, description });
    setName("");
    setDescription("");
    fetchDepartments();
  };

  return (
    <Layout>
      <h2>Departments</h2>

      <div className="mb-3">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addDepartment}>Add Department</button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Departments;
