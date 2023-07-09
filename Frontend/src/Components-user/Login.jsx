import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gerente_img from './img-user/gerente.png';
import usuario_img from './img-user/usuario.png';
import { Home2 } from '../App';

const LoginContainer = styled.div`
  text-align: center;
  margin: 150px auto; /* Centrar la tarjeta horizontalmente */
  width: 700px; /* Ajustar el ancho de la tarjeta */
  height: 400px; /* Ajustar la altura de la tarjeta */
  background-color: black; /* Cambiar el color de fondo a negro */
  display: flex; /* Alinear los elementos horizontalmente */
  flex-direction: column; /* Alinear los elementos en una columna */
  justify-content: center; /* Centrar verticalmente los elementos */
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  font-size: 35px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Alinear el espacio entre los botones */
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #e0e0e0;
  color: #000;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

const Home2Container = styled.div`
  display: flex;
  align-items: center; /* Alinear verticalmente en el centro */
`;

const HomeText = styled.p`
  margin-right: 10px;
`;

const Home2Image = styled.img`
  height: 60px;
`;

const VerticalLine = styled.div`
  width: 2px;
  height: 200px;
  background-color: #ccc;
  margin: 0 10px;
`;

const Login = () => {
  return (
    <div>
      <LoginContainer className='card'>
        <Title style={{ color: "white" }}>Iniciar sesión</Title>
        <ButtonContainer>
          <Home2/>
        <VerticalLine />
          <Link to="/login-user">
            <Button>
              Ingresar como usuario
              <ul />
              <img src={gerente_img} height={60} />
            </Button>
          </Link>
          <Link to="/login-admin">
            <Button>
              Ingresar como administrador
              <ul />
              <img src={usuario_img} height={60} />
            </Button>
          </Link>
        </ButtonContainer>
      </LoginContainer>
    </div>
  );
};

export default Login;

