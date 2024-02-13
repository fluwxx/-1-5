// CreatePostPage.js
import React, { useState } from 'react';

function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://dummyjson.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
        });

        if (response.ok) {
            console.log('Post created successfully!');
            // Обновляем состояние приложения с новым постом
        } else {
            console.error('Failed to create post');
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePostPage;
