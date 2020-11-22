import createDataContext from './createDataContext';

const blogReducer = (blogPosts, action) => {
    switch(action.type) {
        case 'add_blogpost':
            const newBlogPost = {
                id: ""+Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            };
            return [...blogPosts, newBlogPost];
        case 'delete_blogpost':
            return blogPosts.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return blogPosts;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content) => dispatch({type: 'add_blogpost', payload: {title, content}})
}

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: 'delete_blogpost', payload: id})
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    [] // an empty Array of blogposts
);