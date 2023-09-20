import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import type { StoryObj } from '@storybook/react';

import { _SignIn as SignIn } from './sign-in/sign-in.container';
import { _SignUp as SignUp } from './sign-up/sign-up.container';

export default {
  title: 'Authentication',
  component: React.Fragment,
  args: {
    isStorybook: !!process.env.STORYBOOK_ENV,
  },
};
type Story = StoryObj<typeof React.Fragment>;

const authProps = {
  isLoggedIn: false,
  signIn: () => {
    console.log('sign in');
  },
  signUp: () => {
    console.log('sign up');
  },
};

export const SignInStory: Story = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn {...authProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

SignInStory.storyName = 'Sign in';

export const SignUpStory: Story = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp {...authProps} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

SignUpStory.storyName = 'Sign up';
