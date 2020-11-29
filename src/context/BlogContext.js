import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (blogPosts, action) => {
    // blogReducer is called with current state and an action object
    // it is expected to return the new state. state is immutable, so must be new.
    switch(action.type) {
        case 'get_blogposts': 
            return action.payload;
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
        jsonServer.get('/blogposts').then((response) => {
            const payload = response.data.map(
                (blogPost, a) =>{ return {id: String(blogPost.id), title: blogPost.title, content: blogPost.content}}
            );
            dispatch({type: 'get_blogposts', payload: payload})

        }).catch(e => console.log(e));
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        // dispatch({type: 'add_blogpost', payload: {title, content}});
        try {
            const resp = await jsonServer.post('/blogposts', {title, content});
            if (callback) {
                callback();
            }
        } catch (err) {
            console.log("Error adding : " + err);
        }
        
}};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        try {
            const resp = await jsonServer.delete(`/blogposts/${id}`)
            dispatch({type: 'delete_blogpost', payload: id})
        } catch (err) {
            console.log("Error deleting: " + err);
        }
    }
};

const updateBlogPost = (dispatch) => {
    return async (blogPost, callback) => {
        try {
            const resp = await jsonServer.put(`/blogposts/${blogPost.id}`, blogPost);
            dispatch({type: 'update_blogpost', payload: blogPost});
            if (callback) {
                callback();
            }
        } catch (err) {
            console.log("Error adding : " + err);
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { getBlogPosts, addBlogPost, deleteBlogPost, updateBlogPost }, 
    [] // an empty Array of blogposts
);