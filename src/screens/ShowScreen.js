import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route }) => {
    console.log("ShowScreen Navigation:");
    console.log(navigation);

    const { state: blogPosts } = useContext(Context); 

    const blogPostId = route.params.id; // here we could receive the whole object and not use the id + context
    const blogPost = blogPosts.find((blogPost) => blogPost.id === blogPostId);
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { return (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: blogPostId})}>
                    <Feather name="edit" style={{ paddingRight: 10, fontSize: 25 }}/>
                </TouchableOpacity>
            )}
        });
    });

    return (<View>
        <Text>Title: {blogPost.title}</Text>
        <Text>Id: {blogPost.id}</Text>
        <Text>{blogPost.content}</Text>
    </View>);
}

const styles = StyleSheet.create({
});

export default ShowScreen;