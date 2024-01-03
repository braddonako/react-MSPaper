import { configureStore } from '@reduxjs/toolkit';
import containersReducer from './selectLayout/selectLayoutSlice';
import backgroundReducer from './imagePicker/backgroundImageSlice';

export const store = configureStore({
    reducer: {
        containers: containersReducer,
        background: backgroundReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;