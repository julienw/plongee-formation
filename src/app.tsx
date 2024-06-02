import { Router, Route } from "preact-router";
import { createHashHistory } from "history";
import Header from "./header";
import Home from "./pages/home";
import NotFound from "./pages/_404";

export function App() {
  return (
    <>
      <Header />
      {/* @ts-expect-error type we know this works, the type is just incorrect*/}
      <Router history={createHashHistory()}>
        <Route component={Home} path="/" />
        <Route component={NotFound} default />
      </Router>
    </>
  );
}
