
import React, { useEffect,useState } from 'react';
import ImageSlide from './data';
// import './App.css';

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(()=>{
    const timer=setTimeout(()=>{
        if(currentState===2){
            setCurrentState(0)
        }else{
            setCurrentState(currentState+1)
        }

    },4000)
    return ()=>clearTimeout(timer)
  },[currentState])

  const bgImageStyle = {
    backgroundImage: `url(${ImageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  };

  const goToNext = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="slideshow">
      <div style={bgImageStyle}></div>
      <div className='description'>
        <div>
          <h1>{ImageSlide[currentState].title}</h1>
          <p>{ImageSlide[currentState].body}</p>
        </div>
        <div className="ashi">
          {ImageSlide.map((slide, index) => (
            <span key={index} onClick={() => goToNext(index)}>
              
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;

