//http://stackoverflow.com/questions/29775797/fetch-post-json-data for posting

export default class Song {
  constructor(blocks) {
    Object.entries(blocks)
      .forEach(([key, value]) => {
        this[key] = value
      })
  }

  static fetch() {
    return fetch('/api/songs').then(res => {
      return res.json().then(json => {
        return json.map(songParam => new Song(songParam))
      })
    })
  }
}