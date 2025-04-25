import React, {useState, useEffect} from 'react';
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";

const Cliente = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(
        () => {
            api.get("/clientes")
                .then(response => {
                    setClientes(response.data);
                })
                .catch(response =>{
                    console.log("Erro ao Consultar Clientes!");
                });
        }
          
    );

    return (
        <Container>
            <h3>Lista de Clientes</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th></th>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr>
                            <td>{cliente.nome_cliente}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <Button variant="info" as={Link} to="/Clientes/consultar_cliente" state={cliente}>
                                    Consultar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Cliente;