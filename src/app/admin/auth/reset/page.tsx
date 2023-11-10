import { LOGIN } from '@/app/_libs/site-navigation';
import React from 'react';
import AuthWrapper from '../component/authwrapper';
import { ResetPasswordForm } from '../component/reset-pass-form';

export default async function ResetPassword() {
  return (
    <AuthWrapper
      title="Reset Password"
      description={`Reset password to gain access`}
      formFooter={{
        title: 'Remembered password?',
        action: 'Sing in instead',
        linkPath: LOGIN.href,
      }}
    >
      <ResetPasswordForm />
    </AuthWrapper>
  );
}
