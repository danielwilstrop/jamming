import React from 'react'
import './searchbar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { term: ''}
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    search() {
        this.props.onSearch(this.state.term)
    }

    handleKeyPress(event) {
        if (event.key === 'Enter'){
           this.search()
        }
    }

    handleTermChange(e) {
        this.setState( {term: e.target.value} )
    }

    render() {
        return <div className="SearchBar">
                    <input placeholder="Enter A Song, Album, or Artist" onChange = {this.handleTermChange} onKeyUp = {this.handleKeyPress} />
                    <button className="SearchButton"  onClick = {this.search}>SEARCH</button>
                </div>
    }
}

export default Searchbar;