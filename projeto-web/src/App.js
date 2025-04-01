import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Contato from './screens/Contato';
import {Container, Nav} from 'react-bootstrap';

function App() {
    return (
        <Router>
            <Nav bg="primary" variant="dark" expand="lg">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/contato"}>Contato</Nav.Link>
            </Nav>

            <Container fluid>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;