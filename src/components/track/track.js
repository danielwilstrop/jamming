import React from 'react'
import './track.css';

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.state = { play: false }
        this.addTrack = this.addTrack.bind(this)
        this.renderAction = this.renderAction.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }
   

    renderAction() {
        if (this.props.isRemoval) {
            return <button className = "Track-action" onClick = {this.removeTrack}>-</button>
        } else {
            return <button className = "Track-action" onClick = {this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }

    render() {
    return  <div className="Track">
                <div className="Track-information">
                    <img src = {this.props.track.art} alt = "album art" />
                    <p>{this.props.track.name} | {this.props.track.artist} </p>
                    {this.renderAction()}
                </div>
            </div>
            
        
    }
}

export default Track;