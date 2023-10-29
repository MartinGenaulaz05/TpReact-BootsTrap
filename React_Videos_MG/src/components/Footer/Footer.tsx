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
              src="https://as2.ftcdn.net/v2/jpg/05/78/32/05/1000_F_578320583_SUBIDYMRmFXO2Bi3Z9knrvpCbarRDR8u.webp"
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
