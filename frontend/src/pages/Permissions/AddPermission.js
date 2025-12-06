function AddPermission() {
  return (
<div className="card">
    <div className="card-header">
        <h3 className="card-title">Add New Permission</h3>
        <a href="/permissions" className="btn btn-secondary float-right">Back to Permissions</a>
    </div>
    <div className="card-body">
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter permission name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" placeholder="Enter permission description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add Permission</button>
        </form>
    </div>
</div>  
)
}
export default AddPermission;