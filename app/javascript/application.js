// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';



const LazyHome = lazy(() => import('./components/Home'));
const LazyGreeting = lazy(() => import('./components/Greeting'));


ReactDOM.render(
 <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root'),
);

function App() {

    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" component={LazyHome} />
                <Route path="/greeting" component={LazyGreeting} />
            </Routes>
        </Suspense>
      </Router>
    );
  };
  