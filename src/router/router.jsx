import React from 'react'
import {  createBrowserRouter } from 'react-router'
import AppLayout from '../Component/AppLayout'
import HomePage from '../page/HomePage'
import About from '../page/About'
import NotFound from '../page/NotFound'
import CallMe from '../page/CallMe'
import CountryAll from '../page/CountryAll'
import CountryDetails from '../page/CountryDetails'

const router = createBrowserRouter([
{
element: <AppLayout/>,
children:[
    {index:true,element: <HomePage/>},
 { path:"about",element: <About/> },
  {path:"CallMe", element:<CallMe/>},
    {path:"CallMe", element:<CallMe/>},
        {path:"CallMe", element:<CallMe/>},

        {path:"countrys",
          children:[
{index:true,element:<CountryAll/>},
{path:":countryId",element:<CountryDetails/>},
]},

 {path:"*" ,element:<NotFound/> },

],

},
]);

export default router;