import React, { createContext, useContext } from 'react';
import { useCardReducer } from './cardReducer';

const CardContext = createContext();
const { Provider } = CardContext;

const CardProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCardReducer({});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCardContext = () => useContext(CardContext);

export { CardProvider, useCardContext };
