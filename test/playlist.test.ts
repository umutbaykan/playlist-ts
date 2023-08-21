import Playlist from '../src/playlist';
import Song from '../src/song';

describe("playlist class", () => {
  let playlist:Playlist;

  beforeEach(() => {
     playlist = new Playlist([]);
  })
  test("should initialize", () => {
    expect(playlist.getSongs()).toEqual([]);
  })

  test("should be able to add songs to the song array", () => {
    const song:Song = new Song("title", "artist", 240)
    playlist.addSong(song);
    expect(playlist.getSongs()).toEqual([song]);
  })
})