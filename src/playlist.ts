import Song from "./song"

class Playlist {
  songs: Song[];

  constructor(songs: Song[]) {
    this.songs = songs
  }

  getSongs = ():Song[] => {
    return this.songs;
  }
}

export default Playlist;