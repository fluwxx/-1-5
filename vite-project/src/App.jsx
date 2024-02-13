// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import PostsPage from './PostsPage';
import CreatePostPage from './CreatePostPage';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={PostsPage} />
                    <Route path="/create" component={CreatePostPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
