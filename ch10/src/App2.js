import React, { Suspense } from "react";
import GridLoader from "react-spinners/GridLoader";
import ErrorBoundary from "./ErrorBoundary";

function createResource(pending) {
    let error, response;
    pending.then(r => (response = r)).catch(e => (error = e));
    return {
        read() {
            if (error)
                throw error;
            if (response)
                return response;
            throw pending;
        }
    };
}

const threeSecondsToGnar = new Promise(resolves =>
    setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);

const resource = createResource(threeSecondsToGnar);

function Gnar() {
    const result = resource.read();
    return <h1>Gnar: {result.gnar}</h1>;
}

export default function App2() {
    return (
        <Suspense fallback={<GridLoader />}>
            <ErrorBoundary>
                <Gnar />
            </ErrorBoundary>
        </Suspense>
    );
}