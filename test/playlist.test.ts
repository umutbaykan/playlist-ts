import Playlist from "../src/playlist";
import Song from "../src/song";

describe("playlist class", () => {
  let playlist: Playlist;
  let song: Song;

  beforeEach(() => {
    playlist = new Playlist([]);
    song = new Song("title", "artist", 240);
  });

  test("should initialize", () => {
    expect(playlist.getSongs()).toEqual([]);
  });

  test("should be able to add songs to the song array", () => {
    playlist.addSong(song);
    expect(playlist.getSongs()).toEqual([song]);
  });

  describe("remove method", () => {
    test("should be able to remove song from array", () => {
      playlist.addSong(song);
      playlist.remove(song);
      expect(playlist.getSongs()).toEqual([]);
    });

    test("would return the original array if the song passed in does not exist in array", () => {
      playlist.addSong(song);
      playlist.remove(new Song("title1", "artist2", 300));
      expect(playlist.getSongs()).toEqual([song]);
    });

    test("should be removing the song even if the song object is created as a separate instance but with same parameters", () => {
      const songToRemove: Song = new Song("title", "artist", 240);
      playlist.addSong(song);
      playlist.remove(songToRemove);
      expect(playlist.getSongs()).toEqual([]);
    });

    test("would return an empty array even if called on an empty playlist", () => {
      playlist.remove(song);
      expect(playlist.getSongs()).toEqual([]);
    });
  });
});
