import React, {useState, useEffect} from 'react';
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";

const Pratos = () => {

    const [pratos, setPratos] = useState([]);

    useEffect(
        () => {
            api.get("/pratos")
                .then(response => {
                    setPratos(response.data);
                })
                .catch(error => {
                    console.log("Erro ao Consultar Pratos!", error);
                });
        }, []
    );

    return (
        <Container>
            <h3>Lista de Pratos</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Disponível</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
  {pratos.map(prato => (
    <tr key={prato.id}>
      <td>{prato.nome_prato}</td>
      <td>{prato.descricao}</td>
      <td>R$ {Number(prato.preco).toFixed(2)}</td> {/* Correção aqui */}
      <td>{prato.disponivel ? 'Sim' : 'Não'}</td>
      <td>
        <Button variant="info" as={Link} to="/Pratos/consultar_prato" state={prato}>
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

export default Pratos;