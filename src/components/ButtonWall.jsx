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

  function isSpecialBtn(name) {
    let isSpecial = false;
    if (name == "mouse-wheel-btn") {
      isSpecial = true;
    }
    if (name == "plastic-love-btn") {
      isSpecial = true;
    }
    if (name == "no-ai-btn") {
      isSpecial = true;
    }
    if (name == "no-genocide-btn") {
      isSpecial = true;
    }
    if (name == "trans-rights-btn") {
      isSpecial = true;
    }

    return isSpecial;
  }

  const specialBtns = btns.filter((btn) => {
    return isSpecialBtn(btn.name);
  });

  const regularBtns = btns.filter((btn) => {
    return !isSpecialBtn(btn.name);
  });

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
      <div>
        <h3>Obligatory Button Wall</h3>
        <div className={styles.btnWall}>
          {regularBtns.map((btn) => {
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
        {specialBtns.map((btn) => {
          return (
            <img
              key={btn._id}
              src={btn.src}
              alt={btn.name}
              className={styles.btn}
            />
          );
        })}
        {/* add URL attribute to dataset for special buttons that need links */}
        {songs.map((index) => (
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
