import React from 'react';
import Header from './Header/Header';
import Divider from './Divider/Divider';
import EpisodeLists from './EpisodeLists/EpisodeLists';

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Divider />
            <EpisodeLists />
        </div>
    )
}
