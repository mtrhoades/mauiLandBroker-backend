import React, {useState} from 'react';
import DefaultHTML from './defaultHTML';

const fileCategorySingleAssoc = ( { association } ) => {

  return (
    <DefaultHTML>
        <div className="adminContainer">
            <a href="/admin/associations">
                <button className="btn btn-outline-success">Associations</button>
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
                    <tr>
                        <th scope="col">File Category Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    association.filecategories.map((categoryObject, index) => {
                        // console.log(categoryObject)
                    return (
                        <tr key={categoryObject.id}>
                            <td>
                                {categoryObject.categoryname}
                            </td>
                            <td>
                                <a>
                                    <button className="btn btn-primary">Manage Files</button>
                                </a>
                            </td>
                            <td>
                                <a href={`/admin/associations/files/${association.id}/categories/${categoryObject.id}`}>
                                    <button className='btn btn-warning'>Edit Category</button>
                                </a>
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    </DefaultHTML>
  )
}

export default fileCategorySingleAssoc;