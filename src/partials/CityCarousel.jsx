
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

function CityCarousel() { 
return(
<Carousel variant="dark">
  <Carousel.Item>
  <div className='item'>
    <img
      className="pics"
      src={process.env.PUBLIC_URL + '/images/SF.png'}
      alt="First slide"
    />
    </div>
    <Carousel.Caption className='caption'>
      <div className='caption'>
      <Link to='/cities/6132642f3fdc0e5e10345f0f'>
        San Francisco, USA
      </Link>
      </div>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className='item'>
    <img
      className="pics"
      src={process.env.PUBLIC_URL + '/images/Mumbai.jpeg'}
      alt="Second slide"
    />
    </div>
    <Carousel.Caption>
      <div className='caption'>
      <Link to='/cities/6137ad1777a829bd947350f2'>
        Mumbai, India
      </Link>
      </div>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item >
    <div className='item'>
    <img
      className="pics"
      src={process.env.PUBLIC_URL + '/images/paris.jpeg'}
      alt="Paris, France"
    />
    </div>
    <Carousel.Caption>
      <div className='caption'>
      <Link to='/cities/6137ad1077a829bd947350f0'>
        Paris, France
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CityCarousel