import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import React from 'react'
import Divider from 'material-ui/Divider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

import './SongItem.scss'

export default ({ song, index, isPlaying }) => {
  return <div key={index}
    style={{ lineHeight: 0 }}
  >
    <ListItem
      primaryText={<p className="primaryText">{song.title}</p>}
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
          <Avatar src={song.thumbnail_url} />
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
