import React, { useReducer } from 'react'
import PedidoReducer from './pedidosReducer'
import PedidoContext from './pedidosContext'

import SELECCIONAR_PRODUCTO from '../../types/index'

const PedidoState = props => {
  // estado Inicial

  const initialState = {
    pedido: [],
    platillo: null
  }

  // useReduce con dispacht para ejecutar funciones para

  const [state, dispatch] = useReducer(PedidoReducer, initialState)

  const seleccionarPlatillo = platillo => {
   dispatch({
     type: SELECCIONAR_PRODUCTO,
     payload:platillo
   })
  }

  return (
    <PedidoContext.Provider value={{
      pedido: state.pedido,
      platillo: state.platillo,
      seleccionarPlatillo
    }}>
      {props.children}
    </PedidoContext.Provider>
  )
}

export default PedidoState
