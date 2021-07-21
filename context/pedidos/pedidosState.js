import React, {useReducer} from 'react';
import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

const PedidoState = props => {
  //estado Inicial
  
  const initialState = {
    pedido: [],
   
  };

  //useReduce con dispacht para ejecutar funciones para

  const [state, dispacht] = useReducer(PedidoReducer, initialState);

  return (
    <PedidoContext.Provider value={{pedido: state.pedido}}>
      {props.children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
