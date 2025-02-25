import { useState } from "react";
import styles from "../app/page.module.css";

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(null);
  const songs = [
    {
      title: "dive-pkmn-oras.mp3",
      src: "/Pokemon Omega Ruby & Alpha Sapphire OST Dive Music.mp3",
    },
    {
      title: "DΛRKNΣSS - magician whisper.mp3",
      src: "/DΛRKNΣSS - magician whisper.mp3",
    },
    {
      title: "shadow wizard goblin insanity.mp3",
      src: "/shadow wizard goblin insanity.mp3",
    },
    {
      title: "i_hate_myself_for_loving_you.mp3",
      src: "https://media-upload.net/uploads/TRNy3ljbSKXa.mp3",
    },
    {
      title: "i_would_walk_500_miles.mp3",
      src: "https://media-upload.net/uploads/KGSmbhNQCsfF.mp3",
    },
  ];

  const stopMusic = () => {
    if (currentSong) {
      currentSong.pause();
      setCurrentSong(null);
    }
  };

  const playSong = (index) => {
    stopMusic(); // Stop any currently playing song
    const audio = new Audio(songs[index].src);
    audio.play();
    setCurrentSong(audio);
    audio.onended = () => setCurrentSong(null); // Reset current song when it ends
  };

  return (
    <div className={`${styles.widget} ${styles.musicPlayer}`} id="music-player">
      <h3 id="marq" className={styles.marqTitle}>
        You're listening to 420.69 - Wizards Only Fools!
      </h3>
      <div className={styles.jukebox}>
        <div className={styles.activate}>
          <img
            src="/11808137_0a6bb.gif"
            width="100px"
            height="100px"
            className={styles.special}
          />
        </div>
        <ul>
          <button onClick={stopMusic}>Stop Music</button>
          {songs.map((song, index) => (
            <li key={index}>
              <button onClick={() => playSong(index)}>{song.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
