
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const LoginForm = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #f2f2f2;
  max-width: 400px;
  width: 100%;
  margin: auto;

    // Celular até 599px
  @media (max-width: 599px) {
    max-width: 60%;
    margin: auto;
  }

  @media (max-width: 400px) {
    max-width: 60%;
    margin: auto;
  }

  //Tablet de 600px ate 1000px
  @media (min-width: 600px) and (max-width: 1000px){
    max-width: 40%;
    margin: auto;
  }

  //PC maior que 1001px
  @media (min-width: 1001px) {
    max-width: 30%;
    margin-left: 55%;
  }
  
  //Pc Ultrawide
  @media (min-width: 2000px) {
    max-width: 30%;
    margin-left: 55%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: FireBrick;
  }
`;

export const Password = styled.h4`
  padding: 10px 1px;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }

  @media (max-width: 599px) {
    font-size: 8px;
    padding: 10px 1px;
  }

  @media (min-width: 600px) and (max-width: 1500px){
    font-size: 12px;
    padding: 10px 1px;
  }

  @media (max-width: 2400px) {
    font-size: 10px;
    padding: 10px 1px;
  }
`;

export const P = styled.p`
  color: red;
  margin-top: 10px;
  text-align: center;
`;