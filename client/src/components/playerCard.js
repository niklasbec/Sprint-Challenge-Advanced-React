import React from 'react';
import axios from 'axios'

export default class PlayerCard extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount()   {
        axios.get('http://localhost:5000/api/players')
            .then(response => {
                this.setState({data: response.data})
                console.log(this.state.data);
                })
            .catch(error => {
                console.log(`Sorry an error occured: ${error}`);
            })
    }

    render() {
        return(
            <div>
                {this.state.data.map(athlete => (
                    <div className='athlete' key={athlete.id}>
                        <p>Name: {athlete.name}</p>
                        <p>Country of origin: {athlete.country}</p>
                        <p>Searches: {athlete.searches}</p>
                    </div>
            ))}
            </div>
        )
    }
}