import React from 'react'

function ListPermissions() {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='card-title'>List of Permissions
                </h3>
                    <a href="/permissions/add" className="btn btn-primary float-right">Add Permission</a>  
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
                            <td>Read Articles</td>
                            <td>Permission to read articles</td>
                            <td>Edit | Delete</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Edit Articles</td>
                            <td>Permission to edit articles</td>
                            <td>Edit | Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListPermissions;