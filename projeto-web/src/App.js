import React, { useState } from 'react';
import './App.css';
import Botao from './components/Botao';

function App() {

  const [contador, setContador] = useState(0);
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  const clicarBotao1 = () =>{
    setContador(contador + 1);
  }

  const clicarBotao2 = () =>{
    const soma = Number(valor1) + Number(valor2)
    alert("Resultado da soma: " + soma);
  }


  return (
    <div>
      <h1>Olá Mundo!</h1>
      <p>Contador: {contador}</p>
      <Botao texto="Botão 1" aoClicar={clicarBotao1}/>
      
      <hr/>
      <input type='text' value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Informe o valor 1'/>
      
      <input type='text' value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Informe o valor 2'/>
      <Botao texto="Botão 2" aoClicar={clicarBotao2}/>
    </div>
  );
}

export default App;
