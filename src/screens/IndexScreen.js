import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {

    const { state, addBlogPost }= useContext(BlogContext);
    return (<View>
        <FlatList
            data={state} 
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => <Text>{item.title}</Text>}
         />
         <Button title="Add Post" onPress={addBlogPost}/>
        <Text>{state.length} Blog Posts</Text>
    </View>);
}

const styles = StyleSheet.create({});

export default IndexScreen;