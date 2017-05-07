import React from 'react'
import cx from 'classnames'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

import Youtube, {
  UNSTARTED, ENDED, PLAYING, PAUSED, BUFFERING, CUED
} from '../lib/youtube'
export let currentPlayer = null


const createPlayer = ({ nextSong }) => {
  return new Youtube({
    onReady() {
      console.warn('player ready')
      setTimeout(() => this.player.playVideo(), 300)
    },
    onStateChange(event) {
      console.warn('event happened', event.data)
      switch(event.data) {
        case UNSTARTED: // A song is deleted
          nextSong()
          break;
        case ENDED:
          nextSong()
          break;
      }
    }
  }) 
}

export default class NowPlaying extends React.Component {
  componentDidMount() {
    const { nextSong } = this.props
    currentPlayer = createPlayer({ nextSong })
    this.setState({ 
      youtube: currentPlayer
    })
  }

  componentWillReceiveProps(nextProps) {
    const { nowPlaying } = nextProps
    const { nextSong } = this.props
    if (nowPlaying !== this.props.nowPlaying) {
      currentPlayer = createPlayer({ nextSong })
    }
  }

  render() {
    const {className, nowPlaying} = this.props
    const { title, embedLink, thumbnail_url } = nowPlaying
    // const src = 'https://www.google.com'
    // "https://www.youtube.com/embed/tOKS5oSqjII?list=PLArt5RZjmyj9CcNB_K4H--giBaOdx-rup?ecver=1"
    return <div className={cx(className, 'px1 pt2')}>
      <Card>
        <CardHeader title={title} subtitle="Subtitle" avatar={thumbnail_url}/>
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
              id="now-playing"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src={embedLink}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </CardMedia>
        {/*<CardTitle title="Card title" subtitle="Card subtitle"/>*/}
        {/*<CardActions>
          <FlatButton label="Previous"/>
          <FlatButton label="Next"/>
        </CardActions>*/}
      </Card>
    </div>
  }
}
