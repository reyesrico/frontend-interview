import React from 'react';
import { useNavigate } from 'react-router';

// react-router v6+ removed the `withRouter` HOC. This shim restores it for the
// existing class components by injecting a `history`-like object (and `navigate`)
// backed by the v6/v7 `useNavigate` hook, so `this.props.history.push('/')` keeps working.
export function withRouter(Component) {
  return function WithRouter(props) {
    const navigate = useNavigate();
    const history = {
      push: (to) => navigate(to),
      replace: (to) => navigate(to, { replace: true }),
    };
    return <Component {...props} history={history} navigate={navigate} />;
  };
}

export default withRouter;
