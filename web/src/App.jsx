import { SignModal } from "./components/SignModal";
import { LoginModal } from "./components/LoginModal";
import "./global.scss";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  }
]);


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
