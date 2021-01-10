import React from 'react'
import Searchbar from '../searchbar/searchbar'
import SearchResults from '../SearchResults/searchresults'
import Playlist from '../playlist/playlist'
import './App.css'
import Spotify from '../../utl/spotify'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: [],
                      }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    if (this.state.playlistTracks.length <=0){
      return
    }
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then( () => this.setState(
                                         { playlistName: 'Enter Your Playlist Name', 
                                          playlistTracks: []
                                        }))
  }

  search(term) {
    Spotify.search(term).then(searchResults => this.setState({searchResults: searchResults}))
  }

  render() {
    return <div>
              <h1>Pla<span className="highlight">yyy</span>list</h1>
                <div className="App">
                  <Searchbar onSearch = {this.search} />
                  <div className="App-playlist">
                  <SearchResults searchResults = {this.state.searchResults}
                                 onAdd = {this.addTrack} isRemoval = {true} />
                  <Playlist playlistname = {this.state.playlistName} 
                            playlisttracks = {this.state.playlistTracks}
                            onRemove = {this.removeTrack}
                            onNameChange = {this.updatePlaylistName}
                            onSave = {this.savePlaylist} />
                  </div>
                </div>
            </div>
  }
}

export default App;
