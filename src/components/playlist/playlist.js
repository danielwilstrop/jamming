import React from 'react'
import Tracklist from '../tracklist/tracklist';
import './playlist.css';


class Playlist extends React.Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
    }
    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }

    render() { return (
                <div className="Playlist">
                    <input defaultValue={'Playlist Name'} onChange = {this.handleNameChange} />
                    <Tracklist tracks = {this.props.playlisttracks} onRemove = {this.props.onRemove} isRemoval = {true} />
                    <button className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
                </div> )
    }
}

export default Playlist;