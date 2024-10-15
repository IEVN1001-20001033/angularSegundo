import { Routes } from "@angular/router";

export default[
    {
        path: 'sign-in',
        //localComponent:()=>import('./sign-in/sign-in.component.ts'),
        loadComponent:()=>import('./sign-in/sign-in.component'),
    },
    {
        path: 'sign-up',
        loadComponent:()=>import('./sign-up/sign-up.component'),
    },
    
    
]as Routes

