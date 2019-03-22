import React from 'react';

const Card = ({ currentCard }) => { 
    let {
        title,
        employer,
        city,
        country,
        favoriteMovies,
        id } = currentCard
    
    let { first, last } = currentCard.name 
    return (
        <div>
            <h1 className = 'card-number'>{`Card ${id}/25`}</h1>
            <h1 className='name'>{`${first} ${last}`}</h1>
            <h2>{`From: ${city}, ${country}`}</h2>
            <h2>{`Job Title: ${title}`}</h2>
            <h2>{`Employer: ${employer}`}</h2>
            <h2>Favorite Movies</h2>
            <ol>
                {
                    favoriteMovies.map(movie => {return <li><h3>{movie}</h3></li>})
                }
            </ol>
         </div>
    )
}
  
export default Card