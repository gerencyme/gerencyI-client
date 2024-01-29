'use client';

import { useState } from 'react';
import { AuthForm } from './AuthForm';
import { Recovery } from '../../recovery';

export function FormsComponent() {
  const [isRecovery, setIsRecovery] = useState(false);

  const handleForgetPassword = () => setIsRecovery((isRecovery) => !isRecovery);

  return isRecovery ? (
    <Recovery.form handleForgetPassword={handleForgetPassword} />
  ) : (
    <AuthForm handleForgetPassword={handleForgetPassword} />
  );
}
