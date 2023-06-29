import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gerente_img from './img-user/gerente.png';
import usuario_img from './img-user/usuario.png';
import { Home2 } from '../App';

const LoginContainer = styled.div`
  text-align: center;
  // margin: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  font-size: 35px;
  font-weight: bold;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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

const Login = () => {
  return (
    <LoginContainer className='card'>
      <Title>Iniciar sesión</Title>
      <ButtonContainer>
        <Link to="/login-user">
          <Button>Ingresar como usuario<ul /><img src={gerente_img} height={60} /></Button>
        </Link>
        <Link to="/login-admin">
          <Button>Ingresar como administrador<ul /><img src={usuario_img} height={60} /></Button>
        </Link>
      </ButtonContainer>
      <Home2 />
    </LoginContainer>
  );
};

export default Login;



