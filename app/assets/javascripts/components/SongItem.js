import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import React from 'react'
import Divider from 'material-ui/Divider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';

import './SongItem.scss'

const CONTROL_BUTTON_PROPS = {
  style: { 
    width: 40, height: 40,
    position: 'absolute',
    right: 5,
    top: 8,
  },
}
const VideoControl = ({ isHovering, isPlaying }) => {
  return (isHovering || isPlaying) && (
    isPlaying ? 
      <Pause  {...CONTROL_BUTTON_PROPS} /> :
      <PlayArrow {...CONTROL_BUTTON_PROPS} />
  )
}

export default class SongItem extends React.Component { 
  constructor(props) {
    super(props)
    this.state = { isHovering: false }
  }

  render () {
    const { song, index, isPlaying, onChangeNowPlaying } = this.props
    const { isHovering } = this.state

    return <div key={index} style={{ lineHeight: 0 }} >
      <ListItem
        onMouseEnter={() => this.setState({ isHovering: true })}
        onMouseLeave={() => this.setState({ isHovering: false })}
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
          <VideoControl isPlaying={isPlaying} isHovering={isHovering}/>
        }
        className={isPlaying ? 'is-playing' : ''}
      />
      <Divider className="col-xs-12"></Divider>
    </div>
  }
}
