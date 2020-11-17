import React, { createContext } from 'react';

const BlogContext = React.createContext();

const blogPosts = [
    {title: "Blog post #1"},
    {title: "Blog post #2"},
]

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;