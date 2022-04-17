// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.css";
// import NxWelcome from './nx-welcome';

import { Route, Link } from "react-router-dom";
import { Header, List } from "@remix-fast-ui/fast-ui-components";
import { utilFormatters } from "@remix-fast-ui/util-formatters";
import React from "react";

export function App() {
  const [test, setTest] = React.useState(false);
  React.useEffect(() => {
    console.log(test);

    fetch("./api")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      {/* <NxWelcome title="test-app" /> */}
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div className="bg-red-400">TEST123</div>

      <Header title="Welcome YEAH" />
      <List />
      <div>{utilFormatters()}</div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{" "}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
