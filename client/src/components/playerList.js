import React from 'react';
import PlayerCard from './playerCard';

export default class PlayerList extends React.Component {
    
    constructor(){
        super()

    }

    render() {
        return(
            <div>
                <h1>All players:</h1>
                <PlayerCard />
            </div>
        )
    }
}