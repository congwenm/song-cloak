export default ({ song, index, isPlaying }) => {
  return <div key={index} 
    style={{ lineHeight: 0 }}
  >
    <ListItem
      primaryText={song.name}
      leftAvatar={
        <div>
          <p style={{ 
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: -10,
            paddingRight: 10,
          }}>
            {index + 1}
          </p>
          <Avatar src={song.img} />
        </div>
      }
      rightAvatar={
        <PlayArrow style={{ 
          width: 40, height: 40,
          display: isPlaying ? 'block' : 'none'
        }}/>
      }
    />
    <Divider className="col-xs-12"></Divider>
  </div>
}