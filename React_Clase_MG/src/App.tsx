import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';

const Router = React.lazy(() => import('./components/Router'));

function App() {
  return (
    <React.Suspense fallback={<Spinner animation="border" />}>
      <BrowserRouter>
      <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
        <Router />
        </Container>
        
      </BrowserRouter>
      <Footer/>
    </React.Suspense>
  )
}

export default App
