import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
<footer style={{backgroundColor: 'grey'}}>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              href="/src/assets/images/ave-fenix-concepto-logotipo-logotipo-de-phoenix-de-lujo-vector-logo-bird-logo-creativas-de-pajaro-mitologico-un-ave-unica-ave-mag.jpg"
              width="30px"
            />
            <span className="ms-4 h5 mb-0 font-weight-bold">React-Vite-TypeScript</span>
          </a>
          <small className="ms-2">&copy; React-Vite-TypeScript, 2023. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
      </footer>
  );
}

export default Footer
