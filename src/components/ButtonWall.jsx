"use client";
import styles from "./ButtonWall.module.css";
import { useEffect, useState } from "react";

export default function ButtonWall() {
  const [btns, setBtns] = useState([]);

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

  if (!btns.length) {
    return <p>No images yet....</p>;
  }

  return btns.map((btn) => {
    <img className={styles.btn} alt={btn.name} src={btn.src} />;
  });
}
