// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import PostsPage from './PostsPage';
import CreatePostPage from './CreatePostPage';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={PostsPage} />
                    <Route path="/create" component={CreatePostPage} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
