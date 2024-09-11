import { createStore } from 'redux';
import { cartReducer } from './reducers';

const store = createStore(cartReducer);

store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export default store;
