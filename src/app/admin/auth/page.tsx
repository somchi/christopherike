import { RESET_PASSWORD } from '@/app/_libs/site-navigation';
import React from 'react';
import AuthWrapper from './component/authwrapper';
import { LoginForm } from './component/login-form';

export default async function Login() {
  return (
    <AuthWrapper
      title="Sign-in"
      description={`Login to gain access`}
      formFooter={{
        title: 'Already have an account?',
        action: 'Sing in instead',
        linkPath: RESET_PASSWORD.href,
      }}
    >
      <LoginForm />
    </AuthWrapper>
  );
}
