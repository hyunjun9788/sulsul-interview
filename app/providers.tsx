'use client';

import { PropsWithChildren } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps extends PropsWithChildren {
  session?: Session;
  //   queryClient?: QueryClient;
}

export const Providers = ({ children, session }: ProvidersProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
