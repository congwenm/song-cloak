import React from 'react'
import SongList from './SongList'
import NowPlaying from './NowPlaying'
export default class AppBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nowPlaying: props.songs && props.songs[0] }
  }

  setNowPlaying(nowPlaying) {
    this.setState({ nowPlaying })
  }

  render() {
    const {style, songs} = this.props
    if (!songs) return false
    const { nowPlaying } = this.state
    return <div
      style={Object.assign({ minHeight: 1000 }, style)}
      className="row"
    >
      <SongList className="col-xs-6"
        songs={songs}
        nowPlaying={nowPlaying}
      />
      <NowPlaying className="col-xs-6"
        nowPlaying={nowPlaying}
      />
    </div>
  }
}
