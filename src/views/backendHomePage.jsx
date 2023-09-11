import React, { useState } from 'react';
import DefaultHTML from './defaultHTML';

const backendHomePage = () => {
  const [association, setAssociation] = useState(''); // for adding 1 single association
  const [associations, setAssociations] = useState(''); // for fetching whole list of associations

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
        const body = { association };
        const response = await fetch("http://localhost:3001/associations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        // console.log(response);
        window.location = '/';
        
    } catch (err) {
        console.error(err.message)
    }
};

  return (
    <DefaultHTML>
      <div className="adminContainer">
        <h1>MLB ADMIN DASHBOARD</h1>

        <h2>Associations</h2>

        <form className="addAssocForm" onSubmit={onSubmitForm}>
          <input 
              type='text'
              className='form-control'
              value={association}
              onChange={e => setAssociation(e.target.value)}
          />
          <button className='btn btn-success'>Add</button>
        </form>

        <div className="associationTable">
          <table class="table">
              <thead>
                  <tr>
                      <th scope="col">Association Name</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hale Kaiola</td>
                  <td>button for file categories</td>
                  <td>button for edit association user info.</td>
                </tr>
                <tr>
                  <td>Wailuku Parkside</td>
                  <td>button for file categories</td>
                  <td>button for edit association user info.</td>
                </tr>
                <tr>
                  <td>Kula Malu</td>
                  <td>button for file categories</td>
                  <td>button for edit association user info.</td>
                </tr>
                  {/* {associations.map(associaton => (
                      <tr key={association.association_id}>
                          <th scope="col">{association.association_id}</th>
                              <td>{association.association_name}</td>
                              <td>
                                <p>button here</p>
                              </td>
                              <td>
                                <p>button here</p>
                              </td>
                      </tr>
                  ))} */}
              </tbody>
          </table>
        </div>

      </div>
    </DefaultHTML>
  )
}

export default backendHomePage;