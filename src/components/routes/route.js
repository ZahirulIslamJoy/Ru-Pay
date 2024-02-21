import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Registration from "../register/Registration";
import Login from "../login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
        {
            path:"register",
            element:<Registration></Registration>
        },
        {
          path:"login",
          element:<Login></Login>
      }
    ]
  },
]);

export default router;