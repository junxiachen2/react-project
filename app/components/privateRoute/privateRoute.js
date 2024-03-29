import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const _beforeRender = (props) => {
    const hasLogin = true
    if (hasLogin) {
      return <Component {...props} />
    }
    else {
      return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    }
  }

  return (
    <Route
      {...rest}
      render={props => _beforeRender(props)}
    />
  );
}

export default PrivateRoute