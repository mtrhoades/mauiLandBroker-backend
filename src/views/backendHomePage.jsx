import React, { useState } from 'react';
import DefaultHTML from './defaultHTML';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const backendHomePage = ({ associations, title }) => {

  return (
    <DefaultHTML>
      <div className="adminContainer">
        <h1>ADMINISTRATIVE DASHBOARD</h1>

        <h2>Associations</h2>

        <form action="/associations" method="POST" className="addAssocForm">
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
              return (
                <tr key={association.id}>
                  <td>
                    <a href={`/associations/${association.id}`}>
                      {association.name}
                    </a>
                  </td>
                  <td><button className='btn btn-primary'>File Categories</button></td>
                  <td><button className='btn btn-outline-warning'>Edit User Info.</button></td>
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