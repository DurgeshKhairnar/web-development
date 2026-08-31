import { createContext , useState , useContext } from 'react';

export const cartItems = createContext({
    cartItemsList:[{
        id:1,
        image:'',
        title:'Mix_Pizza',
        price:120.00
    }],
    addItems:function(item){},
    removeItem:function(ind){}
});

export const CartItemsProvider = cartItems.Provider;

export const useItems = () => {
    return useContext(cartItems);
}

