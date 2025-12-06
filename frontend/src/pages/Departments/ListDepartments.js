import React from 'react'
import { Link } from 'react-router-dom';
function ListDepartments() {
  return (
    <div className='card'>
        <div className='card-header'>
            <h3 className='card-title'>List of Departments
            </h3>
                <Link to="/department/add" className="btn btn-primary float-right">Add Department</Link>

        </div>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Human Resources</td>
                        <td>Handles recruitment and employee relations</td>
                        <td>Edit | Delete</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Finance</td>
                        <td>Manages company finances and budgeting</td>
                        <td>Edit | Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>    
  )
}
export default ListDepartments;