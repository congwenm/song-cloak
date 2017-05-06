import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MenuDrawerComponent extends React.Component {
  render() {
    const { currentUser, onLogout } = this.props
    return (
      <div>
        <Drawer docked {...this.props}
        >
          { currentUser && currentUser.isAuthenticated && 
            <MenuItem className="no-hover">
              <User user={currentUser}/>
            </MenuItem>
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