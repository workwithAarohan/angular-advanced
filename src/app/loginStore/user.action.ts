import { createAction, props } from "@ngrx/store";

export const loginAction = createAction(
    '[Header Component] Login',
    props<{isLoggedIn:boolean}>() 
);

// export const logoutAction = createAction(
//     '[Header Component] Login',
//     props<{isLoggedIn:boolean}>() 
// );