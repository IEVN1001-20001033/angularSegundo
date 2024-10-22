import { Routes } from "@angular/router";

export default[
    {
        path: 'ejemplo1',
        //localComponent:()=>import('./sign-in/sign-in.component.ts'),
        loadComponent:()=>import('./ejemplo1/ejemplo1.component'),
    },
    {
        path: 'resistencias',
        //localComponent:()=>import('./sign-in/sign-in.component.ts'),
        loadComponent:()=>import('./resistencias/resistencias.component'),
    },
    {
        path: 'empleados',
        //localComponent:()=>import('./sign-in/sign-in.component.ts'),
        loadComponent:()=>import('./empleados/empleados.component'),
    },
    
    
]as Routes

