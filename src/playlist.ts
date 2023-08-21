import Song from "./song";
 
enum methods {
  random = 1,
  sortByTime,
  alphabetical
}

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

  shuffle = (method: methods):Song[] => {
    let result: Song[] = [...this.songs];
    
    if (method === methods.random) {
      this.randomise(result);
    } else if (method === methods.sortByTime) {
      this.sortByTime(result);
    }

    result.forEach((song) => console.log(song));
    return result;
  }

  private randomise = (result: Song[]): void => {
    for(let i:number = result.length - 1; i > 0; i--) {
      const j:number = Math.floor(Math.random() * (i + 1));
      const temp:Song = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
  }

  private sortByTime = (result: Song[]): void => {
    result.sort((a:Song, b:Song) => b.getLength() - a.getLength())
  }

  private isSongEqual = (song1: Song, song2: Song): boolean => {
    return (
      song1.getTitle() === song2.getTitle() &&
      song1.getArtist() === song2.getArtist() &&
      song1.getLength() === song2.getLength()
    );
  };
}

export { Playlist, methods } ;
