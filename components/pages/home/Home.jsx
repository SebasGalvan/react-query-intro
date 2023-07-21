import React from 'react'
import SliderComponent from '../../Slider/SliderImagenes'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center mt-1">
        <Link to="/ejemplo">Ejemplo</Link>
      </div>
      <SliderComponent />
    </>
  )
}

export default Home