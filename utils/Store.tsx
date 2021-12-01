import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';

type ServiceType = {
  id: number;
  name: string;
  price: number;
};

type CartType = {
  cartItems: ServiceType[];
  shippingAddress: any;
};

type InitialStateType = {
  cart: CartType;
  userInfo: any;
};

type ActionType = {
  type: string;
  payload: any;
};

const initialState = {
  cart: {
    cartItems: Cookies.get('cartItems')
    // @ts-ignore
      ? JSON.parse(Cookies.get('cartItems'))
      : [],
    shippingAddress: Cookies.get('shippingAddress')
    // @ts-ignore
      ? JSON.parse(Cookies.get('shippingAddress'))
      : { location: {} },
  },
  userInfo: Cookies.get('userInfo')
  // @ts-ignore
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
};

export const Store = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});



function reducer(state: InitialStateType, action: ActionType) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    default:
      return state;
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
