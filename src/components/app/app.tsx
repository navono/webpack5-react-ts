import React, { Suspense, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { stylesContainer } from './app.module.less';
import { stylesHeader, stylesImage } from './app.module.scss';
import Login from './Login';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));

const App = (): React.ReactElement => (
  <div className={stylesContainer}>
    <nav className={stylesHeader}>
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/admin">Admin area</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <Suspense fallback="loading...">
          <LazyStrawberryIcon className={stylesImage} />
        </Suspense>
      </Route>
      <Route path="login">
        <Login />
      </Route>
    </Switch>
  </div>
);

export default App;
