import React, { useState } from 'react';
import DefaultHTML from './defaultHTML';

const singleEditInfoPage = ( { association } ) => {

  const [associationName, setAssociationName] = useState(association.name);
  const [associationDirectory, setAssociationDirectory] = useState(association.directory);
  const [associationUsername, setAssociationUsername] = useState(association.username);
  const [associationPassword, setAssociationPassword] = useState(association.password);

  const handleInputChange = (e) => {
    setAssociationName(e.target.value);
    setAssociationDirectory(e.target.value);
  };

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
                <input name="username" type="text" defaultValue={associationUsername} readOnly="readonly"></input>

                <label>Password:</label>
                <input name="password" type="text" defaultValue={associationPassword} readOnly="readonly"></input>
              </div>

              <button type="submit" class="btn btn-success">Save</button>
          </form>

          <form action={`/admin/associations/${association.id}?_method=DELETE`} method="POST" style={{paddingTop: '3rem'}}>
            <input class="btn btn-danger" type='submit' value="Delete Association"/>
          </form>
        </div>
    </DefaultHTML>
  )
}

export default singleEditInfoPage;