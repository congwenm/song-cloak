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
        songs.map((song, index) => 
          <SongItem 
            song={song} 
            key={index} 
            index={index}
            isPlaying={song === nowPlaying}
          />
        )
      }
    </List>  
  }
};

export default SongList;


const SongItem = ({ song, index, isPlaying }) => {
  return <div key={index} 
    style={{ lineHeight: 0 }}
  >
    <ListItem
      primaryText={song.name}
      leftAvatar={
        <div>
          <p style={{ 
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: -10,
            paddingRight: 10,
          }}>
            {index + 1}
          </p>
          <Avatar src={song.img} />
        </div>
      }
      rightAvatar={
        <PlayArrow style={{ 
          width: 40, height: 40,
          display: isPlaying ? 'block' : 'none'
        }}/>
      }
    />
    <Divider className="col-xs-12"></Divider>
  </div>
}