import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
    const { state: blogPosts } = useContext(Context); 
    const blogPostId = route.params.id; // here we could receive the whole object and not use the id + context
    const blogPost = blogPosts.find((blogPost) => blogPost.id === blogPostId);

    return (<View>
        <Text>Title: {blogPost.title}</Text>
        <Text>Id: {blogPost.id}</Text>
    </View>);
}

const styles = StyleSheet.create({
});

export default ShowScreen;