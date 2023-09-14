import React from 'react'

const singleAssociationPage = ({ association }) => {
  return (
    <div>
        <h2>Association</h2>
        {association.name}

        <form action={`/associations/${association.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
        </form>

    </div>
  )
}

export default singleAssociationPage;