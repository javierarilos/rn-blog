import React from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation, route }) => {
    const { state: blogPosts, updateBlogPost } = React.useContext(Context);

    const blogPostId = route.params.id; // here we could receive the whole object and not use the id + context
    const blogPost = blogPosts.find((blogPost) => blogPost.id === blogPostId);

    return <BlogPostForm 
        initialValues={blogPost}
        onSubmit={(title, content) => {
            updateBlogPost({id: blogPost.id, title, content}, () => navigation.pop());
        }}
    />;
}

const styles = StyleSheet.create({});

export default EditScreen;