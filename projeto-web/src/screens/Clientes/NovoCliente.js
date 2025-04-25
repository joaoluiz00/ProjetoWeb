import React, {useState} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import api from "../../api";

const NovoCliente = () => {

    const [cliente, setCliente] = useState({nome_cliente: "", telefone: "", email: ""});

    const salvarCliente = () => {
        try{
            api.post('/clientes', cliente);
            alert("Usuário cadastrado com sucesso!");
        }catch(e){
            console.log("Erro: "+ e);
        }
        setCliente({nome_cliente: "", telefone: "", email: ""});
    }

    return(
        <Container>
            <h3>Novo Cliente</h3>
            <Row>
                <Col>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        name="nome_cliente" value={cliente.nome_cliente} onChange={(e) =>setCliente({...cliente, nome_cliente: e.target.value})}/>
                </Col>
                <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        name="email" value={cliente.email} onChange={(e) => setCliente({...cliente, email: e.target.value})}/>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text"
                        name="telefone" value={cliente.telefone} onChange={(e) => setCliente({...cliente, telefone: e.target.value})} />
                </Col> 
            </Row>
            <Row className="mt-2">
                <Col>
                    <Button variant="success" onClick={salvarCliente}> Salvar </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NovoCliente;