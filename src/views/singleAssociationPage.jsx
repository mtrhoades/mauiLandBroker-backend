import React from 'react';
import DefaultHTML from './defaultHTML';

const singleAssociationPage = ({ association }) => {
    return (
        <DefaultHTML>
            <div>
                <h2>Association</h2>
                {association.name}
        
                <form action={`/associations/${association.id}?_method=DELETE`} method="POST">
                    <input type='submit' value="DELETE"/>
                </form>
        
            </div>
        </DefaultHTML>
    )
}

export default singleAssociationPage;