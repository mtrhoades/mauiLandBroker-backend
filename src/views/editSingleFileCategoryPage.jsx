import React, {useState} from 'react';
import DefaultHTML from './defaultHTML';

const editSingleFileCategoryPage = ( { category, associationId } ) => {
    // console.log(category)
    const [categoryName, setCategoryName] = useState(category.categoryname)

    const handleInputChange = () => {
        setCategoryName(e.target.value);
    }

  return (
    <DefaultHTML>
        <div>
            <h2>Edit Category Name</h2>

            <form
                className="editForm" 
                action={`/admin/associations/files/${associationId}/categories/${category.id}?_method=PATCH`} method="POST"
            >
                <div>
                    <label>Category Name:</label>
                    <input name="categoryname" type="text" defaultValue={categoryName} onChange={handleInputChange}></input>
                </div>

                <button type="submit" className="btn btn-success">Save</button>
            </form>

            <form action={`/admin/associations/files/${associationId}/categories/${category.id}?_method=DELETE`} method="POST" style={{paddingTop: '3rem'}}>
            <input className="btn btn-danger" type='submit' value="Delete Category"/>
          </form>

        </div>
    </DefaultHTML>

  )
}

export default editSingleFileCategoryPage;