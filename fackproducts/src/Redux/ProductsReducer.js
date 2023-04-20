import { createSlice } from '@reduxjs/toolkit';

const ProductsReducer = createSlice({
    name: 'productsss',
    initialState:{
        allProducts: [],
        allCart:[],
        quantity:0
    },
    reducers:{
        AddProducts:(state, action)=>{
            state.allProducts=action.payload;
        },
        AddCart:(state, action)=>{
            const find = state.allCart.findIndex(item=>item.id===action.payload.id);
            if(find>=0){
                state.allCart[find].quantity +=1
            }else{
                const tempvalue = {...action.payload, quantity:1}
                state.allCart.push(tempvalue)
            }
        },
        removeItem:(state, action)=>{
           const remainCartItem = state.allCart.filter(item => item.id !== action.payload.id);
           state.allCart = remainCartItem
        }
    
    }
})

export const { AddProducts, AddCart, removeItem } = ProductsReducer.actions;
export default ProductsReducer.reducer;