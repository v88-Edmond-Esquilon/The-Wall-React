import { configureStore } from "@reduxjs/toolkit";
import WallDashboardManagement from "./_reducers/wall_dashboard.reducer";
import SignUpManagement from "./_reducers/sign_up.reducer";
import SignInManagement from "./_reducers/sign_in.reducer";

export const store = configureStore({
    reducer: {
        wall_dashboard : WallDashboardManagement,
        sign_up        : SignUpManagement,
        sign_in        : SignInManagement,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;