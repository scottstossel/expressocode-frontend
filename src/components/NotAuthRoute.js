import { useState } from "react"
import { Route } from "react-router";
import { isAuthenticated } from "../services/authService"
import HomeView from "../views/HomeView";


const NotAuthRoute = ({ component: Comp, ...rest }) => {
  const [object, setObject] = useState(isAuthenticated());

  return (
    <Route {...rest} render={props => (!object) ? (
      <Comp {...props} />
    ) : (
      <Route pathname="/" component={HomeView} />
    )} />
  )
}

export default NotAuthRoute;