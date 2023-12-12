'use client';

import { useState } from 'react';
import { RegisterForm } from './RegisterForm';
import { Recovery } from '../../recovery';

export function FormsComponent() {
  const [isRecovery, setIsRecovery] = useState(false);

  const handleForgetPassword = () => setIsRecovery((isRecovery) => !isRecovery);

  return isRecovery ? (
    <Recovery.form handleForgetPassword={handleForgetPassword} />
  ) : (
    <RegisterForm handleForgetPassword={handleForgetPassword} />
  );
}
