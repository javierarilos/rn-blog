import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const { state, addBlogPost }= useContext(BlogContext);
    return (<View>
        <FlatList
            data={state} 
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => { return (<View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Feather name="trash" style={styles.icon}/>
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