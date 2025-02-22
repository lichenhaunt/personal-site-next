"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";

const cloisterBlack = localFont({
  src: "./fonts/CloisterBlack.ttf",
  variable: "--cloister-black",
  weight: "100 900",
});
const glowNight = localFont({
  src: "./fonts/GLOW NIGHT.otf",
  variable: "--glow-night",
  weight: "100 900",
});

const veniceClassic = localFont({
  src: "./fonts/VeniceClassic.ttf",
  variable: "--venice-classic",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  function pickTheme(value) {
    setTheme(value);
    console.log(value);
  }
  return (
    <html lang="en">
      <body
        className={`${cloisterBlack.variable} ${glowNight.variable} ${veniceClassic.variable} ${theme}`}
      >
        <select
          className={`themeChange`}
          onChange={(e) => pickTheme(e.target.value)}
        >
          <option value="dark">Choose a Theme! (if you dare &#128128;)</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        {children}
      </body>
    </html>
  );
}
