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
    { addBlogPost, deleteBlogPost, updateBlogPost }, 
    [{id: "757575757", title: "TEST blogpost", content: "something light and entertaining."}] // an empty Array of blogposts
);