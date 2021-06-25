import React from 'react'
// import { getFilms } from './getFilms';
import EpisodeCard from './EpisodeCard/EpisodeCard'

const EpisodeLists: React.FC  = (): React.ReactElement => {
    return (
        <div className="star-wars-films-episode-list">
            {
               [0, 1, 2, 3, 4].map(el => <EpisodeCard key={el} num={el} />)
            }
        </div>
    )
}

export default EpisodeLists;
