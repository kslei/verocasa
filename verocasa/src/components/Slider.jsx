import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../styles/components/Slider.module.scss';

const Slider = ({products}) => {
  const navigate = useNavigate();
  const Images = useRef(null)//to calculate image width in px / для вычисления ширины картинки в px
  const time = 500//delay / задержка
  let imagesNum = 1;//The number of pictures in the visible part / Количество картинок в видимой части
  const [play, setPlay] = useState(true);//play / pause
  const [count, setCount] = useState(0);//counter / счетчик
  const [items, setItems] = useState([]);//array of count products
  const [shift, setShift] = useState(false); //move mouse pointer / сдвиг указателя мыши
  const [offset, setOffset] = useState(0);//offset icon__images in % / смещение icon__images в %
  const [transition, setTransition] = useState(time);//offset delay icon__images / задержка смещения icon__images
  const [disabled, setDisabled] = useState(false);//disabled for buttons next, prev 
  const [shiftX, setShiftX] = useState(0)//offset move / величина движения (координата точки в движении)
  const [shiftX0, setShiftX0] = useState(0)//start offset move / начальная величина движения (координата точки нажатия)
  const [shiftCount, setShiftCount] = useState(0)//offset counter / счетчик по смещению
  const [delta, setDelta] = useState(0);//offset icon__images in px / сдвиг icon__images в рх

  //play
  useEffect(() => {
    if (play) {
      const int = setInterval(() => {
        nextImg()
      }, 7000)
      return () => clearInterval(int)
    }
  }, [count, play])

  useEffect(() => {
    if (products.length) {
      drowImage()
    }
  }, [products, count])

  //set images number
  
  if (products.length <= imagesNum) imagesNum = products.length

  //set next / previous image count
  const nextImg = () => {
    setDisabled(true)
    if (imagesNum !== products.length) {
      setOffset((-1 - imagesNum) * 100 / items.length);
      setTransition(time)
      setTimeout(() => {
        onCount(count + 1)
      }, time)
    }
  }
  const prevImg = () => {
    setDisabled(true)
    if (imagesNum !== products.length) {
      setOffset((1 - imagesNum) * 100 / items.length);
      setTransition(time)
      setTimeout(() => {
        onCount(count - 1)
      }, time)
    }
  }
  //set count if >= length or < 0
  const onCount = (countImg) => {
    setDisabled(false)
    if (countImg >= products.length) {
      setCount(countImg - products.length)
    } else {
      if (countImg < 0) {
        setCount(products.length + countImg)
      } else {
        if (countImg === count) {
          setInit(items)
        } else {
          setCount(countImg)
        }
      }
    }
  }
  //The initial state / Исходное состояние
  const setInit = (array) => {
    setTransition(0)
    setShiftCount(0)
    setDelta(0)
    setOffset((-imagesNum) * 100 / array.length)
    setShiftX(0)
    setShiftX0(0)
  }
  //Show images / Показ картинок
  const drowImage = () => {
    let arr = [];
    for (let i = count - imagesNum; i <= count + 2 * imagesNum - 1; i++) {
      let item;
      if (i > products.length - 1) {
        if (i >= 2 * products.length) {
          item = i - 2 * products.length;
        } else {
          item = i - products.length;
        }
      } else {
        if (i < 0) {
          item = i + products.length;
        } else {
          item = i;
        }
      }

      arr.push(item);
    }
    setInit(arr)
    setItems(arr)
  }

  //start position
  function begin(e) {
    e.preventDefault();
    let event;
    e.type.search('touch') !== -1 ? event = e.touches[0] : event = e;
    setShiftX0(event.clientX);
    setShiftX(event.clientX);
    setTransition(0);
    setTimeout(() => {
      if (imagesNum !== products.length) {
        setShift(true);
      }
    }, 300)
  }

  //move position
  function move(e) {
    e.preventDefault();
    let event;
    e.type.search('touch') !== -1 ? event = e.touches[0] : event = e;
    if (!shift) {
      return;
    }
    setShiftX(event.clientX);
    let translate = shiftX - shiftX0;
    setDelta(translate);
    setShiftCount(Math.round(translate / (Images.current.getBoundingClientRect().width / items.length)))
  }

  //finish position
  function end(product) {
    if (shift) {
      setShift(false)
    } else {
      if (product.id) navigate('/')//Переход по ссылке
      setTimeout(() => {
        setShift(false)
      }, 300)
    }
    setTransition(time)
    setDelta(Math.round((Images.current.getBoundingClientRect().width / items.length)) * shiftCount)
    setTimeout(() => {
      onCount(count - shiftCount)
    }, time)
  }

  return (
    <div className={styles.sliderBlock} onMouseEnter={() => setPlay(false)} onMouseLeave={() => setPlay(true)}>
      <div className={styles.arrow}>
        <div className={styles.arrow__left} onClick={prevImg} disabled={disabled}></div>
        <div className={styles.arrow__right} onClick={nextImg} disabled={disabled}></div>
      </div>
      
      <div className={styles.slider} onMouseLeave={() => end({})}>
        <div className={styles.slider__images} ref={Images} style={{ width: `${items.length * 100 / imagesNum}%`, transform: `translateX(calc(${offset}% + ${delta}px))`, transition: `all ${transition}ms ease` }}>
          {items.length !== 0 && items.map((item, i) =>
            <div className={styles.slider__image} key={i} style={{ width: `${100 / imagesNum}%` }} onMouseDown={begin} onTouchStart={begin} onMouseMove={move} onTouchMove={move} onMouseUp={() => end(products[item])} onTouchEnd={() => end(products[item])}>
              <img src={products[item].img} />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
export default Slider;