import type { StoryObj } from '@storybook/react';

import { _SignIn as SignIn } from './sign-in.container';

export default {
  title: 'SignIn',
  component: SignIn,
};
type Story = StoryObj<typeof SignIn>;

export const SignInStory: Story = () => {
  const signInProps = {
    isLoggedIn: false,
    signIn: () => {
      console.log('sign in');
    },
  };
  return (
    <div>
      <SignIn {...signInProps} />
    </div>
  );
};

SignInStory.storyName = 'Sign in';
