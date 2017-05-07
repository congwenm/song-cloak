import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import PlaylistPicker from './PlaylistPicker'

export default class MenuDrawer extends React.Component {
  render() {
    const { currentUser, onLogout, onPlaylistUpdate } = this.props
    return (
      <div>
        <Drawer docked {...this.props}
        >
          { currentUser && currentUser.isAuthenticated && 
            <div>
              <MenuItem className="no-hover">
                <User user={currentUser}/>
              </MenuItem>

              <MenuItem>
                <PlaylistPicker 
                  selectedPlaylists={currentUser.playlist_names} 
                  currentUser={currentUser}
                  onPlaylistUpdate={onPlaylistUpdate}
                />
              </MenuItem>
            </div>
          }
          
          <MenuItem>
            { currentUser && currentUser.isAuthenticated ? 
              <a className="Link" 
                onClick={
                  () => currentUser.logout().then(onLogout)
                }
              >
                Log Out
              </a>
              :
              <a className="Link" href="/auth/google_oauth2">
                Log In
              </a>
            }
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}


const User = ({ user }) => {
  return <a className="Link">Hello, {user.name}</a>
}