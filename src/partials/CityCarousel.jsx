
import Carousel from 'react-bootstrap/Carousel'

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
      <h5>San Francisco, USA</h5>
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
      <h5>Mumbai, India</h5>
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
      <h5>Third slide label</h5>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CityCarousel