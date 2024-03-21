import { createContext, useState, useContext, useEffect } from 'react';


const RubriqueContext = createContext();


// eslint-disable-next-line react/prop-types
export const RubriqueProvider = ({children}) => {

  const [openedRubrique, setOpenedRubrique] = useState('Home');

  useEffect(() => {console.log(openedRubrique)}, [openedRubrique])


  return (
    <RubriqueContext.Provider value={{ openedRubrique, setOpenedRubrique }}>
      {children}
    </RubriqueContext.Provider>
  );
};


export const useRubrique = () => {
  return useContext(RubriqueContext);
};