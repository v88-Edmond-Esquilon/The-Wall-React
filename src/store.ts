import { configureStore } from "@reduxjs/toolkit";
import WallDashboardManagement from "./_reducers/wall_dashboard.reducer";


export const store = configureStore({
    reducer: {
        wall_dashboard: WallDashboardManagement
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;