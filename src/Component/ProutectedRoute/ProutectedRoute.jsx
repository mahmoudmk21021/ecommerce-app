import React, { Children, useContext } from 'react'
import Home from '../../Pages/Home/Home'
import { Navigate } from 'react-router-dom';
import { userContext } from '../../Context/User.Context';

export default function ProutectedRoute({children}) {
const {token} = useContext(userContext) ;
// console.log(token );
    if (token) {
        return children }
        else {
            return <Navigate  to ="/auth/login" />
        }
    }
//   return (
//     <>
//   <div>ProutectedRoute</div>
//   {children}
  
//     </>
//   );

