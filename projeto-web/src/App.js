import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import Contato from './screens/Contato';
import {Container, Nav} from 'react-bootstrap';

function App() {

const [valor1, setValor1] = useState('');

const [valor2, setValor2] = useState('');

const [valor3, setValor3] = useState('');


    // return (
    //     <Router>
    //         <Nav bg="primary" variant="dark" expand="lg">
    //             <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
    //             <Nav.Link as={Link} to={"/contato"}>Contato</Nav.Link>
    //         </Nav>

    //         <Container fluid>
    //             <Routes>
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="/contato" element={<Contato />} />
    //             </Routes>
    //         </Container>
    //     </Router>
    //);

  //EXERCICIO 1 

  const clicarBotao1 = () => {

  const media = Number(valor1) + Number(valor2) + Number(valor3) / 3;

  alert("Resultado: "+media)

  }
 
  // EXERCICIO 2

  // const clicarBotao1 = () => {

  //   const f = (Number(valor1) * 1.8) + 32;

  //   alert("Resultado: " + f)

  // }
 
  // EXERCICIO 3

  // const clicarBotao1 = () => {

  //     const c = (Number(valor1) - 32) * 1.8;

  //     alert("Resultado: "+c)

  //   }
 
  // EXERCICIO 4

  // const clicarBotao1 = () => {

  //   const largura = Number(valor1);

  //   const altura = Number(valor2);

  //   const area = largura * altura;

  //   alert("Área do Retângulo: " + area);

  // }
 
  // EXERCICIO 5

  // const clicarBotao1 = () => {

  //   const raio = Number(valor1);

  //   const area = Math.PI * Math.pow(raio, 2);

  //   alert("Área do Círculo: " + area.toFixed(2));

  // }
 
  // EXERCICIO 6

  // const clicarBotao1 = () => {

  //   const largura = Number(valor1);

  //   const altura = Number(valor2);

  //   const perimetro = 2 * (largura + altura);

  //   alert("Perímetro do Retângulo: " + perimetro);

  // }
 
  // EXERCICIO 7

  // const clicarBotao1 = () => {

  //   const raio = Number(valor1);

  //   const perimetro = 2 * Math.PI * raio;

  //   alert("Perímetro do Círculo: " + perimetro.toFixed(2));

  // }
 
  // EXERCICIO 8

  // const clicarBotao1 = () => {

  //   const base = Number(valor1);

  //   const expoente = Number(valor2);

  //   const resultado = Math.pow(base, expoente);

  //   alert("Resultado: " + resultado);

  // }
 
  // EXERCICIO 9

  // const clicarBotao1 = () => {

  //   const metros = Number(valor1);

  //   const centimetros = metros * 100;

  //   alert("Valor em Centímetros: " + centimetros);

  // }
 
  // EXERCICIO 10

  // const clicarBotao1 = () => {

  //   const quilometros = Number(valor1);

  //   const milhas = quilometros * 0.621371;

  //   alert("Valor em Milhas: " + milhas.toFixed(2));

  // }
 
  // EXERCICIO 11

  // const clicarBotao1 = () => {

  //   const peso = Number(valor1);

  //   const altura = Number(valor2);

  //   const imc = peso / Math.pow(altura, 2);

  //   alert("IMC: " + imc.toFixed(2));

  // }
 
  // EXERCICIO 12

  // const clicarBotao1 = () => {

  //   const preco = Number(valor1);

  //   const desconto = Number(valor2);

  //   const precoComDesconto = preco - (preco * (desconto / 100));

  //   alert("Preço com Desconto: " + precoComDesconto.toFixed(2));

  // }
 
  // EXERCICIO 13

  // const clicarBotao1 = () => {

  //   const capital = Number(valor1);

  //   const taxa = Number(valor2) / 100;

  //   const periodo = Number(valor3);

  //   const jurosSimples = capital * taxa * periodo;

  //   alert("Juros Simples: " + jurosSimples.toFixed(2));

  // }
 
  // EXERCICIO 14

  // const clicarBotao1 = () => {

  //   const capital = Number(valor1);

  //   const taxa = Number(valor2) / 100;

  //   const periodo = Number(valor3);

  //   const montante = capital * Math.pow((1 + taxa), periodo);

  //   alert("Montante com Juros Compostos: " + montante.toFixed(2));

  // }
 
  // EXERCICIO 15

  // const clicarBotao1 = () => {

  //   const dias = Number(valor1);

  //   const horas = dias * 24;

  //   const minutos = horas * 60;

  //   const segundos = minutos * 60;

  //   alert(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`);

  // }
 
 
  return (
<div>
<hr />
<input

        type="text"

        value={valor1}

        onChange={(e) => setValor1(e.target.value)}

        placeholder="Informe o Valor 1"

      />
<input

        type="text"

        value={valor2}

        onChange={(e) => setValor2(e.target.value)}

        placeholder="Informe o Valor 2"

      />
<input

        type="text"

        value={valor3}

        onChange={(e) => setValor3(e.target.value)}

        placeholder="Informe o Valor 3"

      />
 
    <Botao texto="Resultado" aoClicar={clicarBotao1}/>
 
  </div>   

  );

}
 
export default App;
 

