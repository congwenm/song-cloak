import Song from './song'

export default class User {

  constructor(blocks) {
    Object.entries(blocks)
      .forEach(([key, value]) => {
        this[key] = value
      })
    this.isAuthenticated = true
  }

  static currentUser() { 
    return fetch('/api/sessions/status', {
      credentials: 'include' // hot damn!
      // user_id: /user_id=(.*);/.exec(document.cookie)[1],
    }).then(res => {
      return res.json().then(json => {
        return {
          user: new User(json.user),
          masterpieces: json.songs.map(
            songParam => new Song(songParam)
          )
        }
      })
    })
  }
  
  logout () {
    return fetch('/logout', {
      method: 'delete',
      credentials: 'include',
      user_id: /user_id=(.*);/.exec(document.cookie)[1],
    }).then(res => 
      res.json().then(json => {
        this.isAuthenticated = false
      })
    )
  }
}