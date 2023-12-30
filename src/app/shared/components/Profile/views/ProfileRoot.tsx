import { ReactNode } from 'react';
import { profileRootTv } from '../ProfileTV';

interface ProfileRootProps {
  children: ReactNode;
}

export function ProfileRoot({ children }: ProfileRootProps) {
  return <div className={profileRootTv()}>{children}</div>;
}
