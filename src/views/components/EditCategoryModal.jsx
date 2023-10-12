import React from 'react';

const EditCategoryModal = ( { categoryObject } ) => {
  return (
    <div>
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editCategoryModal">
            Edit Category Name
        </button>
        <div class="modal fade" id="editCategoryModal" tabindex="-1" aria-labelledby="editCategoryModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Edit Category Name</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            name="categoryname"
                            className="editCategoryInput"
                            type="text"
                            value={categoryObject.id}>
                        </input>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditCategoryModal;