import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import '../App.css';

const API_ADDRESS = 'http://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artist: null, tracks: [] };

  componentDidMount() {
    this.searchArtist('david bowie');
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        console.log('json', json);

        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          console.log('artist', artist);
          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div className="App">
        <h2>ReactJS - Spotify Search</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist}/>
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
