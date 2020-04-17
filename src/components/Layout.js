import React from 'react'
import { Container } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <Container>
    <Header />
    {props.children}
    <Footer />
  </Container>
)

export default Layout;