import React from 'react';
import DefaultHTML from './defaultHTML';

const fileCategorySingleAssoc = ( { association } ) => {

 

  return (
    <DefaultHTML>
        <div className="adminContainer">
            <a href="/admin/associations">
                <button class="btn btn-outline-success">Associations</button>
            </a>

            <h2>{association.name}</h2>

            <form className="addCategoryForm" action={`/admin/associations/files/${association.id}`} method="POST" style={{paddingBottom: '2rem'}}>
                <input 
                    type="text"
                    className="form-control"
                    name="categoryname"
                    placeholder="Add files Category"
                />
                <button className='btn btn-success'>Add</button>
            </form>

            <table>
                <thead>
                    <th>File Category Name</th>
                    <th></th>
                    <th></th>
                </thead>
                {
                    association.filecategories.map((obj) => {
                    return (
                        <tr key={association.id}>
                            <td>
                                {obj.categoryname}
                            </td>
                            <td>
                                <a>
                                    <button class="btn btn-primary">Manage Files</button>
                                </a>
                            </td>
                            <td>
                                <button class="btn btn-warning">Edit Category Name</button>
                            </td>
                        </tr>
                    )
                    })
                }
            </table>

        </div>
    </DefaultHTML>
  )
}

export default fileCategorySingleAssoc;