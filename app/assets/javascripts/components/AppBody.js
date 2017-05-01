import React from 'react'
import SongList from './SongList'
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

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class NowPlaying extends React.Component {

  render() {
    const {className} = this.props
    const src = 'https://www.google.com'
    // "https://www.youtube.com/embed/tOKS5oSqjII?list=PLArt5RZjmyj9CcNB_K4H--giBaOdx-rup?ecver=1"
    return <div className={className} style={{
      padding: '20px 5px'
    }}>
      <Card>
        <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg"/>
        <CardMedia>
          <div
            className="u-framewrapper"
            style={{
            width: '100%',
            height: 0,
            paddingBottom: '56.25%',
            position: 'relative'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src={src}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
          massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum
          sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris,
          mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Previous"/>
          <FlatButton label="Next"/>
        </CardActions>
      </Card>
    </div>
  }
}
