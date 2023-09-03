import React, { useState } from 'react';

import { 
  FlexBox, 
  LoginForm, 
  Input, 
  Button,
  Password, 
  P
} from './style';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      console.log('Login successful!');
      window.location.href = 'https://www.google.com'; // Alterar o redirecionamento
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleForgoutPassword = () => {
    window.location.href = 'https://www.google.com'; // Alterar o redirecionamento
  };

  return (
    <FlexBox>
      <LoginForm>
        {errorMessage && <P>{errorMessage}</P>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Password>
          <h4 onClick={handleForgoutPassword}>Forgot your password?</h4>
        </Password>
        <Button onClick={handleLogin}>SIGN IN</Button>
      </LoginForm>
    </FlexBox>
  );
};

export default Login;
