import Carousel from 'react-bootstrap/Carousel';
const CauroselHome = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img 
      className='d-block w-100' 
      style={{maxHeight:"500px", objectFit:'cover'}}
      src='https://www.tuexperto.com/wp-content/uploads/2020/06/ropa-segunda-mano-usada-barata-1080x720.jpg.webp' alt='cargando'/>
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
        src='https://img.freepik.com/fotos-premium/tienda-moda-presenta-ropa-perchas-que-incorporan-estetica-boutique-moderna_896558-6197.jpg?w=900' alt='cargando'/>
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
