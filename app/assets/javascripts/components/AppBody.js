import React from 'react'
import SongList from './SongList'
import NowPlaying from './NowPlaying'
var mockData = [
  {
    name: "Brendan Lim",
    img: "https://pbs.twimg.com/profile_images/823671383758663681/MLYqhCiF.jpg",
  },
  {
    name: 'Eric Hoffman',
    img: "https://pbs.twimg.com/profile_images/823671383758663681/MLYqhCiF.jpg",
  }
]


export default class AppBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nowPlaying: mockData[0] }
  }

  setNowPlaying(nowPlaying) {
    this.setState({ nowPlaying })
  }

  render() {
    const {style} = this.props
    const { nowPlaying } = this.state
    return <div
      style={Object.assign({ minHeight: 1000 }, style)}
      className="row"
    >
      <SongList className="col-xs-6"
        songs={mockData}
        nowPlaying={nowPlaying}
      />
      <NowPlaying className="col-xs-6"
        nowPlaying={nowPlaying}
      />
    </div>
  }
}