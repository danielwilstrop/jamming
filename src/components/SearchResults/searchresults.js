import React from 'react'
import './searchresults.css';
import Tracklist from '../tracklist/tracklist'

class Searchresults extends React.Component {
    render() { 
        return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks = {this.props.searchResults} onAdd = {this.props.onAdd} isRemoval = {false} />
        </div>
        )
    }
}

export default Searchresults;