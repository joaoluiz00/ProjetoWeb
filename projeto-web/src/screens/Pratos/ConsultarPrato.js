import React, {useState} from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ConsultarPrato = () => {

    const location = useLocation();
    const [prato, setPrato] = useState(location.state);
    const navigate = useNavigate();

    const alterarPrato = () => {
        api.put('/pratos/'+prato.id_prato, prato)
        .then(() => 
            alert("Prato alterado com sucesso!"))
        .catch((e) =>
            console.log(e.response.data));
        navigate(-1);
    }

    const excluirPrato = () => {
        if (window.confirm("Deseja realmente excluir o prato?")) {
          api.delete('/pratos/' + prato.id_prato)
            .then(() => {
              alert("Prato excluído com sucesso!");
              navigate(-1);
            })
            .catch((error) => {
              if (error.response?.status === 500) {
                alert("Este prato não pode ser excluído porque está vinculado a pedidos.");
              } else {
                alert("Erro desconhecido. Tente novamente.");
              }
            });
        }
      };

    return(
        <Container>
            <h3>Consultar Prato</h3>
            <Row>
                <Col md="8">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text"
                        value={prato.nome_prato} 
                        onChange={(e) => setPrato({...prato, nome: e.target.value})}
                    />
                </Col>
                <Col>
                    <Form.Label>Preço</Form.Label>
                    <Form.Control 
                        type="number"
                        step="0.01"
                        value={prato.preco} 
                        onChange={(e) => setPrato({...prato, preco: parseFloat(e.target.value)})}
                    />
                </Col>
            </Row>
            
            <Row className="mt-3">
                <Col>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        value={prato.descricao} 
                        onChange={(e) => setPrato({...prato, descricao: e.target.value})}
                    />
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Form.Label>Imagem (URL)</Form.Label>
                    <Form.Control 
                        type="text"
                        value={prato.imagem} 
                        onChange={(e) => setPrato({...prato, imagem: e.target.value})}
                    />
                </Col>
                <Col className="d-flex align-items-center">
                    <Form.Check 
                        type="switch"
                        label="Disponível"
                        checked={prato.disponivel === 1}
                        onChange={(e) => setPrato({...prato, disponivel: e.target.checked ? 1 : 0})}
                    />
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Button variant="warning" onClick={alterarPrato}> Alterar </Button>
                    <Button variant="danger" className="ms-2" onClick={excluirPrato}> Excluir </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ConsultarPrato;