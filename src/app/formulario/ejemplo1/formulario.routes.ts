import { Routes } from "@angular/router";

export default[
    {
        path: 'ejemplo1',
        //localComponent:()=>import('./sign-in/sign-in.component.ts'),
        loadComponent:()=>import('./ejemplo1.component'),
    },
    
    
]as Routes

