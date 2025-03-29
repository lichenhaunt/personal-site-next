"use client";
import styles from "./About.module.css";
import { useEffect, useState } from "react";

export default function About() {
  const [passportToggle, setPassportToggle] = useState("closed");

  let passport = document.getElementsByClassName("cover");
  let passportOpened = document.getElementsByClassName("passportOpened");
  let page1 = document.getElementsByClassName("page1");
  let page2 = document.getElementsByClassName("page2");
  let btn1 = document.getElementsById("beforeBtn");
  let btn2 = document.getElementById("afterBtn");
  let otherPages = document.getElementsByClassName("page");

  useEffect(() => {
    passport.style.display = "block";
    passportOpened.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "none";
  }, []);

  function passportOpen() {
    btn1.style.display = "inline-block";
    btn2.style.display = "inline-block";
    passportOpened.style.display = "block";
    page1.style.display = "block";
    page2.style.display = "none";
    passport.className = "passportANI";
    passportOpened.className = "passportANI";
    btn1.onclick = passportClose;
    btn1.innerText = "close passport";
    btn2.onclick = passportPage2;
    btn2.innerText = "next page";
  }

  function passportPage1() {
    page1.className = "pageTurnANI1";
    passportOpened.style.display = "block";
    page1.style.display = "block";
    page2.style.display = "none";
    passportOpened.classList.remove("pageANI");
    btn1.onclick = passportClose;
    btn1.innerText = "close passport";
    btn2.onclick = passportPage2;
    btn2.innerText = "next page";
  }

  function passportPage2() {
    page2.className = "pageTurnANI2";
    page1.style.display = "none";
    page2.style.display = "block";
    btn1.onclick = passportPage1;
    btn1.innerText = "previous page";
    btn2.onclick = passportClose;
    btn2.innerText = "close passport";
    passport.style.display = "none";
  }

  function passportClose() {
    passport.style.display = "block";
    passport.className = "passportCloseANI";
    passportOpened.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "none";
  }

  return (
    <body>
      <a href="/" className={styles.homepage}>
        <img src="/Dusk_Ball_battle_V.png" />
      </a>

      <div className={styles.buttons}>
        <button className={styles.navBtns} id="beforeBtn">
          button 1
        </button>
        <button className={styles.navBtns} id="afterBtn">
          button 2
        </button>
      </div>

      {/* passport cover */}
      <div
        title="click to open!"
        className={styles.cover}
        onClick={() => passportOpen()}
      ></div>
    </body>
  );
}
