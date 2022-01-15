// import { configureStore } from '@reduxjs/toolkit';
// import ReducerTest from '../reducer/reducerTest';

// const store = configureStore({ reducer: ReducerTest });
// console.log("storeValue", store.getState());

import reducerTest from '../reducer/reducerTest';
import { createStore } from 'redux';

const store = createStore(reducerTest);

export default store;