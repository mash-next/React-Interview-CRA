import React from 'react'

interface CardProps {
    num: number;
}

const EpisodeCard: React.FC<CardProps> = (props: CardProps):React.ReactElement => {
    const { num } = props;
    
    return (
        <div className="star-wars-films-episode-card">
            <div className="card-header">
                <div className="card-header-title">
                    <h3>{`Movie # ${num+1}`}</h3>
                    <p>Episode # number </p>
                </div>
                <div className="card-header-release-date">

                </div>
            </div>
            <div className="card-content">
                <div className="director">
                <h4>Director</h4>
                <p> Director Name</p>
                </div>
                <div className="producers">
                    <h4>Producers</h4>
                    <p>Producer Name</p>

                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;
