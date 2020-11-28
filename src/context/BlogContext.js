import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (blogPosts, action) => {
    // blogReducer is called with current state and an action object
    // it is expected to return the new state. state is immutable, so must be new.
    switch(action.type) {
        case 'get_blogposts': 
            return action.payload;
        case 'add_blogpost':
            const newBlogPost = {
                id: ""+Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            };
            return [...blogPosts, newBlogPost];
        case 'delete_blogpost':
            return blogPosts.filter((blogPost) => blogPost.id !== action.payload);
        case 'update_blogpost':
            console.log('update blogpost');
            console.log(action.payload);
            const newBp = blogPosts.map(blogPost => blogPost.id === action.payload.id 
                ? action.payload 
                : blogPost);
            console.log('new Bps');
            console.log(newBp);
            return newBp;
        default:
            return blogPosts;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        const payload = response.data.map(
            (blogPost, a) =>{ return {id: String(blogPost.id), title: blogPost.title, content: blogPost.content}}
        );
        dispatch({type: 'get_blogposts', payload: payload})
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title, content}});
        console.log('allo');
        if (callback) {
            callback();
        }
}};

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: 'delete_blogpost', payload: id})
};

const updateBlogPost = (dispatch) => {
    return (blogPost, callback) => {
        dispatch({type: 'update_blogpost', payload: blogPost});
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { getBlogPosts, addBlogPost, deleteBlogPost, updateBlogPost }, 
    [] // an empty Array of blogposts
);