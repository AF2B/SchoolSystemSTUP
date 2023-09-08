import React, { useRef, useState } from 'react';

import { 
  Container, 
  LoginForm, 
  Input, 
  Button,
  Password, 
  ErrorMessage
} from './style';

const Login: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    const usernameValue = usernameRef.current?.value || '';
    const passwordValue = passwordRef.current?.value || '';

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(usernameValue)) {
      setErrorMessage('Invalid email address');
      return; // Return early if email is invalid
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameValue, password: passwordValue }),
      });

      if (response.ok) {
        console.log('Login successful!');
        window.location.href = 'google.com.br'; // Página de redirecionamento após o login bem-sucedido
      } else {
        setErrorMessage('Invalid username or password');
        resetFields(); //função para limpar os campos
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while logging in.');
    }
  };

  const resetFields = () => {
    if (usernameRef.current) {
      usernameRef.current.value = '';
    }
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
  };

  const handleForgoutPassword = () => {
    window.location.href = 'google.com.br'; // Página de redirecionamento
  };

  return (
    <Container>
      <LoginForm>
        <ErrorMessage>
          {errorMessage}
          <Input
            type="text"
            placeholder="Email"
            ref={usernameRef}
          />
          <Input
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <Password>
            <h4 onClick={handleForgoutPassword}>Forgot your password?</h4>
          </Password>
          <Button onClick={handleLogin}>SIGN IN</Button>
        </ErrorMessage>
      </LoginForm>
    </Container>
  );
};

export default Login;
