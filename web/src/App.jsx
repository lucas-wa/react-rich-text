import { SignModal } from "./components/SignModal";
import { LoginModal } from "./components/LoginModal";
import "./global.scss";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserContext } from "./contexts/userContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/sign",
    element: <SignModal/>
  },
  {
    path: "/login",
    element: <LoginModal/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
]);


function App() {

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App
