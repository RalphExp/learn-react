import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    state = { error: null };
    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        const { error } = this.state;
        const { children, fallback : Fallback } = this.props;
        if (error) return <Fallback error={error} />;
            return children;
    }
}

function ErrorScreen({ error }) {
    //
    // Here you can handle or track the error before rendering the message
    //
    return (
      <div className="error">
        <h3>We are sorry... something went wrong</h3>
        <p>We cannot process your request at this moment.</p>
        <p>ERROR: {error.message}</p>
      </div>
    );
}

export { ErrorScreen }