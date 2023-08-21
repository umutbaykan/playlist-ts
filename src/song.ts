class Song {

  private title:string;
  private artist:string;
  private length:number;

  constructor(title:string, artist:string, length:number) {
    this.title = title;
    this.artist = artist;
    this.length = length;
  }

  getTitle = ():string => {
    return this.title;
  }

  getArtist = ():string => {
    return this.artist;
  }

  getLength = ():number => {
    return this.length
  }
}

export default Song;