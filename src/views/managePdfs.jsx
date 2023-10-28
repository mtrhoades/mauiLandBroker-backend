import React from 'react';
import DefaultHTML from './defaultHTML';


const managePdfs = ( { categoryObject, associationId, association } ) => {
  return (
    <DefaultHTML>
        <div className="adminContainer">

            <a href="/admin/associations">
                <button className="btn btn-outline-success">Associations</button>
            </a>

            <a href={`/admin/associations/files/${associationId}`}>
                <button className="btn btn-outline-success"><h4>Back to {association.name} Association</h4></button>
            </a>

            <h3>{categoryObject.categoryname}</h3>

            <form
            className="addPdfFileForm"
            action={`/admin/associations/files/${associationId}/categories/${categoryObject.id}/pdfs`}
            encType="multipart/form-data"
            method="POST"
            style={{paddingBottom: '2rem'}}
            >
                <input name="filename" id='file' type="file" required></input>

                <button className="btn btn-primary" type='submit'>Upload</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th scope="col">File Name (pdf)</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    categoryObject.files.map((fileObject, index) => {
                        // console.log(fileObject)
                    return (
                        <tr key={fileObject.id}>
                            <td>
                                {fileObject.filename}
                            </td>
                            <td>
                                <a>
                                    <button className="btn btn-warning">Edit File Name</button>
                                </a>
                            </td>
                            <td>
                                <a>
                                    <button className='btn btn-danger'>Delete File</button>
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

export default managePdfs;