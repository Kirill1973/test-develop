import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RenderPosts from '../../components/RenderPosts/RenderPosts';
import PostDetails from '../../components/PostDetails/PostDetails';
import { store } from '../../../engine/init/store';
import Styles from './App.module.scss';

const App = () => (
  <Router>
    <div className={Styles.App}>
      <Provider store={store}>
        <Route path="/" component={RenderPosts} exact />
        <Route path="/posts/:id" component={PostDetails} exact />
      </Provider>
    </div>
  </Router>
);

export default App;
