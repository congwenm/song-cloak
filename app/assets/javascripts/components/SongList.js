import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class SongList extends React.Component {
  render() {
    const { className } = this.props
    return <List className={className}>
      <Subheader>My Songs</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={
          <Avatar   
            src="https://pbs.twimg.com/profile_images/823671383758663681/MLYqhCiF.jpg"
          />
        }
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={
          <Avatar   
            src="https://pbs.twimg.com/profile_images/823671383758663681/MLYqhCiF.jpg"
          />
        }
        rightIcon={<CommunicationChatBubble />}
      />
    </List>  
  }
};

export default SongList;