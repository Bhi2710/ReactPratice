import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';


const store = configureStore({
    reducer:{data:counter}
})

export default store;