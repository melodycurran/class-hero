'use client'
import { useState } from "react";

export default function Home() {
  const [scrollPosition, setscrollPosition] = useState(0)


  function handleScroll() {
    setscrollPosition(window.pageYOffset);
    console.log(window.pageYOffset)
    console.log(scrollPosition)
  }

  return (
    <div onScroll={handleScroll} className="text-center">

      {/* <div className={`${styles.categories} ${styles.parallax} ${styles.para1}`}> */}
      {/* <ul className={`${styles.categories}${styles.para1}`}>
        <li><Image src='/reading.svg' width={80} height={80} alt="reading" /><span>READING</span></li>
        <li><Image src='/math.svg' width={80} height={80} alt="math" /><span>MATH</span></li>
        <li><Image src='/science.svg' width={80} height={80} alt="science" /><span>SCIENCE</span></li>
        <li><Image src='/filipino.svg' width={80} height={80} alt="filipino" /><span>FILIPINO</span></li>
      </ul> */}
      {/* </div> */}


      <div>
        <h2>Unlock Potential</h2>
        <h2>Engage. Learn. Grow.</h2>
        <h2>Expertly Crafted</h2>
      </div>

      <div>
        <h2>Time-Saving</h2>
        <h2>Educator Platform</h2>
        <h2>Be the hero of every lesson!</h2>
      </div>

      <div>
        <h2>Unlock Potential</h2>
        <h2>Engage. Learn. Grow.</h2>
        <h2>Expertly Crafted</h2>
      </div>
    </div>


  );
}
