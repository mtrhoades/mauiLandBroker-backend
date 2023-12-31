import React, { useState, useEffect } from 'react';
import DefaultHTML from './defaultHTML';

const editSingleAssociationPage = ( { association } ) => {

  const [associationName, setAssociationName] = useState(association.name);
  const [associationDirectory, setAssociationDirectory] = useState(association.directory);
  const [associationUsername, setAssociationUsername] = useState(association.username);
  // const [associationPassword, setAssociationPassword] = useState('');

  const handleInputChange = (e) => {
    setAssociationName(e.target.value);
    setAssociationDirectory(e.target.value);
    setAssociationUsername(e.target.value);
    // setAssociationPassword(e.target.value);
  };

  const defaultValuesForPasswords = {
    "Wailuku Country Estates": "wce123",
    "Wailuku Parkside": "wp456",
    // Add more associations and their default values here
  };

  const associationPassword = defaultValuesForPasswords[association.name] || '';

  return (
    <DefaultHTML>
        <div>
          <h2>Edit Association Info.</h2>

          <form
            className="editForm" 
            action={`/admin/associations/${association.id}?_method=PATCH`} method="POST"
          >
              <div>
                <label>Name:</label>
                <input name="name" type="text" defaultValue={associationName} onChange={handleInputChange}></input>

                <label>Directory:</label>
                <input name="directory" type="text" defaultValue={associationDirectory} onChange={handleInputChange}></input>

                <label>User Name:</label>
                <input name="username" type="text" defaultValue={associationUsername} onChange={handleInputChange}
                  readOnly="readonly"
                ></input>

                <label>Password:</label>
                <input name="password" type="text" defaultValue={associationPassword} onChange={handleInputChange}
                  readOnly="readonly"
                ></input>
              </div>

              <button type="submit" className="btn btn-success">Save</button>
          </form>

          <form action={`/admin/associations/${association.id}?_method=DELETE`} method="POST" style={{paddingTop: '3rem'}}>
            <input className="btn btn-danger" type='submit' value="Delete Association"/>
          </form>
        </div>
    </DefaultHTML>
  )
}

export default editSingleAssociationPage;