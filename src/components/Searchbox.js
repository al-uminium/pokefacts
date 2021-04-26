import React from 'react';

const Searchbox = ({ searchChange }) => {
    return(
        <div>
            <input
                className='pa2 br4 ba b--green bg-lightest-blue f6 tc'
                type='search'
                placeholder='Search Pokemons!'
                onKeyPress={searchChange}/>
        </div>
    );
}

export default Searchbox;