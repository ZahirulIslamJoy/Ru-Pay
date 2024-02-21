import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Registration from "../register/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
        {
            path:"register",
            element:<Registration></Registration>
        }
    ]
  },
]);

export default router;