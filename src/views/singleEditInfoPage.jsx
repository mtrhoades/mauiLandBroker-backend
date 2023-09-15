import React, { useState } from 'react';
import DefaultHTML from './defaultHTML';

const singleEditInfoPage = ({ association }) => {

    const [associationName, setAssociationName] = useState('')

  return (
    <DefaultHTML>
        <div>
            <h2>Edit Association Info.</h2>

            <form className="editForm">
                <label>Name:</label>
                <input type="text" value={association.name} onChange={e => setAssociationName(e.target.value)}></input>

                <label>Directory:</label>
                <input type="text" value={association.directory} readonly="readonly"></input>

                <label>User Name:</label>
                <input type="text" value={association.username} readonly="readonly"></input>

                <label>Password:</label>
                <input type="text" value={association.password} readonly="readonly"></input>
            </form>

        </div>
    </DefaultHTML>
  )
}

export default singleEditInfoPage;