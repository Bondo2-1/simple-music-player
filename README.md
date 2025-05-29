# Music Player 🎵

A sleek and modern music player built using HTML, CSS, and JavaScript.  
Features album art, play/pause, previous/next track, and a progress bar.

---

## 🚀 Features

- Play/pause music
- Next/previous track
- Dynamic progress bar
- Responsive UI with background blur
- Custom album art per song

---

## 🎶 How to Add a New Song

To add a new song to the player:

1. **Place your music file** (e.g., `mysong.mp3`) into the `resources/` folder.
2. **Add a cover image** (e.g., `cover-6.jpg`) into the same folder.
3. Open `script.js` and update the `songs` array:

```javascript
const songs = [
  // existing songs...
  {
    title: 'Your Song Title',
    artist: 'Artist Name',
    cover: 'resources/cover-6.jpg',
    file: 'resources/mysong.mp3'
  }
];
