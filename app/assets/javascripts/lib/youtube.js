// var tag = document.createElement('script')

// tag.src = 'https://www.youtube.com/iframe_api'

// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// window.onYouTubeIframeAPIReady = function() {
//   // player = new YT.Player('now-playing', {
//   //   events: {
//   //     'onReady': onReady,
//   //     'onStateChange': onStateChange
//   //   },
//   //   playerVars: { 
//   //     'controls': 0,
//   //     'showinfo': 0
//   //   }
//   // });

//   console.info('youtube iframe api loaded')
// };
// import './yt-api'

class Youtube { 
  constructor({ 
    id = 'now-playing', 
    onReady = () => {}, 
    onStateChange = () => {}, 
  }) {
    Youtube.all.push(this)
    setTimeout(() => { // YT.Player might not be initially loaded
      this.player = new YT.Player(id, {
        events: {
          'onReady': onReady.bind(this),
          // -1 - unstarted
          // 0 – ended
          // 1 – playing
          // 2 – paused
          // 3 – buffering
          // 5 – video cued
          'onStateChange': onStateChange.bind(this)
        },
        playerVars: { 
          'controls': 0,
          'showinfo': 0
        }
      });
    }, 20)
  }
}

Youtube.all = []
window.Youtube = Youtube
export default Youtube


const UNSTARTED = -1
const ENDED = 0
const PLAYING = 1
const PAUSED = 2
const BUFFERING = 3
const CUED = 5

export { UNSTARTED, ENDED, PLAYING, PAUSED, BUFFERING, CUED }