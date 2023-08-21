import Song from "./song"

class Playlist {
  songs: Song[];

  constructor(songs: Song[]) {
    this.songs = songs
  }

  getSongs = ():Song[] => {
    return this.songs;
  }

  addSong = (song:Song):void => {
    this.songs.push(song);
  }
}

export default Playlist;