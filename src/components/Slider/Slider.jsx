/*Code by https://codepen.io/bnsddk/pen/dyXaNod */
import React from "react"
import styles from './Slider.module.css'

const images = ['/buses.jpg', 'buses_2.jpg', 'buses_3.jpg', 'buses_4.jpg']
const delay = 5000;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((url, index) => (
          <img
            className={styles.slide}
            key={index}
            src={url}
            alt="conducciones las arrieritas buses"
          />
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot} ${index === idx ? styles.active : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}