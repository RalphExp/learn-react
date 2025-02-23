import logo from './logo.svg';
import './App.css';
import ErrorBoundary, { ErrorScreen } from './ErrorBoundary';

function SiteLayout({
  children, menu = c => null}) {
  return (
      <div className="container">
          <div className="panel-1">{menu}</div>
          <div className="panel-2">{children}</div>
      </div>
  );
}

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

const BreakThings = () => {
  throw new Error("We intentionally broke something");
};

function App() {
  return (
      <SiteLayout
        menu={
          <ErrorBoundary fallback={ErrorScreen}>
            <p>Site Layout Menu</p>
            <BreakThings />
          </ErrorBoundary>
        }
      >
        <ErrorBoundary fallback={ErrorScreen}>
          <Callout>Callout<BreakThings /></Callout>
        </ErrorBoundary>
        <ErrorBoundary fallback={ErrorScreen}>
          <h1>Contents</h1>
          <p>this is the main part of the example layout</p>
        </ErrorBoundary>
      </SiteLayout>
  );
}

export default App;
