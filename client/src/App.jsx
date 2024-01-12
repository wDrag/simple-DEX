import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Swap from "./Pages/Swap/Swap";
import Tokens from "./Pages/Tokens/Tokens";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Swap />,
        },
        {
          path: "/tokens",
          element: <Tokens />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
