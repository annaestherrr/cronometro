//Libs
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

//Image
import Fundo from "./assets/bobesponja.png";

//Style
const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #add8e6;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 500;
`;

const Result = styled.h2`
  font-size: 2.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 500;
`;

const BoxButton = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 5rem;
    height: 2rem;
    color: black;
    background-color: white;
    border-radius: 5px;
    border: transparent;
  }
`;

const Image = styled.img`
  width: 30rem;
  height: 25rem;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
`;

export default class App extends React.Component {
  state = {
    number: 0,
    msg: "Cronômetro",
  };

  start = () => {
    const Parar = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);

    this.stop = () => {
      clearInterval(Parar);
    };
  };

  restart = () => {
    this.setState({ number: 0 });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        msg: this.state.msg === "Cronômetro" ? "Hello!" : "Cronômetro",
      });
    }, 1000);
  }
  componentDidUpdate() {
    document.title = this.state.msg;
  }

  render() {
    return (
      <Container>
        <Title>Olá! Este é o meu cronômetro!</Title>
        <Result>{this.state.number}</Result>
        <BoxButton>
          <button onClick={this.start}>START</button>
          <button onClick={this.stop}>STOP</button>
          <button onClick={this.restart}>RESTART</button>
        </BoxButton>
        <div>
          <Image src={Fundo} alt="Imagem do Bob Esponja" />
        </div>
      </Container>
    );
  }
}
