import React, { Suspense } from "react";
import "./Styles/style.css";
import Loading from "./Components/LoadingScreen";
const Content = React.lazy(() => import("./Components/Content"));
const MovingParticles = React.lazy(
  () => import("./Components/MovingParticles")
);

function App() {
  return (
    <>
      <Loading />
      <Suspense fallback={<div>Loading...</div>}>
        <MovingParticles />
        <Content />
      </Suspense>
    </>
  );
}

export default App;
