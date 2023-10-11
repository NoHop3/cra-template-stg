import { Routes, Route, BrowserRouter } from 'react-router-dom';
import type { StoryObj } from '@storybook/react';

import { Login } from './login/login';
import { Register } from './register/register';

export default {
  title: 'Authentication',
  component: [Login, Register],
};
type Story = StoryObj<typeof Login>;

export const LoginStory: Story = () => {
  const loginProps = {
    isLoading: false,
    login: () => {
      alert('Login');
    },
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login {...loginProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

LoginStory.storyName = 'Login';

export const RegisterStory: Story = () => {
  const registerProps = {
    isLoading: false,
    register: () => {
      alert('Register');
    },
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Register {...registerProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

RegisterStory.storyName = 'Register';
