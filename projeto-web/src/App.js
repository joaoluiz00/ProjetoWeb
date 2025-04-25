import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Contato from './screens/Contato';
import NovoCliente from './screens/Clientes/NovoCliente';
import Clientes from './screens/Clientes/Clientes';
import ConsultarCliente from './screens/Clientes/ConsultarCliente';

import NovoPrato from './screens/Pratos/NovoPrato';
import Pratos from './screens/Pratos/Pratos';
import ConsultarPrato from './screens/Pratos/ConsultarPrato';

import {Container, Nav, Navbar} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
    return (
      <Router>
        <Navbar bg="primary" variant='dark' expand='lg'>
          <Container>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contato">Contato</Nav.Link>

              <NavDropdown title="Clientes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Clientes/novo_cliente">Cadastrar Novo Cliente</NavDropdown.Item>
              <NavDropdown.Item href="/Clientes/clientes">Ver Todos os Clientes</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Pratos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Pratos/novo_pratos">Cadastrar Novo Pratos</NavDropdown.Item>
              <NavDropdown.Item href="/Pratos/Pratos">Ver Todos os Pratos </NavDropdown.Item>
              
            
            </NavDropdown>
            </Nav>
          </Container>
        </Navbar>

        <Container className='mt-4'>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/Clientes/novo_cliente" element={<NovoCliente/>} />
            <Route path="/Clientes/clientes" element={<Clientes/>} />
            <Route path="/Clientes/consultar_cliente" element={<ConsultarCliente/>} />


            <Route path="/Pratos/novo_prato" element={<NovoPrato/>} />
            <Route path="/Pratos/pratos" element={<Pratos/>} />
            <Route path="/Pratos/consultar_prato" element={<ConsultarPrato/>} />
          </Routes>
        </Container>
      </Router>
    );
}

export default App;
