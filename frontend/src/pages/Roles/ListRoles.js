import React from 'react'

function ListRoles() {
  return(
    <div className='card'>
        <div className='card-header'>
            <h3 className='card-title'>List of Roles
            </h3>
                <a href="/roles/add" className="btn btn-primary float-right">Add Role</a>  
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
                        <td>Admin</td>
                        <td>Administrator with full access</td>
                        <td>Edit | Delete</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>User</td>
                        <td>Regular user with limited access</td>
                        <td>Edit | Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default ListRoles;