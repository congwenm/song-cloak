import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import React from 'react'
import Divider from 'material-ui/Divider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

import './SongItem.scss'

export default ({ song, index, isPlaying, onChangeNowPlaying }) => {
  return <div key={index}
    style={{ lineHeight: 0 }}
  >
    <ListItem
      onClick={() => onChangeNowPlaying(song)}
      primaryText={
        <p className="primaryText m0">{song.title}</p>
      }
      leftAvatar={
        <div>
          <p className="pr1 align-top inline-block"
            style={{ marginLeft: -10 }}
          >
            {index + 1}
          </p>
          <Avatar src={song.thumbnail_url} />
        </div>
      }
      rightAvatar={
        <PlayArrow 
          className={isPlaying ? 'block' : 'none'}
          style={{ width: 40, height: 40 }}
        />
      }
    />
    <Divider className="col-xs-12"></Divider>
  </div>
}
