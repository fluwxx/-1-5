// Layout.js

import React from 'react';

function Layout({ children }) {
    return (
        <div>
            {/* Header */}
            <header>
                <h1>My Blog</h1>
                {/* Menu */}
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">Create Post</a></li>
                    </ul>
                </nav>
            </header>

            {/* Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 My Blog</p>
            </footer>
        </div>
    );
}

export default Layout;
