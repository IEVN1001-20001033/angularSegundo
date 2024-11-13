import { Routes } from "@angular/router";

export default[
    {
        path: 'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component'),
    },
    {
        path: 'agregar',
        //localComponent:()=>import('./sign-in/sign-in.component.ts'),
        loadComponent:()=>import('./agregar/agregar.component'),
    },
    
    
]as Routes