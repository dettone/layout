"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import SliderImage from "../../../../assets/images/header/SliderImage.png";
import styles from "./slider.module.css";
import { useState } from "react";
//Olhar o exemplo https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/react?file=/src/App.js
export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },

  });

  return (
    <>
    <div className={styles["navigation-wrapper"]}>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <div className={styles.sliderImg}> 
        <div className={styles.contentContainer}>
        <h2>Promoções de Outono</h2>
          <p>Confira os melhores looks para combinar</p>
          <p> com você nesse Outono</p>
          <button>Conferir</button>
        </div>
        </div>{" "}
      </div>
      <div className="keen-slider__slide">
        <div className={styles.sliderImg}> </div>
      </div>
      <div className="keen-slider__slide">
        <div className={styles.sliderImg}></div>
      </div>
      <div className="keen-slider__slide">
        <div className={styles.sliderImg}></div>
      </div>
      <div className="keen-slider__slide">
        <div className={styles.sliderImg}></div>
      </div>
    </div>

    {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e : any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e : any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
{loaded && instanceRef.current && (
  <div className={styles.dots}>
    {[
      ...Array(instanceRef.current.track.details.slides.length).keys(),
    ].map((idx) => {
      return (
        <button
          key={idx}
          onClick={() => {
            instanceRef.current?.moveToIdx(idx)
          }}
          className={styles.dot + (currentSlide === idx ? " " + styles.active : "")}
        ></button>
      )
    })}
  </div>
)}
    </div>


</>
)
}

function Arrow(props : any) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? styles["arrow--left"] : styles["arrow--right"]
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default Slider;
