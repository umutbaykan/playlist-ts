import {Playlist} from "../src/playlist";
import Song from "../src/song";
import {methods} from "../src/playlist";

describe("playlist class", () => {
  let playlist: Playlist;
  let song: Song;
  let populatedPlaylist: Playlist;

  beforeEach(() => {
    playlist = new Playlist([]);
    song = new Song("title", "artist", 240);
    const songLong:Song = new Song("a", "artist", 500);
    const songShort:Song = new Song("z", "artist", 100);
    populatedPlaylist = new Playlist([song, songLong, songShort])
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

  describe("shuffle method", () => {
    test("when given the random settings, should randomise the order of songs", () => {
      const originalOrder:Song[] = populatedPlaylist.getSongs();
      const shuffledSongs:Song[] = populatedPlaylist.shuffle(methods.random);

      expect(
        shuffledSongs[0].getTitle().valueOf() === originalOrder[0].getTitle().valueOf() &&
        shuffledSongs[1].getTitle().valueOf() === originalOrder[1].getTitle().valueOf() &&
        shuffledSongs[2].getTitle().valueOf() === originalOrder[2].getTitle().valueOf()
      ).toBe(false);
    })
  })
});
