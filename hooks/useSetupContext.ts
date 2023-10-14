import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { TSetup } from '@/types';

interface SetupContextType {
  setup: TSetup;
  setSetup: Dispatch<SetStateAction<TSetup>>;
}

export const SetupContext = createContext<SetupContextType | null>(null);

const useSetupContext = () => {
  const setupContext = useContext(SetupContext);

  if (!setupContext) {
    throw new Error('useSetup has to be used within <SetupContext.Provider>');
  }

  return setupContext;
};

export default useSetupContext;
