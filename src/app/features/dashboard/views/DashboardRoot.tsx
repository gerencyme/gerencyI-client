import { ReactNode } from 'react';
import { dashboardHeaderRootTv } from '../DashboardTV';

interface DashboardRootProps {
  children: ReactNode;
}

export function DashboardRoot({ children }: DashboardRootProps) {
  return <div className={dashboardHeaderRootTv()}>{children}</div>;
}
