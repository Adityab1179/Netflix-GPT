import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { useEffect } from "react";
import { addUser, removeUser } from "./Slices/UserSlice";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import { useNavigate } from "react-router-dom";


function App() {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ user: uid, email: email, name: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, [dispatch]);

  return (
    
      <div>
        <Header />
        <Outlet /> 
      </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <RouterProvider router={appRouter} />
  </Provider>
);
