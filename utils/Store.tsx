import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';
import { StateType, ActionType } from '../utils/types';

const initialState = {
  cartItems: Cookies.get('cartItems')
    ? // @ts-ignore
      JSON.parse(Cookies.get('cartItems'))
    : [],
  shippingAddress: Cookies.get('shippingAddress')
    ? // @ts-ignore
      JSON.parse(Cookies.get('shippingAddress'))
    : {},
};

export const Store = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const newCartItems = [...state.cartItems, newItem];
      Cookies.set('cartItems', JSON.stringify(newCartItems));
      return {
        cartItems: newCartItems,
        shippingAddress: state.shippingAddress,
      };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cartItems.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems, shippingAddress: state.shippingAddress };
    }
    case 'SAVE_SHIPPING_ADDRESS':
      Cookies.set('shippingAddress', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        shippingAddress: {
          ...action.payload,
        },
      };
    case 'CART_CLEAR':
      Cookies.remove('cartItems');
      return { ...state, cartItems: [] };
    default:
      console.log('getting default state', state);
      return state;
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
