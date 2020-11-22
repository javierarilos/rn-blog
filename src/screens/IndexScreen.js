import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const IndexScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { return (
                // <Button onPress={() => console.log("header but pressed")} title="+"/>
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <Feather name="file-plus" style={{ paddingRight: 10, fontSize: 25 }}/>
                </TouchableOpacity>
            )}
        });
    });

    const { state, addBlogPost, deleteBlogPost }= useContext(BlogContext);
    return (<View>
        <FlatList
            data={state} 
            keyExtractor={(blogPost) => blogPost.id }
            renderItem={({ item }) => { return (
            <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}> 
                    <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
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