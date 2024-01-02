import { configureStore } from '@reduxjs/toolkit';
import containersReducer from './selectLayout/selectLayoutSlice';

export const store = configureStore({
    reducer: {
        containers: containersReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;