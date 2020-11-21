import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost }= useContext(BlogContext);
    return (<View>
        <FlatList
            data={state} 
            keyExtractor={(blogPost) => blogPost.id}
            renderItem={({ item }) => { return (<View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>
                </View>);
            }}
         />
         <Button title="Add Post" onPress={addBlogPost}/>
        <Text>{state.length} Blog Posts</Text>
    </View>);
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 20
    }
});

export default IndexScreen;