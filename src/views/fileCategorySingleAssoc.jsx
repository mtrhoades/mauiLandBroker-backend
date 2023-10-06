import React from 'react';
import DefaultHTML from './defaultHTML';

const fileCategorySingleAssoc = ( { association, files } ) => {
  return (
    <DefaultHTML>
        <div>
            <a href="/admin/associations">
                <button>Associations</button>
            </a>

            <h2>{association.name}</h2>

            <form action={`/admin/associations/files/${association.id}`} method="POST">
                <input class="associationCategory" name="category" placeholder="Add files Category"></input>
                <button className='btn btn-success'>Add</button>
            </form>

            {/* <table>
                <thead>
                    <th>File Category Name</th>
                    <th></th>
                    <th></th>
                </thead>
                {
                    files.map((file) => {
                    return (
                        <tr key={association.id}>
                        <td>
                            {association.filecategory}
                        </td>
                        <td>
                            <a href={`/admin/associations/files/${association.id}`}>
                            <button className='btn btn-primary'>File Categories</button>
                            </a>
                        </td>
                        <td>
                            <a href={`/admin/associations/${association.id}`}>
                            <button className='btn btn-warning'>Edit Association</button>
                            </a>
                        </td>
                        </tr>
                    )
                    })
                }
            </table> */}

        </div>
    </DefaultHTML>
  )
}

export default fileCategorySingleAssoc;