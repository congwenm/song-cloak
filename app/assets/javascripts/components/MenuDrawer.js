import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MenuDrawerComp extends React.Component {
  render() {
    return (
      <div>
        <Drawer
          docked
          {...this.props}
        >
          <MenuItem>
            <a className="Link" href="/auth/google_oauth2">
              Log In
            </a>
          </MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
