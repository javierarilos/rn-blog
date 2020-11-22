import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ route }) => {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const { addBlogPost } = React.useContext(Context);

    return (<View>
        <Text style={styles.label}>Title:</Text>
        <TextInput value={title} onChangeText={setTitle} style={styles.input}/>
        <Text style={styles.label}>Contents:</Text>
        <TextInput value={content} onChangeText={setContent} style={styles.input}/>
        <Button 
            title="Save BlogPost"
            onPress={() => addBlogPost(title, content)}
        />
    </View>);
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5 
    }
});

export default CreateScreen;