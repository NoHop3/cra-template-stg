import { Routes, Route, BrowserRouter } from 'react-router-dom';
import type { StoryObj } from '@storybook/react';

import { _SignIn as SignIn } from './sign-in/sign-in.container';
import { _SignUp as SignUp } from './sign-up/sign-up.container';

export default {
  title: 'Authentication',
  component: [SignIn, SignUp],
};
type Story = StoryObj<typeof SignIn>;

export const SignInStory: Story = () => {
  const signInProps = {
    isLoggedIn: false,
    signIn: () => {
      alert('Sign in');
    },
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn {...signInProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

SignInStory.storyName = 'Sign in';

export const SignUpStory: Story = () => {
  const signUpProps = {
    isLoggedIn: false,
    signUp: () => {
      alert('Sign up');
    },
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp {...signUpProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

SignUpStory.storyName = 'Sign up';
