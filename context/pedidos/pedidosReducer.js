import {OBTENER_PRODUCTOS_EXITO} from '../../types/index';
import {SELECCIONAR_PRODUCTO} from '../../types/index';



export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        menu: action.payload,
      };

    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        platillo:action.payload
      }  
    default:
      return state;
  }
};
