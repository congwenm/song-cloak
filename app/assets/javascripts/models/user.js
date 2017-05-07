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
          songs: json.songs.map(
            songParam => new Song(songParam)
          )
        }
      })
    })
  }
  
  getPlaylists() {
    return fetch('/api/users/playlists', {
      credentials: 'include' // TODO: i think we need this
    }).then(res => 
      res.json().then(json => {
        return json
      })
    )
  }

  updatePlaylists(playlists) {
    return fetch('/api/users', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({ playlists }),
      headers: new Headers({ 
        "Content-Type":  "application/json" 
      }),
    }).then(res => res.json().then(json => {
      this.playlist_names = json.playlist_names
    }))
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