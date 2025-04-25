import React, {useState} from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ConsultarCliente = () => {

    const location = useLocation();
    const [cliente, setCliente] = useState(location.state);

    const navigate = useNavigate();

    const alterarCliente = () => {
        api.put('/clientes/'+cliente.id_cliente, cliente)
        .then(() => 
            alert("Cliente alterado com sucesso!"))
        .catch((e) =>
            console.log(e.response.data));
        navigate(-1);
    }

    const excluirCliente = () => {
        if (window.confirm("Deseja realmente excluir o cliente?")){
            api.delete('/clientes/'+cliente.id_cliente)
            .then(() => 
                alert("Cliente excluído com sucesso!"));
            navigate(-1);
        }
    }

    return(
        <Container>
            <h3>Consultar Cliente</h3>
            <Row>
                <Col>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        name="nome_cliente" value={cliente.nome_cliente} onChange={(e) =>setCliente({...cliente, nome_cliente: e.target.value})}/>
                </Col>
                <Col md="6">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text"
                        name="telefone" value={cliente.telefone} onChange={(e) => setCliente({...cliente, telefone: e.target.value})}/>
                </Col> 
                
            </Row>
            <Row>
            <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        name="email" value={cliente.email} onChange={(e) => setCliente({...cliente, email: e.target.value})}/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Button variant="warning" onClick={alterarCliente}> Alterar </Button>
                    <Button variant="danger" onClick={excluirCliente}> Excluir </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ConsultarCliente;