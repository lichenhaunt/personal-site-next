"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MusicPlayer from "@/components/MusicPlayer";
import ButtonWall from "@/components/ButtonWall";

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.header}`}>
        {/* HEADER */}
        <div></div>
        <h1>Welcome to My Site, Fellow Internet Losers!</h1>
      </div>

      {/* TOP NAV */}

      <nav className={`${styles.topNav}`}>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/journal">Journal</a>
      </nav>

      {/* start main */}

      <main className={styles.main}>
        {/* HELLO SECTION */}

        <div className={`${styles.widget} ${styles.hello}`}>
          <h2>You fools have stumbled into my realm!</h2>
          <p>
            I welcome thee, stay and rest a while. I go by many names but you
            can refer to me as <b>lichenhaunt</b>. This site is{" "}
            <i>HOT GARBAGE</i>, but I wouldn't have it any other way &lt;3
            <br />
            This is mostly just a little space for me to be weird online in
            peace, site is a WIP, but will serve as a digital journal.
          </p>
        </div>

        {/* music player */}

        <div className={styles.musicbox}>
          <div className={styles.bigGifs}></div>
          <MusicPlayer />
          <div className={styles.bigGifs}></div>
        </div>

        {/* main box */}

        <div className={`${styles.widget} ${styles.mainBox}`}>
          <h2>Your Soul is now Trapped for Eternity</h2>
          <p>
            Welcome to my little corner of the <b>INTERNET</b>, I do not envy
            you, Mortal. Feel free to look around and browse to your heart's
            content.
            <br />
            I'm kinda just getting started on this whole small web thing, so it
            may not be super fleshed out yet. I have lots of ideas for this site
            though, so if you enjoy <b>SMASH THAT RSS BUTTON</b> to get updates.
            <br />
            This is mostly just a digital journal/scrapbook of things I
            like/collect. I may post insightful blogs about media I enjoy or my
            thoughts on specific topics. There's definitely going to be some
            shitposting my thoughts.
            <br />I might even post HTML/CSS/JS guides if there's any interest
            or I feel like there aren't many good resources for a specific
            topic. Idk I just kinda want this to be a "digital spellbook" of
            sorts, any magic you could want, is here.
          </p>

          {/* divider image */}

          <img className={styles.divider} alt="divider image" width="75%" />

          {/* button wall */}

          <ButtonWall />
        </div>
      </main>

      {/* end main */}

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
