import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

/**
 * Dialog content can be scrollable.
 */
export default class PlaylistPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false, playlists: [], selected: props.selectedPlaylists
    };
  }

  handleOpen() {
    this.setState({open: true});
    this.props.currentUser.getPlaylists().then(playlists => {
      this.setState({ playlists })
    })
  }

  handleClose() {
    this.setState({open: false});
  }

  handleSubmit() {
    this.props.currentUser.updatePlaylists(this.state.selected).then(
      res => {
        this.handleClose()
        this.props.onPlaylistUpdate()
      }
    )
  }

  render() {
    const { selectedPlaylists, currentUser } = this.props
    const { playlists, selected } = this.state

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleSubmit()}
      />,
    ];

    return (
      <div>
        <a className="Link"
          onTouchTap={() => this.handleOpen()}
        >
          Change Playlist: 
          <ul>
            {selectedPlaylists.map(pl =>
              <li>{pl}</li>
            )}
          </ul>
        </a>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.handleClose()}
          autoScrollBodyContent={true}
        >
          {
            playlists.map((playlist, indice) =>
              <Checkbox
                key={indice}
                defaultChecked={
                  selectedPlaylists.includes(playlist)
                }
                label={playlist}
                style={{
                  block: { maxWidth: 250, },
                  checkbox: { marginBottom: 16, },
                }}
                onCheck={(event, isChecked) => {
                  let tobeSelected = null
                  if (isChecked) {
                    tobeSelected = [ ...new Set(selected).add(playlist) ]
                  }
                  else {
                    tobeSelected = selected.filter(pl => pl !== playlist)
                  }
                  this.setState({ selected: tobeSelected })
                }}
              />
            )
          }
        </Dialog>
      </div>
    );
  }
}