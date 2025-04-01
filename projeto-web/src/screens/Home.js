import React, { useState } from 'react';
import Botao from '../components/Botao';
import {Form} from 'react-bootstrap';


const Home = () => {
    const [lista, setLista] = useState([]);
  const [valor, setValor] = useState('');

  const adicionarValor = () => {
    if (valor.trim() !== ''){
      setLista([...lista, valor])
      setValor('');
    }
  }

  return (
    <div>
      <h1>Lista Dinâmica</h1>
      <Form.Control type='texte' value={valor} onChange={(e) =>setValor(e.target.value)} 
      placeholder='Informe um valor'/>
      <Botao texto="Adicionar Valor" aoClicar={adicionarValor}/>
      <ul>
        {
          lista.map((item, index) => (
              <li>{item}</li>
          ))}
      </ul>
    </div>
  )
}

export default Home;