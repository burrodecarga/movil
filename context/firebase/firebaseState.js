import React, {useReducer} from 'react';
import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

const FirebaseState = props => {
  //estado Inicial
  console.log(firebase);
  const initialState = {
    menu: [],
   
  };

  //useReduce con dispacht para ejecutar funciones para

  const [state, dispacht] = useReducer(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{menu: state.menu, firebase}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
