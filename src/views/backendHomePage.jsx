import React, { useState } from 'react';
import DefaultHTML from './defaultHTML';

const backendHomePage = ( { associations } ) => {

  return (
    <DefaultHTML>
      <div className="adminContainer">
        <h1>ADMINISTRATIVE DASHBOARD</h1>

        <h2>Associations</h2>

        <form action="/admin/associations" method="POST" className="addAssocForm">
          <input 
              type='text'
              className='form-control'
              name="name"
          />
          <button className='btn btn-success'>Add</button>
        </form>


        <table>
          <thead>
            <th>Association Name</th>
            <th></th>
            <th></th>
          </thead>
          {
            associations.map((association) => {
              // console.log(association.id)
              return (
                <tr key={association.id}>
                  <td>
                      {association.name}
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
        </table>

      </div>
    </DefaultHTML>
  )
}

export default backendHomePage;