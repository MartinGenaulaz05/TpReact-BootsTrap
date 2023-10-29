import Carousel from 'react-bootstrap/Carousel';
const CauroselHome = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img 
      className='d-block w-100' 
      style={{maxHeight:"500px", objectFit:'cover'}}
      src='/src/assets/images/ropa-segunda-mano-usada-barata-1200x640.jpg.jpg' alt='cargando'/>
      <Carousel.Caption>
        <h3>Tienda de Ropa</h3>
        <p>Buzos</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className='d-block w-100' 
        style={{maxHeight:"500px", objectFit:'cover'}}
        src='https://img.freepik.com/fotos-premium/pantalones-cortos-jeans-estante-tienda-ropa-moda-estantes-tienda_130265-4797.jpg?w=996' alt='cargando'/>
      <Carousel.Caption>
        <h3>Tienda de Ropa</h3>
        <p>Pantalones</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className='d-block w-100' 
        style={{maxHeight:"500px", objectFit:'cover'}}
        src='/src/assets/images/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg' alt='cargando'/>
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
