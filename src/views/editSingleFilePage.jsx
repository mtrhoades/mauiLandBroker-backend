import React from 'react';
import DefaultHTML from './defaultHTML';

const editSingleFilePage = ( { file, associationId, categoryObjectId } ) => {

  const handleInputChange = () => {
    setCategoryName(e.target.value);
}

  return (
    <DefaultHTML>

        <div>

        <h2>Edit File Name</h2>

        <form
            className="editForm" 
            action={`/admin/associations/files/${associationId}/categories/${categoryObjectId}/pdfs/${file.id}?_method=PATCH`} method="POST"
        >
            <div>
                <label>File Name:</label>
                <input name="filename" type="text" defaultValue={file.filename} onChange={handleInputChange}></input>

                <div style={{display: 'none'}}>
                  <label>File Size:</label>
                  <input name="size" type="text" defaultValue={file.size} readOnly></input>
                </div>

                <div style={{display: 'none'}}>
                  <label>File Path:</label>
                  <input name="filepath" type="text" defaultValue={file.filepath} readOnly></input>
                </div>
            </div>

            <button type="submit" className="btn btn-success">Save File</button>
        </form>

        <form action={`/admin/associations/files/${associationId}/categories/${categoryObjectId}/pdfs/${file.id}?_method=DELETE`} method="POST" style={{paddingTop: '3rem'}}>
          <input className="btn btn-danger" type='submit' value="Delete File"/>
        </form>

        </div>

    </DefaultHTML>
  )
}

export default editSingleFilePage;