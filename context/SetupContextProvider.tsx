'use client';

import { ReactNode, useState } from 'react';

import { SetupContext } from '@/hooks/useSetupContext';
import { TSetup } from '@/types';

export default function SetupContextProvider({ children }: { children: ReactNode }) {
  const [setup, setSetup] = useState<TSetup>({ players: 1, grid: 30 });

  return <SetupContext.Provider value={{ setup, setSetup }}>{children}</SetupContext.Provider>;
}
