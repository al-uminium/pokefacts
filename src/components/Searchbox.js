import React from 'react';

const Searchbox = ({ searchChange }) => {
    return(
        <div>
            <input
                className='pa3 br4 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Pokemons!'
                onChange={searchChange} />
        </div>
    );
}

export default Searchbox;