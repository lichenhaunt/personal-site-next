"use client";
import styles from "./ButtonWall.module.css";
import { useEffect, useState } from "react";

export default function ButtonWall() {
  const [btns, setBtns] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const fetchBtns = async () => {
      //fetch btns from API/get/btns
      const response = await fetch("/api/assets/get/btns");
      const data = await response.json();
      console.log("data received", data);
      setBtns([...data.data]);
    };

    fetchBtns();
  }, []);

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

  const songs = [
    {
      src: "/plastico2.mp3",
    },
  ];

  if (!btns.length) {
    return <p>No images yet....</p>;
  } else {
    console.log("btns value", btns);
    return (
      <div className={styles.main}>
        <h3>Obligatory Button Wall</h3>
        <div className={styles.btnWall}>
          {btns.map((btn) => {
            return (
              <img
                key={btn._id}
                src={btn.src}
                alt={btn.name}
                className={styles.btn}
              />
            );
          })}
        </div>
        <br />
        <img className={styles.divider} alt="divider image" width="75%" />
        <br />
        <a
          href="https://github.com/lichenhaunt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/mouse-wheel-btn.gif"
            alt="mouse-wheel-btn"
            className={styles.btn}
          />
        </a>
        <a
          href="https://chuffed.org/project/123241-support-nabilas-fight-for-health-and-dignity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/no-genocide-btn.jpg"
            alt="no-genocide-btn"
            className={styles.btn}
          />
        </a>
        <img src="/no-ai-btn.gif" alt="no-ai-btn" className={styles.btn} />
        <a
          href="https://southernequality.app.neoncrm.com/forms/donation_cse_website_form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/trans-rights-btn.jpg"
            alt="trans-rights-btn"
            className={styles.btn}
          />
        </a>
        <img
          src="/plastic-love-btn.jpg"
          alt="plastic-love-btn"
          className={styles.btn}
        />
        {songs.map((song, index) => (
          <button
            key={index}
            className={styles.plastic}
            onClick={() => (currentSong ? stopMusic() : playSong(index))}
          />
        ))}
      </div>
    );
  }
}
