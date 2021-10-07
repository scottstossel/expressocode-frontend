import { useState } from "react";
import { Route } from "react-router";
import { isAuthenticated } from "../services/authService";
import LoginView from "../views/LoginView";

const AdminRoute = ({ component: Comp, ...rest }) => {
  const [object, setObject] = useState(isAuthenticated());

  return (
    <Route {...rest} render={props => object && (object.user.role === "ADMIN") ? (
      <Comp {...props} />
    ) : (
      <Route pathname='/' component={LoginView} />
    )} />
  )
}

export default AdminRoute;