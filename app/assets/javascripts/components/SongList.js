import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

class SongList extends React.Component {
  render() {
    const { className, songs, nowPlaying } = this.props
    return <List className={className}>
      <Subheader>My Songs</Subheader>
      {
        songs.map((song, index) => [
          <ListItem
            key={index}
            primaryText={song.name}
            leftAvatar={
              <Avatar   
                src={song.img}
              />
            }
            rightAvatar={
              <PlayArrow style={{ 
                width: 40, height: 40,
                display: nowPlaying === song ? 'block' : 'none'
              }}/>
            }
          />,
          <Divider key='divider'/>
        ])
      }
    </List>  
  }
};

export default SongList;