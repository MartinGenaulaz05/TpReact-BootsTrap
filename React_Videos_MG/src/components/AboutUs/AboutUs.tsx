
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
          <Card.Img variant="top" src="/src/assets/images/pantalon.jpg/" alt='cargando' style={{ maxHeight: "300px", minHeight: "100px" }} />
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
          <Card.Img variant="top" src="/src/assets/images/remera2.jpg" alt='cargando' style={{ maxHeight: "300px", minHeight: "100px" }} />
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
          <Card.Img variant="top" src="/src/assets/images/Buzo-Off-White-1.jpg" alt='cargando' style={{ maxHeight: "300px", minHeight: "100px" }} />
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
