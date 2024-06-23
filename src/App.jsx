import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Login from "../src/Pages/Login/Login";
import Register from "../src/Pages/Register/Register";
import Notfound from "../src/Pages/Notfound/Notfound";
import { Toaster } from "react-hot-toast";
import Home from "../src/Pages/Home/Home";
import ProutectedRoute from "./Component/ProutectedRoute/ProutectedRoute";
import UserProvider from "./Context/User.Context";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import CartProvider from "./Context/Cart.context";
import Checkout from "./Pages/Checkout/Checkout";


function App() {
  
const routs = createBrowserRouter(
  [
    {
      path : "/",
      element :  <ProutectedRoute> <Layout/></ProutectedRoute>,
      children : [
        {index : true, 
          element: (
           
            <Home/>
         
          )
,
              },
        {path : "/category/:id" ,element:<h2>category</h2>},
        {path : "/product/:id" ,element:<ProductDetails/>},
        {path : "/cart" ,element:<Cart/>},
        {path : "/checkout" ,element:<Checkout/>}, 
        {path : "*" , element : <Notfound/>}
      ]
    },

{path : "/auth", element : <Layout/> , 
  children : [
    {path : "login" , element : <Login/>},
    {path : "signup" , element : <Register/>},
  ]
}

  



  ]
)
  return (
    <>

<UserProvider>

<CartProvider>
<RouterProvider router={routs}></RouterProvider>
<Toaster />
</CartProvider>




</UserProvider>

    
   </>
  )
}

export default App;
