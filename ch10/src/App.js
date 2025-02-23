import React, { useState, Suspense, lazy } from "react";
import Agreement from "./Agreement";
import BarLoader from "react-spinners/BarLoader";

/* We can put off loading the main component until it has
 * rendered by declaring it using React.lazy instead of
 * initially importing it */
const Main = lazy(() => import("./Main"));

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree)
    return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <Suspense fallback={<BarLoader />}>
      <Main />
    </Suspense>
  );
}
