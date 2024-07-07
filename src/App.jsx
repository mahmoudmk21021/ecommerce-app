import { RouterProvider, createHashRouter } from "react-router-dom";
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
import AllOrders from "./Pages/AllOrders/AllOrders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wishlist from "./Pages/Wishlist/Wishlist";
import WishlistProvider from "./Context/Wishlist.context";

import Brands from "./Pages/Brands/Brands";
import Categories from "./Pages/Categories/Categories";
import Products from "./Pages/Products/Products";
import Forgot from "./Pages/Forgot/Forgot";
import Resetpassword from "./Pages/Resetpassword/Resetpassword";
import Resetnewpassword from "./Pages/Resetpassword/Resetnewpassword";

function App() {
  const routs = createHashRouter([
    {
      path: "/",
      element: (
        <ProutectedRoute>
          {" "}
          <Layout />
        </ProutectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/categories", element: <Categories /> },
        { path: "/products", element: <Products /> },
        { path: "/brands", element: <Brands /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/allorders", element: <AllOrders /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "*", element: <Notfound /> },
      ],
    },

    {
      path: "/auth",
      element: <Layout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Register /> },
        { path: "forgotPasswords", element: <Forgot /> },
        { path: "ResetPassword", element: <Resetpassword /> },
        { path: "ResetNewPassword", element: <Resetnewpassword /> },
      ],
    },
  ]);

  const myClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={myClient}>
        <UserProvider>
          <WishlistProvider>
            <CartProvider>
              <RouterProvider router={routs}></RouterProvider>
              <Toaster />
            </CartProvider>
          </WishlistProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
