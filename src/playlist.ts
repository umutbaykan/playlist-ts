import Song from "./song";

class Playlist {
  private songs: Song[];

  constructor(songs: Song[]) {
    this.songs = songs;
  }

  getSongs = (): Song[] => {
    return this.songs;
  };

  addSong = (song: Song): void => {
    this.songs.push(song);
  };

  remove = (song: Song): void => {
    this.songs = this.songs.filter(
      (existingSong) => !this.isSongEqual(existingSong, song),
    );
  };

  private isSongEqual = (song1: Song, song2: Song): boolean => {
    return (
      song1.getTitle() === song2.getTitle() &&
      song1.getArtist() === song2.getArtist() &&
      song1.getLength() === song2.getLength()
    );
  };
}

export default Playlist;
