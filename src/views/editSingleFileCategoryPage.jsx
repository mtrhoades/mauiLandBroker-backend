import React from 'react';
import DefaultHTML from './defaultHTML';

const editSingleFileCategoryPage = ( { categoryObject } ) => {
  return (
    <DefaultHTML>
        <div>
            <h2>{categoryObject.categoryname}</h2>

            {/* <form
                className="editForm" 
                action={`/admin/associations/${categoryObject.id}?_method=PATCH`} method="POST"
            >
                <div>
                    <label>Category Name:</label>
                    <input name="categoryname" type="text" defaultValue={categoryObject.categoryname} onChange={e => (e.target.value)}></input>
                </div>

                <button type="submit" class="btn btn-success">Save</button>
            </form>
 */}
            {/* <form action={`/admin/associations/${association.id}?_method=DELETE`} method="POST" style={{paddingTop: '3rem'}}>
                <input class="btn btn-danger" type='submit' value="Delete Association"/>
            </form> */}
        </div>
    </DefaultHTML>

  )
}

export default editSingleFileCategoryPage;