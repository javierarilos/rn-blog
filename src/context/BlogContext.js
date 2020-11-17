import React from 'react';

const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = React.useState([]);

    const addBlogPost = () => setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;