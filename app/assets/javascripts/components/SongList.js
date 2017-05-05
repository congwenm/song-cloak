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
    return <List className={className}>
      <Subheader>My Songs</Subheader>
      {
        songs.map((song, index) =>
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
