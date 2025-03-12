"use client";
import styles from "./page.module.css";
import MusicPlayer from "@/components/MusicPlayer";
import ButtonWall from "@/components/ButtonWall";
import Footer from "@/components/Footer";

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

      {/* LEFT SIDE NAV */}

      <nav className={`${styles.widget} ${styles.leftNav}`}>
        <h2 className={styles.navHeader}>Explore if you dare!</h2>
        <h3 className={styles.navTitle}>Personal</h3>
        <ul>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/journal">Journal</a>
          <a href="/collections">Collections</a>
          <a href="/art">Art</a>
          <a href="/music">Music</a>
          <a href="/games">Games</a>
          <a href="/animanga">Animanga</a>
          <a href="/media">Media Log</a>
        </ul>
        <h3 className={styles.navTitle}>Resources from a mere Web Wizard</h3>
        <ul>
          <a href="/sitemap">Sitemap</a>
          <a href="/spellbook">Web Wizardry</a>
        </ul>
        <h3 className={styles.navTitle}>Outer Realms</h3>
        <ul>
          <a
            href="https://github.com/lichenhaunt/personal-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Repo
          </a>
        </ul>
      </nav>

      {/* right side nav bar/small web stuff */}

      <nav className={`${styles.widget} ${styles.rightNav}`}>
        <h2 className={styles.navHeader}>Stay Current (or Not)</h2>
        <h3 className={styles.navTitle}>RSS Feed</h3>
        <ul>
          <a href="rss.xml">
            <img
              className={styles.rss}
              alt="RSS button"
              width={24}
              height={24}
              src="/rss.png"
            />
            Subscribe to updates
          </a>
          {/* figure out how rss works with next.js */}
          <a href="https://en.wikipedia.org/wiki/RSS" target="_blank">
            What is an RSS feed you may ask?
            {/* get link to rss intro */}
          </a>
        </ul>
        <h3 className={styles.navTitle}>Find me Elsewhere</h3>
        <ul>
          <a
            href="https://lichenhaunt.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tumblr (WARNING ADULT CONTENT)
          </a>
          <a href="/chat">Discuss Wizard Politics</a>
          {/* maybe make a discord server?? or code my own chatbox */}
          <a href="mailto:lichenhaunt@yahoo.com">Email Me</a>
        </ul>
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

      <Footer />
    </div>
  );
}
