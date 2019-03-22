import React, { Component } from 'react';

class Card extends Component { 
    constructor(props) {
        super(props)

        this.state = {
            currentData: Object.assign({}, this.props.currentCard)
        }
    }
    componentWillReceiveProps(props) { 
        this.setState({
            currentData: Object.assign({}, this.props.currentCard)
        })
    }
    render() { 
        let {  first,last } = this.state.currentData.name
        let { city, country, title, employer, favoriteMovies, id } = this.state.currentData
        return (
            <div className='main-card'>
                <h4>{`${id}/25`}</h4>
                <h1>{`${first} ${last}`}</h1>
                <h2>{`FROM: ${city}, ${country}`}</h2>
                <h2>{`JOB TITLE: ${title}`}</h2>
                <h2>{`EMPLOYER: ${employer}`}</h2>
                <h2>Favorite Movies</h2>
                <ul className  = 'movie-list'>
                    {favoriteMovies.map(movie => { 
                        return <li key={Math.random()}>{movie}</li>
                    })}
                </ul>
            </div>
        )
    }
}

//employer
//movies

export default Card