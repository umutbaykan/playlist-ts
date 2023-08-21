import Song from '../src/song';

describe("test add function", () => {
  it("should initialize with the constructor", () => {
    const song:Song = new Song("title", "artist", 241);
    expect(song.getTitle()).toEqual("title");
    expect(song.getLength()).toEqual(241);
    expect(song.getArtist()).toEqual("artist");
  })
})