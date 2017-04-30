// temporary
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();// Needed for onTouchTap

import React from 'react'
import ReactDOM from 'react-dom'
import Contact from './contact'

import 'normalize.css'
import 'flexboxgrid'
import './application.scss'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


// my components
import MenuDrawer from './components/MenuDrawer';
import AppBody from './components/AppBody'

const SIDEBAR_WIDTH = 200
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    // TODO: check if manual background is even needed.
    const { open } = this.state
    const squeezedStyle = {
      paddingLeft: (open ? SIDEBAR_WIDTH : 0) + 24
    }

    return (
      <div style={{ backgroundColor: darkBaseTheme.palette.primary1Color }}>
        <MenuDrawer
          open={open}
          width={SIDEBAR_WIDTH}
          onRequestChange={open => this.setState({ open })}
        />

        <AppBar title="Song Cloak"
          style={squeezedStyle}
          onLeftIconButtonTouchTap={() => this.handleToggle()}
        />

        <AppBody
        />
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
