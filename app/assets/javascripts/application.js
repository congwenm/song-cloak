// temporary
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();// Needed for onTouchTap

// css
import 'normalize.css'
import 'flexboxgrid'
import './application.scss'

import 'basscss/css/basscss.css';

// material
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


// my components
import React from 'react'
import ReactDOM from 'react-dom'
import Contact from './contact'

import MenuDrawer from './components/MenuDrawer'
import AppBody from './components/AppBody'


// models
import Song from './models/song'
const SIDEBAR_WIDTH = 200
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, themeOptions: darkBaseTheme};
    Song.fetch().then(songs => {
      this.setState({
        songs
      })
    })
  }
  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { open, songs } = this.state
    const squeezedStyle = {
      paddingLeft: (open ? SIDEBAR_WIDTH : 0) + 24,
      transition: 'padding-left 0.2s',
    }

    // TODO: check if manual background is even needed.
    return (
      <div style={{ backgroundColor: darkBaseTheme.palette.primary3Color }}>
        <MenuDrawer
          open={open}
          width={SIDEBAR_WIDTH}
          onRequestChange={open => this.setState({ open })}
        />

        <AppBar title="Song Cloak"
          style={squeezedStyle}
          onLeftIconButtonTouchTap={() => this.handleToggle()}
        />

        <div>
          <AppBody style={squeezedStyle} songs={songs}/>
        </div>
      </div>
    )
  }
}

document.onreadystatechange = function() {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
}
