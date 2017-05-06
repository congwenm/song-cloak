import React from 'react'
import SongList from './SongList'
import NowPlaying from './NowPlaying'
export default class AppBody extends React.Component {
  nextSong() {
    const { songs, nowPlaying, onChangeNowPlaying } = this.props
    var index = songs.indexOf(nowPlaying)
    onChangeNowPlaying(
      songs[(index + 1) % songs.length] // get the next song
    )
  }

  render() {
    const { style, songs, onChangeNowPlaying, nowPlaying } = this.props
    return <div
      style={Object.assign({ minHeight: 1000 }, style)}
      className="row"
    >
      <SongList className="SongList col-xs-6"
        songs={songs}
        nowPlaying={nowPlaying}
        onChangeNowPlaying={onChangeNowPlaying}
      />
      <NowPlaying className="col-xs-6"
        nowPlaying={nowPlaying}
        nextSong={() => this.nextSong()}
      />
    </div>
  }
}
