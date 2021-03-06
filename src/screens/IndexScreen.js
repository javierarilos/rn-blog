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
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <Feather name="file-plus" style={{ paddingRight: 10, fontSize: 25 }}/>
                </TouchableOpacity>
            )}
        });
    });

    React.useEffect(() => {
        getBlogPosts();

        // get blog posts each time we gain focus back
        const focusListener = navigation.addListener('focus', () => getBlogPosts());

        // useEffect might return a cleanup function that is call whenever the screen is never used again, avoiding memory leak
        return () => focusListener.remove();
    },
    []);

    const { state, deleteBlogPost, getBlogPosts }= useContext(BlogContext);
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