
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
  return (
    <>
      <h2 style={{ margin: '50px 0px 0px 50px' }}>
        Tienda de Ropa
      </h2>
      <p style={{ margin: '0px 0px 0px 50px' }}>
        En esta tienda podrá encontrar ropa de la mejor calidad.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', boxSizing: 'border-box' }}>
        <Card style={{ width: '18rem', margin: '50px' , backgroundColor:"#DCBB9B"}}>
          <Card.Img variant="top" src="https://falabella.scene7.com/is/image/FalabellaPE/881087451_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70" alt='cargando' style={{ maxHeight: "300px", minHeight: "100px" }} />
          <Card.Body>
            <Card.Title>Pantalon</Card.Title>
            <Card.Text>
              Pantalon de jean.
            </Card.Text>
            <Card.Text>
              Precio: 99$
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '50px', backgroundColor:"#DCBB9B" }}>
          <Card.Img variant="top" src="https://acdn.mitiendanube.com/stores/029/842/products/nirvana1-2d1bbed349758198e516166141022282-640-0.webp" alt='cargando' style={{ maxHeight: "300px", minHeight: "100px" }} />
          <Card.Body>
            <Card.Title>Remera</Card.Title>
            <Card.Text>
              Remera Nirvana.
            </Card.Text>
            <Card.Text>
              Precio: 199$
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '50px', backgroundColor:"#DCBB9B"}}>
          <Card.Img variant="top" src="https://tugroovy.com/wp-content/uploads/2023/03/Buzo-Off-White-1.jpg" alt='cargando' style={{ maxHeight: "300px", minHeight: "100px" }} />
          <Card.Body>
            <Card.Title>Buzo</Card.Title>
            <Card.Text>
              Buzo Groovy.
            </Card.Text>
            <Card.Text>
              Precio: 299$
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default AboutUs
