import Carousel from 'react-bootstrap/Carousel';
const CauroselHome = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img 
      className='d-block w-100' 
      style={{maxHeight:"500px", objectFit:'cover'}}
      src='./src/assets/images/ropa-segunda-mano-usada-barata-1200x640.jpg.jpg' alt='cargando'/>
      <Carousel.Caption>
        <h3>Tienda de Ropa</h3>
        <p>Buzos</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className='d-block w-100' 
        style={{maxHeight:"500px", objectFit:'cover'}}
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fpantalones-cortos-jeans-estante-tienda-ropa-moda-estantes-tienda_9518756.htm&psig=AOvVaw0cvZwYLYHJ8zkQ4BThdHMK&ust=1698624968930000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDH-ID-mYIDFQAAAAAdAAAAABAE' alt='cargando'/>
      <Carousel.Caption>
        <h3>Tienda de Ropa</h3>
        <p>Pantalones</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className='d-block w-100' 
        style={{maxHeight:"500px", objectFit:'cover'}}
        src='./src/assets/images/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg' alt='cargando'/>
      <Carousel.Caption>
        <h3>Tienda de Ropa</h3>
        <p>
          Remeras
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CauroselHome
