import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

import SongItem from './SongItem'

class SongList extends React.Component {
  render() {
    const { className, songs, nowPlaying, onChangeNowPlaying } = this.props
    const {
      persisted: persistedSongs,
      playlist: playlistSongs, 
    } = songs.reduce((obj, song) => {
      obj[song.type || 'persisted'].push(song) 
      return obj
    }, {
      persisted: [],
      playlist: [],
    })

    return <List className={className}>
      <Subheader>Persisted Songs</Subheader>
      {
        persistedSongs.map((song, index) =>
          <SongItem
            song={song}
            key={index}
            onChangeNowPlaying={onChangeNowPlaying}
            index={index}
            isPlaying={song === nowPlaying}
          />
        )
      }
      <Subheader>Playlist Songs</Subheader>
      {
        playlistSongs.map((song, index) =>
          <SongItem
            song={song}
            key={index}
            onChangeNowPlaying={onChangeNowPlaying}
            index={index}
            isPlaying={song === nowPlaying}
          />
        )
      }
    </List>
  }
};

export default SongList;
